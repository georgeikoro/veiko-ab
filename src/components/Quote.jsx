import { useLanguage } from "../i18n/LanguageContext.jsx";
import { useHoverStyle } from "../hooks/useHoverStyle.js";
import QuoteForm from "./QuoteForm.jsx";

function PhoneLink() {
  const [style, hoverHandlers] = useHoverStyle(
    { fontFamily: "'IBM Plex Mono', monospace", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 500, letterSpacing: "-0.02em", color: "#FFFFFF" },
    { color: "#1FA971" }
  );
  return <a href="tel:+46704526069" style={style} {...hoverHandlers}>070 452 60 69</a>;
}

export default function Quote() {
  const { t } = useLanguage();
  return (
    <section id="quote" className="band-stats" style={{ marginTop: 128, background: "#0F1512", color: "#FFFFFF" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "104px 40px", display: "grid", gridTemplateColumns: "minmax(0, 0.95fr) minmax(0, 1.05fr)", gap: 72, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12.5, color: "#8D968E" }}>[11]</span>
            <span style={{ fontSize: 13, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#1FA971" }}>{t("Free quote")}</span>
            <h2 style={{ margin: 0, fontWeight: 700, fontSize: "clamp(38px, 4.4vw, 58px)", lineHeight: 1.02, letterSpacing: "-0.04em" }}>
              {t("Tell us what")}<br />{t("needs moving")}
            </h2>
          </div>
          <p style={{ margin: 0, maxWidth: "38ch", fontSize: 17, lineHeight: 1.7, color: "#B9C1BA" }}>
            {t("Two addresses and a rough idea of the load is enough. We come back with one number, and it is the number you pay.")}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 4, paddingTop: 6 }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11.5, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8D968E" }}>{t("Or just ring us")}</span>
            <PhoneLink />
          </div>
          <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid rgba(255,255,255,0.16)" }}>
            <span style={{ display: "flex", justifyContent: "space-between", gap: 20, padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.16)", fontSize: 15, color: "#B9C1BA" }}>
              {t("Email")}<a href="mailto:hej@veiko.se" style={{ color: "#FFFFFF" }}>hej@veiko.se</a>
            </span>
            <span style={{ display: "flex", justifyContent: "space-between", gap: 20, padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.16)", fontSize: 15, color: "#B9C1BA" }}>
              {t("Hours")}<span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13.5, color: "#FFFFFF" }}>{t("Mon–Sat · 07:00–20:00")}</span>
            </span>
            <span style={{ display: "flex", justifyContent: "space-between", gap: 20, padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.16)", fontSize: 15, color: "#B9C1BA" }}>
              {t("Reply time")}<span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13.5, color: "#1FA971" }}>{t("under 60 min")}</span>
            </span>
          </div>
        </div>

        <QuoteForm />
      </div>
    </section>
  );
}
