import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Ports the original buildScroll(): hides every direct child of each
 * section/footer content div behind [data-gs] (opacity:0) immediately, then
 * — once the intro sequence signals scrollReady — wires GSAP ScrollTrigger
 * reveals, RTL-aware headline wipes, and the stat/price count-up.
 */
export function useScrollReveal(scrollReady, prefersReducedMotion) {
  useEffect(() => {
    const blocks = [];
    document.querySelectorAll("section > div, footer > div").forEach((container) => {
      if (container.closest("[data-intro]") || container.closest("#top")) return;
      Array.from(container.children).forEach((el) => {
        el.setAttribute("data-gs", "");
        blocks.push(el);
      });
    });

    function show() {
      blocks.forEach((el) => { el.style.opacity = "1"; });
    }

    if (prefersReducedMotion) {
      show();
      return;
    }
    if (!scrollReady) return;

    const g = gsap, ST = ScrollTrigger;
    if (!g || !ST) { show(); return; }
    g.registerPlugin(ST);
    const EASE = "power3.out";
    const rtl = document.documentElement.getAttribute("dir") === "rtl";

    g.to("[data-progress]", {
      scaleX: 1, ease: "none",
      scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 0.6 },
    });

    document.querySelectorAll("section, footer").forEach((sec) => {
      if (sec.id === "top") return;
      const own = blocks.filter((b) => sec.contains(b));
      if (!own.length) return;

      const tl = g.timeline({
        scrollTrigger: { trigger: sec, start: "top 74%", once: true },
        onComplete: () => own.forEach((b) => { b.style.opacity = "1"; }),
      });

      own.forEach((block, bi) => {
        const at = bi === 0 ? 0 : ">-0.62";
        const head = block.querySelector("h2, h3");
        const eyebrow = block.querySelector('span[style*="uppercase"]');
        const index = block.querySelector('span[style*="Plex Mono"]');
        const cards = Array.prototype.filter.call(block.children, (c) => c.tagName === "DIV" || c.tagName === "DETAILS");
        const photos = block.querySelectorAll(".photo, .avatar");

        tl.set(block, { opacity: 1 }, at);

        if (index && index !== eyebrow) {
          tl.fromTo(index, { opacity: 0, x: -14 }, { opacity: 1, x: 0, duration: 0.75, ease: EASE }, at);
        }
        if (eyebrow) {
          tl.fromTo(eyebrow, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.8, ease: EASE }, at === 0 ? 0.06 : at);
        }
        if (head) {
          tl.fromTo(head,
            { clipPath: rtl ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)", y: 14 },
            { clipPath: "inset(0 0% 0 0)", y: 0, duration: 1.25, ease: "power3.out" },
            at === 0 ? 0.1 : at);
        }
        if (!head && !eyebrow && !cards.length) {
          tl.fromTo(block, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 1, ease: EASE }, at);
        }
        if (cards.length > 1) {
          tl.fromTo(cards,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1.05, ease: EASE, stagger: { each: 0.13, from: "start" } },
            at === 0 ? 0.18 : at);
        } else if (cards.length === 1 && !head) {
          tl.fromTo(cards, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1, ease: EASE }, at);
        }
        if (photos.length) {
          tl.fromTo(photos,
            { clipPath: "inset(100% 0 0 0)", scale: 1.06 },
            { clipPath: "inset(0% 0 0 0)", scale: 1, duration: 1.5, ease: "power3.out", stagger: 0.14 },
            at === 0 ? 0.12 : "<0.08");
        }
      });
    });

    document.querySelectorAll("[data-figure]").forEach((el) => {
      const raw = (el.textContent || "").trim();
      const m = raw.match(/^([^\d]*)([\d\s]*\d(?:[.,]\d+)?)(.*)$/);
      if (!m) return;
      const num = m[2].replace(/\s+$/, "");
      const tail = m[2].slice(num.length) + m[3];
      const digits = num.replace(/\s/g, "");
      const target = parseFloat(digits.replace(",", "."));
      if (!isFinite(target) || target === 0) return;
      if (/^0\d/.test(digits)) return;
      const dec = (digits.split(".")[1] || "").length;
      const grouped = /\s/.test(num);
      const obj = { v: 0 };
      g.to(obj, {
        v: target, duration: 1.8, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 82%", once: true },
        onUpdate: () => {
          let n = dec ? obj.v.toFixed(dec) : String(Math.round(obj.v));
          if (grouped) n = n.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
          el.textContent = m[1] + n + tail;
        },
        onComplete: () => { el.textContent = raw; },
      });
    });

    ST.refresh();

    requestAnimationFrame(() => {
      blocks.forEach((b) => {
        if (b.getBoundingClientRect().bottom < 0) b.style.opacity = "1";
      });
    });

    return () => {
      ST.getAll().forEach((trigger) => trigger.kill());
    };
  }, [scrollReady, prefersReducedMotion]);
}
