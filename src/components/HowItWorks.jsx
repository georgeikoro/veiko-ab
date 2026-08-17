import { useLanguage } from "../i18n/LanguageContext.jsx";
import SectionKicker from "./SectionKicker.jsx";

const STEPS = [
  { n: "Step 01", title: "Tell us what needs moving", desc: "Two addresses, roughly what it is, and when you need it.", first: true },
  { n: "Step 02", title: "Get a fixed price", desc: "One number, broken down, good for a week." },
  { n: "Step 03", title: "We collect and carry", desc: "You get the driver's name. Blankets and straps come with the van." },
  { n: "Step 04", title: "Proof in your inbox", desc: "A photo and the time it landed, sent to your phone." },
];

export default function HowItWorks() {
  const { t } = useLanguage();
  return (
    <section id="how">
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "128px 40px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", alignItems: "end", gap: "32px 56px", marginBottom: 56 }}>
          <SectionKicker index="[03]" eyebrow="How it works" heading="From a phone call to a photo in your inbox" />
          <p style={{ margin: 0, maxWidth: "44ch", fontSize: 16.5, lineHeight: 1.7, color: "#4A544D" }}>{t("Most jobs are priced in under an hour. Nothing moves until you have said yes to the number.")}</p>
        </div>
        <div className="how-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 40 }}>
          {STEPS.map((s) => (
            <div
              key={s.n}
              {...(!s.first ? { "data-rule": "" } : {})}
              style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: 14, borderTop: s.first ? "2px solid #0F5C3F" : "1px solid #DCE3DD", paddingTop: 22 }}
            >
              <span data-figure="" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12.5, color: s.first ? "#0F5C3F" : "#7E887F" }}>{s.n /* figures aren't translated, matching the original */}</span>
              <span style={{ fontSize: 17.5, fontWeight: 600, letterSpacing: "-0.01em" }}>{t(s.title)}</span>
              <span style={{ fontSize: 15, lineHeight: 1.7, color: "#4A544D" }}>{t(s.desc)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
