import { useLanguage } from "../i18n/LanguageContext.jsx";
import SectionKicker from "./SectionKicker.jsx";

const FACTS = [
  { label: "Started", value: "2024" },
  { label: "Based", value: "Kista" },
  { label: "Hours", value: "Mon–Sat" },
  { label: "Cover", value: "Greater Stockholm" },
];

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about">
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "128px 40px 0" }}>
        <div className="why-row" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 0.85fr)", gap: 72, alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
            <SectionKicker index="[05]" eyebrow="About us" heading="One accountable team. No call centre in between." />
            <p style={{ margin: 0, maxWidth: "50ch", fontSize: 16.5, lineHeight: 1.75, color: "#4A544D" }}>
              {t("Veiko AB was founded in Kista in 2024 to close a gap we kept running into: deliveries and small moves in Stockholm get quoted by one person, scheduled by another, and driven by someone who has never spoken to the customer. We built Veiko around one accountable team instead — a fixed price before we load, and the same crew from pickup to drop-off.")}
            </p>
            <p style={{ margin: 0, maxWidth: "50ch", fontSize: 16.5, lineHeight: 1.75, color: "#4A544D" }}>
              {t("We are not trying to be a national carrier. We know the streets inside tullarna, which courtyards have a lift, and where a 3.5-tonne van will not fit. That is the whole business.")}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", borderTop: "1px solid #ECEEEA" }}>
              {FACTS.map((f, i) => (
                <span key={f.label} style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: i % 2 === 0 ? "14px 20px 14px 0" : "14px 0 14px 20px", borderBottom: "1px solid #ECEEEA", borderLeft: i % 2 === 1 ? "1px solid #ECEEEA" : undefined, fontSize: 15 }}>
                  {t(f.label)}<span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13.5, color: "#6B756E" }}>{f.label === "Hours" || f.label === "Cover" ? t(f.value) : f.value}</span>
                </span>
              ))}
            </div>
          </div>
          <div style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ aspectRatio: "4 / 5" }}>
              <img className="photo" src="/images/veiko-about.jpg" alt="The Veiko team by the van in the Kista yard" loading="lazy" decoding="async" />
            </div>
            <div style={{ border: "1px solid #E8EBE7", padding: 28, display: "flex", flexDirection: "column", gap: 14 }}>
              <span style={{ fontSize: 15, fontWeight: 600 }}>{t("What we do not do")}</span>
              <span style={{ fontSize: 14.5, lineHeight: 1.7, color: "#4A544D" }}>{t("Pianos, safes and anything over 300 kg. Removals outside the county. Chilled or frozen transport. Ask anyway — we will tell you who to ring.")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
