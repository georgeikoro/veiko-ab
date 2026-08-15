import { useEffect, useState } from "react";

/**
 * Plays the full dispatch intro on every load (not just first visit).
 * prefers-reduced-motion skips it entirely for accessibility.
 * Timings match the original: overlay hides at 2900ms, hero "wakes" at
 * 3320ms, scroll-reveal setup starts at 3540ms.
 */
export function useIntroSequence() {
  const [prefersReducedMotion] = useState(() => {
    try { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return false; }
  });
  const [introVisible, setIntroVisible] = useState(!prefersReducedMotion);
  const [woke, setWoke] = useState(prefersReducedMotion);
  const [scrollReady, setScrollReady] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const hideTimer = setTimeout(() => setIntroVisible(false), 2900);
    const wakeTimer = setTimeout(() => setWoke(true), 3320);
    const scrollTimer = setTimeout(() => setScrollReady(true), 3540);
    return () => {
      clearTimeout(hideTimer);
      clearTimeout(wakeTimer);
      clearTimeout(scrollTimer);
    };
  }, [prefersReducedMotion]);

  return { introVisible, woke, scrollReady, prefersReducedMotion };
}
