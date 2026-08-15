import { useLanguage } from "../i18n/LanguageContext.jsx";
import { useHoverStyle } from "../hooks/useHoverStyle.js";

const SERVICE_LINKS = ["Package delivery", "Food delivery", "Small moves", "Junk removal"];

function BackToTop() {
  const { t } = useLanguage();
  const [style, hoverHandlers] = useHoverStyle({ color: "#8D968E" }, { color: "#FFFFFF" });
  return <a href="#top" style={style} {...hoverHandlers}>{t("Back to top ↑")}</a>;
}

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer style={{ background: "#0F1512", color: "#FFFFFF", borderTop: "1px solid rgba(255,255,255,0.10)", overflow: "hidden" }}>
      <div className="footer-grid" style={{ maxWidth: 1240, margin: "0 auto", padding: "76px 40px 0", display: "grid", gridTemplateColumns: "minmax(0, 1.35fr) minmax(0, 1fr) minmax(0, 1fr)", gap: 56 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div data-logo="" style={{ display: "flex", alignItems: "center", gap: 9 }}>
            <svg width="25" height="25" viewBox="0 0 100 100">
              <path data-mark="" fillRule="evenodd" fill="#FFFFFF" d="M8 10 H92 V70 L74 92 H26 L8 70 Z M27 22 L50 58 L73 22 L73 41 L50 77 L27 41 Z" />
            </svg>
            <span data-word="" style={{ fontWeight: 700, fontSize: 21, letterSpacing: "-0.03em" }}>Veiko AB</span>
          </div>
          <span style={{ fontSize: 15, lineHeight: 1.75, color: "#B9C1BA", maxWidth: "30ch" }}>{t("Deliveries, food runs, small moves and clear-outs. Kista yard, whole city covered.")}</span>
          <span style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: "#1FA971" }}>
            <span style={{ width: 7, height: 7, background: "#1FA971", display: "inline-block", flex: "none" }} />
            {t("Taking bookings for tomorrow")}
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, fontSize: 15 }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11.5, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8D968E", marginBottom: 2 }}>{t("Service")}</span>
          {SERVICE_LINKS.map((label) => (
            <a key={label} href="#services" style={{ color: "#FFFFFF" }}>{t(label)}</a>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid rgba(255,255,255,0.16)" }}>
          <span style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "13px 0", borderBottom: "1px solid rgba(255,255,255,0.16)", fontSize: 14.5, color: "#B9C1BA" }}>
            {t("Phone")}<a href="tel:+46704526069" style={{ color: "#FFFFFF" }}>070 452 60 69</a>
          </span>
          <span style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "13px 0", borderBottom: "1px solid rgba(255,255,255,0.16)", fontSize: 14.5, color: "#B9C1BA" }}>
            {t("Email")}<a href="mailto:hej@veiko.se" style={{ color: "#FFFFFF" }}>hej@veiko.se</a>
          </span>
          <span style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "13px 0", borderBottom: "1px solid rgba(255,255,255,0.16)", fontSize: 14.5, color: "#B9C1BA" }}>
            {t("Yard")}<span style={{ color: "#FFFFFF" }}>Kista, Stockholm</span>
          </span>
          <span style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "13px 0", borderBottom: "1px solid rgba(255,255,255,0.16)", fontSize: 14.5, color: "#B9C1BA" }}>
            {t("Hours")}<span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, color: "#FFFFFF" }}>{t("Mon–Sat 07–20")}</span>
          </span>
        </div>
      </div>

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "44px 40px 0" }}>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.16)", paddingTop: 22, display: "flex", justifyContent: "space-between", gap: 24, flexWrap: "wrap", fontFamily: "'IBM Plex Mono', monospace", fontSize: 11.5, letterSpacing: "0.06em", textTransform: "uppercase", color: "#8D968E" }}>
          <span>{t("© 2026 Veiko AB · Org.nr 000000-0000 · F-skatt · placeholder details, swap before launch")}</span>
          <BackToTop />
        </div>
      </div>

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "30px 40px 22px", overflow: "hidden" }}>
        <span style={{ display: "block", fontWeight: 700, fontSize: "clamp(52px, 14vw, 220px)", lineHeight: 0.92, letterSpacing: "-0.055em", color: "rgba(255,255,255,0.06)", whiteSpace: "nowrap", userSelect: "none" }}>Veiko AB</span>
      </div>
    </footer>
  );
}
