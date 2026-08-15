import { useLanguage } from "../i18n/LanguageContext.jsx";
import { useHoverStyle } from "../hooks/useHoverStyle.js";
import SectionKicker from "./SectionKicker.jsx";

const CARDS = [
  { n: "01", img: "veiko-svc-1", alt: "Courier handing over a parcel at a door", title: "Same-day package delivery", desc: "Documents, samples, the parcel that cannot wait for tomorrow.", cta: "Book a delivery →" },
  { n: "02", img: "veiko-svc-2", alt: "Catering trays loaded into a van", title: "Large-order food delivery", desc: "Catering trays, bulk orders, the Friday lunch run.", cta: "Plan a food run →" },
  { n: "03", img: "veiko-svc-3", alt: "Two movers carrying a sofa down stairs", title: "Small-scale moving services", desc: "Studios, one-beds, student rooms, or one heavy item.", cta: "Get a moving price →" },
  { n: "04", img: "veiko-svc-4", alt: "Old furniture loaded for disposal", title: "Junk removal & disposal", desc: "Old furniture, bagged household waste, a hallway of renovation debris.", cta: "Clear it out →" },
];

function ServiceCard({ card }) {
  const { t } = useLanguage();
  const [style, hoverHandlers] = useHoverStyle(
    { minWidth: 0, display: "flex", flexDirection: "column", transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)" },
    { transform: "translateY(-6px)" }
  );
  return (
    <div style={style} {...hoverHandlers}>
      <div style={{ aspectRatio: "4 / 3", marginBottom: 24, overflow: "hidden" }}>
        <img className="photo" src={`/images/${card.img}.jpg`} alt={card.alt} loading="lazy" decoding="async" />
      </div>
      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: "#7E887F", marginBottom: 12 }}>{card.n}</span>
      <span style={{ fontSize: 17.5, fontWeight: 600, marginBottom: 10, letterSpacing: "-0.01em" }}>{t(card.title)}</span>
      <span style={{ fontSize: 15, lineHeight: 1.7, color: "#4A544D" }}>{t(card.desc)}</span>
      <a href="#quote" style={{ marginTop: 20, fontSize: 14, fontWeight: 600 }}>{t(card.cta)}</a>
    </div>
  );
}

export default function Services() {
  const { t } = useLanguage();
  return (
    <section id="services">
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "128px 40px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", alignItems: "end", gap: "32px 56px", marginBottom: 56 }}>
          <SectionKicker index="[01]" eyebrow="What we do" heading="Four services, one van team" />
          <p style={{ margin: 0, maxWidth: "44ch", fontSize: 16.5, lineHeight: 1.7, color: "#4A544D" }}>{t("Four things we do. If it fits in a van and it is in Stockholm, ask us.")}</p>
        </div>
        <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 24 }}>
          {CARDS.map((c) => <ServiceCard key={c.n} card={c} />)}
        </div>
      </div>
    </section>
  );
}
