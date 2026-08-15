import { useLanguage } from "../i18n/LanguageContext.jsx";
import { useHoverStyle } from "../hooks/useHoverStyle.js";
import SectionKicker from "./SectionKicker.jsx";
import IconRow from "./IconRow.jsx";

const CARDS = [
  {
    img: "veiko-aud-1", alt: "Student move: boxes on a stairwell landing",
    eyebrow: "For individuals", title: "Moving flat, or clearing one out", cta: "Price my move →",
    rows: [
      { path: "M12.5 3H21v8.5L11 21.5 2.5 13 12.5 3ZM17 7h.01", text: "Priced by the job, not the hour" },
      { path: "M3 7l9-4 9 4v10l-9 4-9-4V7ZM3 7l9 4 9-4M12 11v10", text: "Old furniture taken on the same visit" },
      { path: "M4 5h16v15H4V5ZM4 9.5h16M9 3v4M15 3v4", text: "Saturdays at the weekday price" },
    ],
  },
  {
    img: "veiko-aud-2", alt: "Restaurant kitchen handing over a bulk catering order",
    eyebrow: "For businesses", title: "A van team without running your own", cta: "Talk about a contract →",
    rows: [
      { path: "M4.5 9a7.5 7.5 0 0 1 12.4-3.4M19.5 15a7.5 7.5 0 0 1-12.4 3.4M4.5 4.5V9h4.5M19.5 19.5V15H15", text: "Standing routes and daily collections" },
      { path: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM9 9.5h6M9 14.5h6M12 6.5v11", text: "One invoice a month, your references on it" },
      { path: "M5 3h9l5 5v13H5V3ZM14 3v5h5M8.5 13.5l2.5 2.5 4.5-5", text: "Delivery proof exported for your own records" },
    ],
  },
];

function AudienceCard({ card }) {
  const { t } = useLanguage();
  const [style, hoverHandlers] = useHoverStyle(
    { minWidth: 0, borderWidth: 1, borderStyle: "solid", borderColor: "#E8EBE7", padding: 34, display: "flex", flexDirection: "column", gap: 22, transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)" },
    { transform: "translateY(-5px)", borderColor: "#C9CFC8" }
  );
  return (
    <div style={style} {...hoverHandlers}>
      <div style={{ aspectRatio: "16 / 10" }}>
        <img className="photo" src={`/images/${card.img}.jpg`} alt={card.alt} loading="lazy" decoding="async" />
      </div>
      <span style={{ fontSize: 13, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#0F5C3F" }}>{t(card.eyebrow)}</span>
      <h3 style={{ margin: 0, fontSize: 26, fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.02em" }}>{t(card.title)}</h3>
      <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid #ECEEEA" }}>
        {card.rows.map((r) => <IconRow key={r.text} path={r.path} text={r.text} align="top" fontSize={15} lineHeight={1.6} color="#4A544D" padding={15} />)}
      </div>
      <a href="#quote" style={{ fontSize: 15, fontWeight: 600, marginTop: "auto" }}>{t(card.cta)}</a>
    </div>
  );
}

export default function Audiences() {
  return (
    <section>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "128px 40px 0" }}>
        <div style={{ maxWidth: 620, marginBottom: 56 }}>
          <SectionKicker index="[06]" eyebrow="Who we work with" heading="Veiko for both sides of the city" />
        </div>
        <div className="audiences-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: 24 }}>
          {CARDS.map((c) => <AudienceCard key={c.title} card={c} />)}
        </div>
      </div>
    </section>
  );
}
