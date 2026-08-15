import { useLanguage } from "../i18n/LanguageContext.jsx";

const STATS = [
  { figure: "2 hrs", color: "#0F5C3F", caption: "average pickup time inside the city" },
  { figure: "98%", caption: "arrived inside the window we promised" },
  { figure: "6 400", caption: "jobs since we started in 2024" },
  { figure: "4.9", caption: "average rating over 340 reviews" },
];

export default function StatsBand() {
  const { t } = useLanguage();
  return (
    <section className="band-stats" style={{ marginTop: 128, background: "#FBFCFA", borderTop: "1px solid #ECEEEA", borderBottom: "1px solid #ECEEEA" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "120px 40px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24, textAlign: "center", marginBottom: 72 }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12.5, color: "#7E887F" }}>[02]</span>
          <h2 style={{ margin: 0, maxWidth: "21ch", fontSize: "clamp(34px, 4.6vw, 62px)", fontWeight: 700, lineHeight: 1.06, letterSpacing: "-0.04em" }}>{t("You should not have to phone twice")}</h2>
          <p style={{ margin: 0, maxWidth: "52ch", fontSize: 18, lineHeight: 1.6, color: "#4A544D" }}>{t("Most of our work comes from people who got let down once and would rather not risk it again.")}</p>
        </div>
        <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 24 }}>
          {STATS.map((s) => (
            <div key={s.caption} data-still="" style={{ minWidth: 0, background: "#FFFFFF", border: "1px solid #ECEEEA", padding: 34, display: "flex", flexDirection: "column", gap: 12 }}>
              <span data-figure="" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 38, fontWeight: 500, letterSpacing: "-0.03em", color: s.color }}>{s.figure}</span>
              <span style={{ fontSize: 15, lineHeight: 1.6, color: "#4A544D" }}>{t(s.caption)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
