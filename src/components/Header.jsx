import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { useHoverStyle } from "../hooks/useHoverStyle.js";
import LanguageSwitcher from "./LanguageSwitcher.jsx";

function CtaLink() {
  const [style, hoverHandlers] = useHoverStyle(
    { whiteSpace: "nowrap", background: "#0F5C3F", color: "#FFFFFF", fontSize: 14.5, fontWeight: 600, padding: "13px 22px" },
    { background: "#0F1512", color: "#FFFFFF" }
  );
  const { t } = useLanguage();
  return (
    <a href="#quote" className="cta-wrap" style={style} {...hoverHandlers}>
      {t("Get a free quote")}
    </a>
  );
}

export default function Header() {
  const { t } = useLanguage();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(255,255,255,0.94)", backdropFilter: "blur(8px)", borderBottom: "1px solid #ECEEEA" }}>
      <div className="nav-row" style={{ boxSizing: "border-box", maxWidth: 1240, margin: "0 auto", padding: "0 40px", height: 76, display: "flex", alignItems: "center", gap: "clamp(16px, 3vw, 36px)", flexWrap: "wrap" }}>
        <a data-logo="" href="#top" style={{ display: "flex", alignItems: "center", gap: 9, flex: "none" }}>
          <svg width="25" height="25" viewBox="0 0 100 100" aria-hidden="true">
            <path data-mark="" fillRule="evenodd" fill="#0F1512" d="M8 10 H92 V70 L74 92 H26 L8 70 Z M27 22 L50 58 L73 22 L73 41 L50 77 L27 41 Z" />
          </svg>
          <span data-word="" style={{ fontWeight: 700, fontSize: 20, letterSpacing: "-0.03em", color: "#0F1512" }}>Veiko AB</span>
        </a>

        <nav id="nav-links" className={navOpen ? "open" : ""} style={{ fontSize: 14.5, color: "#4A544D" }}>
          <a href="#top" style={{ color: "#4A544D" }} onClick={() => setNavOpen(false)}>{t("Home")}</a>
          <a href="#services" style={{ color: "#4A544D" }} onClick={() => setNavOpen(false)}>{t("Service")}</a>
          <a href="#about" style={{ color: "#4A544D" }} onClick={() => setNavOpen(false)}>{t("About")}</a>
          <a href="#pricing" style={{ color: "#4A544D" }} onClick={() => setNavOpen(false)}>{t("Pricing")}</a>
        </nav>

        <button
          id="nav-toggle"
          aria-expanded={navOpen}
          aria-controls="nav-links"
          aria-label="Toggle menu"
          onClick={() => setNavOpen((o) => !o)}
        >
          <span />
        </button>

        <div style={{ flex: "none", display: "flex", alignItems: "center", gap: "clamp(12px, 1.6vw, 20px)", marginLeft: "auto" }}>
          <LanguageSwitcher />
          <CtaLink />
        </div>
      </div>
    </header>
  );
}
