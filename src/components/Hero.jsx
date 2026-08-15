import { useLanguage } from "../i18n/LanguageContext.jsx";
import { useHoverStyle } from "../hooks/useHoverStyle.js";

function BadgeLink() {
  const { t } = useLanguage();
  const [style, hoverHandlers] = useHoverStyle(
    { display: "flex", alignItems: "center", gap: 12, borderWidth: 1, borderStyle: "solid", borderColor: "#DCE3DD", padding: "7px 7px 7px 14px", fontSize: 13.5, color: "#4A544D" },
    { borderColor: "#0F5C3F", color: "#0F1512" }
  );
  return (
    <a href="#where" style={style} {...hoverHandlers}>
      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11.5, letterSpacing: "0.08em", color: "#0F5C3F" }}>{t("NEW")}</span>
      <span>{t("Saturdays are open again across Stockholm")}</span>
      <span style={{ borderLeft: "1px solid #DCE3DD", paddingLeft: 11, paddingRight: 5, color: "#0F5C3F" }}>→</span>
    </a>
  );
}

function PrimaryCta() {
  const { t } = useLanguage();
  const [style, hoverHandlers] = useHoverStyle(
    { background: "#0F5C3F", color: "#FFFFFF", fontSize: 15, fontWeight: 600, padding: "18px 30px" },
    { background: "#0F1512", color: "#FFFFFF" }
  );
  return <a href="#quote" style={style} {...hoverHandlers}>{t("Get a free quote")}</a>;
}

function CallCta() {
  const { t } = useLanguage();
  const [style, hoverHandlers] = useHoverStyle(
    { borderWidth: 1, borderStyle: "solid", borderColor: "#C9CFC8", color: "#0F1512", fontSize: 15, fontWeight: 600, padding: "17px 30px" },
    { borderColor: "#0F1512" }
  );
  return <a href="tel:+46704526069" style={style} {...hoverHandlers}>{t("Call 070 452 60 69")}</a>;
}

export default function Hero({ woke }) {
  const { t } = useLanguage();
  return (
    <section id="top">
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "92px 40px 0", display: "grid", gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 1fr)", gap: 72, alignItems: "center" }}>
        <div data-hero={woke ? "in" : ""} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 30 }}>
          <BadgeLink />
          <h1 style={{ margin: 0, fontWeight: 700, fontSize: "clamp(42px, 4.6vw, 68px)", lineHeight: 1.02, letterSpacing: "-0.04em" }}>
            {t("Packages, food runs and small moves")} <span style={{ color: "#0F5C3F" }}>{t("across Stockholm")}</span>
          </h1>
          <p style={{ margin: 0, maxWidth: "44ch", fontSize: 18.5, lineHeight: 1.6, color: "#4A544D" }}>
            {t("We are a small outfit based in Kista. You get a price before we load, the same driver at both ends, and a photo when it is done.")}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <PrimaryCta />
            <CallCta />
          </div>
          <div style={{ width: "100%", marginTop: 6, borderTop: "1px solid #ECEEEA", borderBottom: "1px solid #ECEEEA", display: "flex", flexWrap: "wrap", gap: "10px 28px", padding: "18px 0" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 14, whiteSpace: "nowrap", color: "#4A544D" }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" style={{ flex: "none" }}><path d="M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2V3ZM9 8h6M9 12h5" stroke="#0F5C3F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              {t("No booking fee")}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 14, whiteSpace: "nowrap", color: "#4A544D" }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" style={{ flex: "none" }}><path d="M12.5 3H21v8.5L11 21.5 2.5 13 12.5 3ZM17 7h.01" stroke="#0F5C3F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              {t("Fixed price")}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 14, whiteSpace: "nowrap", color: "#4A544D" }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" style={{ flex: "none" }}><path d="M12 3l8 3.5v5.5c0 4.6-3.4 7.8-8 9-4.6-1.2-8-4.4-8-9V6.5L12 3Z" stroke="#0F5C3F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              {t("Insured")}
            </span>
          </div>
        </div>
        <div data-hero-img={woke ? "in" : ""} style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ aspectRatio: "4 / 5" }}>
            <img className="photo" src="/images/veiko-hero.jpg" alt="Veiko courier unloading parcels from a van on a Stockholm side street, winter daylight" loading="eager" fetchPriority="high" decoding="async" />
          </div>
          <span style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "#6B756E" }}>
            <span style={{ width: 7, height: 7, background: "#1FA971", display: "inline-block", flex: "none" }} />
            {t("Out on the road six days a week")}
          </span>
        </div>
      </div>
    </section>
  );
}
