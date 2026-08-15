import { useLanguage } from "../i18n/LanguageContext.jsx";
import SectionKicker from "./SectionKicker.jsx";

const QUOTES = [
  { img: "veiko-t1", alt: "Portrait of a shop owner in Södermalm", quote: '"Rang at nine, collected by two, and the photo came through before I got home. That is all I wanted."', place: "Retail, Södermalm" },
  { img: "veiko-t2", alt: "Portrait of a restaurant manager in Vasastan", quote: '"We send two catering runs a day. In eight months they have been late once, and they rang me first."', place: "Restaurant group, Vasastan" },
  { img: "veiko-t3", alt: "Portrait of a customer in Årsta", quote: '"Moved my studio and took the old sofa in the same trip. Cheaper than the two quotes I already had."', place: "Private move, Årsta" },
];

export default function Testimonials() {
  const { t } = useLanguage();
  return (
    <section>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "128px 40px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", alignItems: "end", gap: "32px 56px", marginBottom: 56 }}>
          <SectionKicker index="[10]" eyebrow="What people say" heading="Booked once, then booked again" />
          <p style={{ margin: 0, maxWidth: "44ch", fontSize: 16.5, lineHeight: 1.7, color: "#4A544D" }}>{t("Real jobs, placeholder names and photos until you swap them in.")}</p>
        </div>
        <div className="testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 24 }}>
          {QUOTES.map((q) => (
            <div key={q.img} data-still="" style={{ minWidth: 0, border: "1px solid #E8EBE7", padding: 34, display: "flex", flexDirection: "column", gap: 26 }}>
              <span style={{ fontSize: 16.5, lineHeight: 1.7, color: "#2C352E" }}>{t(q.quote)}</span>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: "auto" }}>
                <div style={{ width: 68, height: 68, flex: "none" }}>
                  <img className="avatar" src={`/images/${q.img}.jpg`} alt={q.alt} loading="lazy" decoding="async" />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <span style={{ fontSize: 14.5, fontWeight: 600 }}>{t("Placeholder name")}</span>
                  <span style={{ fontSize: 13.5, color: "#6B756E" }}>{t(q.place)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
