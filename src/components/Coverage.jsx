import { useLanguage } from "../i18n/LanguageContext.jsx";
import { useHoverStyle } from "../hooks/useHoverStyle.js";
import SectionKicker from "./SectionKicker.jsx";

function CheckPostcodeLink() {
  const { t } = useLanguage();
  return <a href="#quote" style={{ fontSize: 15, fontWeight: 600, paddingTop: 24 }}>{t("Check your postcode →")}</a>;
}

export default function Coverage() {
  const { t } = useLanguage();
  return (
    <section id="where">
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "128px 40px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", alignItems: "end", gap: "32px 56px", marginBottom: 56 }}>
          <SectionKicker index="[07]" eyebrow="Where we work" heading="Greater Stockholm, door to door" />
          <p style={{ margin: 0, maxWidth: "44ch", fontSize: 16.5, lineHeight: 1.7, color: "#4A544D" }}>{t("Same-day inside tullarna, next-day across the county.")}</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.3fr) minmax(0, 1fr)", gap: 64, alignItems: "center" }}>
          <div style={{ minWidth: 0 }}>
            <div style={{ aspectRatio: "3 / 2" }}>
              <img className="photo" src="/images/veiko-coverage.jpg" alt="Elevated view over Stockholm rooftops toward the water" loading="lazy" decoding="async" />
            </div>
          </div>
          <div style={{ minWidth: 0, display: "flex", flexDirection: "column", borderTop: "1px solid #ECEEEA" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "24px 0", borderBottom: "1px solid #ECEEEA" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 16.5, fontWeight: 600 }}>
                <span style={{ width: 11, height: 11, background: "#0F5C3F", display: "inline-block", flex: "none" }} />
                {t("Same-day zone")}
              </span>
              <span style={{ fontSize: 15, lineHeight: 1.7, color: "#4A544D" }}>Södermalm, Gamla stan, Norrmalm, Kungsholmen, Östermalm, Vasastan, Årsta, Liljeholmen.</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "24px 0", borderBottom: "1px solid #ECEEEA" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 16.5, fontWeight: 600 }}>
                <span style={{ width: 11, height: 11, border: "2px solid #0F1512", display: "inline-block", flex: "none" }} />
                {t("Next-day county")}
              </span>
              <span style={{ fontSize: 15, lineHeight: 1.7, color: "#4A544D" }}>Solna, Sundbyberg, Kista, Nacka, Tyresö, Skärholmen, Täby, Huddinge, Haninge.</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "24px 0", borderBottom: "1px solid #ECEEEA" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 16.5, fontWeight: 600 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ flex: "none" }}><path d="M2 12h20M14 4l8 8-8 8" stroke="#0F1512" strokeWidth="3" /></svg>
                {t("On request")}
              </span>
              <span style={{ fontSize: 15, lineHeight: 1.7, color: "#4A544D" }}>{t("Uppsala, Södertälje, Arlanda and Bromma.")}</span>
            </div>
            <CheckPostcodeLink />
          </div>
        </div>
      </div>
    </section>
  );
}
