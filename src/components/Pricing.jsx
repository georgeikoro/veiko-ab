import { useLanguage } from "../i18n/LanguageContext.jsx";
import SectionKicker from "./SectionKicker.jsx";

const PLANS = [
  {
    title: "Package delivery", figure: "395 kr", figureDesc: "per drop inside the same-day zone",
    features: ["One parcel up to 25 kg", "Collection within two hours", "Photo proof on delivery"],
    footnote: "Extra stops on the same run from 120 kr.", featured: false,
  },
  {
    title: "Food delivery", figure: "690 kr", figureDesc: "per run, up to eight addresses",
    features: ["Insulated boxes and trays", "Timed arrival at each stop", "Loading at the kitchen door"],
    footnote: "Each address beyond eight, 90 kr.", featured: false,
  },
  {
    title: "Small move", figure: "1 490 kr", figureDesc: "van and two movers, up to three hours",
    features: ["Blankets, straps and tail-lift", "Loading and unloading", "Goods-in-transit cover"],
    footnote: "Extra hour 450 kr. Stairs from 200 kr per floor without a lift.", featured: true,
  },
  {
    title: "Junk removal", figure: "890 kr", figureDesc: "per half van load",
    features: ["Carry-out and loading", "Tip fees and sorting", "Disposal receipt with the invoice"],
    footnote: "Full van load 1 590 kr.", featured: false,
  },
];

const TERMS = [
  { title: "All prices include VAT", desc: "25% is already in the figures above. Business accounts are invoiced excluding VAT on request." },
  { title: "What changes the price", desc: "Distance outside tullarna, floors without a lift, waiting time, and how much there is to carry." },
  { title: "Your quote is the price", desc: "Every one of those is priced in the quote before we start, and the figure holds for seven days." },
];

function PricingCard({ plan }) {
  const { t } = useLanguage();
  const accent = plan.featured ? "#0F5C3F" : undefined;
  return (
    <div data-rule="" style={{ minWidth: 0, padding: "28px 0 0", borderTop: plan.featured ? "2px solid #0F5C3F" : "1px solid #DCE3DD", display: "flex", flexDirection: "column", gap: 14 }}>
      <span style={{ fontSize: 15, fontWeight: 600, color: accent }}>{t(plan.title)}</span>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: plan.featured ? "#0F5C3F" : "#7E887F" }}>{t("FROM")}</span>
        <span data-figure="" style={{ whiteSpace: "nowrap", fontFamily: "'IBM Plex Mono', monospace", fontSize: 32, fontWeight: 500, letterSpacing: "-0.03em", color: accent }}>{plan.figure}</span>
        <span style={{ fontSize: 13.5, lineHeight: 1.35, minHeight: "2.7em", color: "#6B756E" }}>{t(plan.figureDesc)}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid #ECEEEA", marginTop: 4 }}>
        {plan.features.map((f) => (
          <span key={f} style={{ display: "flex", alignItems: "center", height: 44, boxSizing: "border-box", borderBottom: "1px solid #ECEEEA", fontSize: 14, lineHeight: 1.35, color: "#4A544D" }}>{t(f)}</span>
        ))}
      </div>
      <span style={{ fontSize: 13.5, lineHeight: 1.6, minHeight: "3.2em", color: "#7E887F" }}>{t(plan.footnote)}</span>
    </div>
  );
}

export default function Pricing() {
  const { t } = useLanguage();
  return (
    <section id="pricing">
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "128px 40px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", alignItems: "end", gap: "32px 56px", marginBottom: 56 }}>
          <SectionKicker index="[08]" eyebrow="What it costs" heading="Starting prices, in the open" />
          <p style={{ margin: 0, maxWidth: "44ch", fontSize: 16.5, lineHeight: 1.7, color: "#4A544D" }}>{t("Every job gets its own quote. Here is where each one starts and what the figure covers.")}</p>
        </div>
        <div className="pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 40 }}>
          {PLANS.map((p) => <PricingCard key={p.title} plan={p} />)}
        </div>
        <div style={{ marginTop: 56, borderTop: "1px solid #ECEEEA", borderBottom: "1px solid #ECEEEA", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {TERMS.map((term, i) => (
            <div key={term.title} style={{ minWidth: 0, padding: i === 0 ? "30px 28px 30px 0" : i === TERMS.length - 1 ? "30px 0 30px 28px" : "30px 28px", borderLeft: i > 0 ? "1px solid #ECEEEA" : undefined, display: "flex", flexDirection: "column", gap: 8 }}>
              <span style={{ fontSize: 15, fontWeight: 600 }}>{t(term.title)}</span>
              <span style={{ fontSize: 14, lineHeight: 1.6, color: "#6B756E" }}>{t(term.desc)}</span>
            </div>
          ))}
        </div>
        <div style={{ paddingTop: 28 }}>
          <a href="#quote" style={{ fontSize: 15, fontWeight: 600 }}>{t("Get a fixed price for your job →")}</a>
        </div>
      </div>
    </section>
  );
}
