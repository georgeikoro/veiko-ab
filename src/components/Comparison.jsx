import { Fragment } from "react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import SectionKicker from "./SectionKicker.jsx";

const ROWS = [
  { label: "Price", veiko: "Fixed, itemised", other: "Hourly, plus surcharges" },
  { label: "Delivery window", veiko: "Two hours, held", other: "Whole day" },
  { label: "Proof of delivery", veiko: "Sent on every job", other: "On request, if kept" },
  { label: "Moves, food runs, disposal", veiko: "One team, one invoice", other: "Separate suppliers" },
  { label: "Who answers the phone", veiko: "Your dispatch team", other: "A support queue" },
];

export default function Comparison() {
  const { t } = useLanguage();
  return (
    <section>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "128px 40px 0" }}>
        <div style={{ maxWidth: 620, marginBottom: 48 }}>
          <SectionKicker index="[09]" eyebrow="The difference" heading="Veiko next to a national carrier" />
        </div>
        <div className="comparison-wrap">
          <div className="comparison-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.6fr) minmax(0, 1fr) minmax(0, 1fr)", borderTop: "1px solid #0F1512" }}>
            <span style={{ padding: "18px 20px 18px 0", fontSize: 13, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6B756E", borderBottom: "1px solid #ECEEEA" }}>{t("What you get")}</span>
            <span style={{ padding: "18px 20px", fontSize: 15, fontWeight: 600, color: "#0F5C3F", borderBottom: "1px solid #ECEEEA", background: "#FBFCFA" }}>Veiko AB</span>
            <span style={{ padding: "18px 20px", fontSize: 15, fontWeight: 600, color: "#6B756E", borderBottom: "1px solid #ECEEEA" }}>{t("National carrier")}</span>

            {ROWS.map((row) => (
              <Fragment key={row.label}>
                <span style={{ padding: "20px 20px 20px 0", fontSize: 15.5, borderBottom: "1px solid #ECEEEA" }}>{t(row.label)}</span>
                <span style={{ padding: 20, fontSize: 15, color: "#0F5C3F", borderBottom: "1px solid #ECEEEA", background: "#FBFCFA" }}>{t(row.veiko)}</span>
                <span style={{ padding: 20, fontSize: 15, color: "#6B756E", borderBottom: "1px solid #ECEEEA" }}>{t(row.other)}</span>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
