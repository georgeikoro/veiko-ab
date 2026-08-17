import { useLanguage } from "../i18n/LanguageContext.jsx";
import SectionKicker from "./SectionKicker.jsx";
import IconRow from "./IconRow.jsx";

export default function WhyVeiko() {
  const { t } = useLanguage();
  return (
    <section id="why">
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "128px 40px 0" }}>
        <div style={{ maxWidth: 620, marginBottom: 64 }}>
          <SectionKicker index="[04]" eyebrow="Why Veiko" heading="The two things that go wrong elsewhere" />
        </div>

        <div className="why-row" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: 72, alignItems: "center", paddingBottom: 96 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
            <h3 style={{ margin: 0, fontSize: 30, fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.02em" }}>{t("A window you can plan a day around")}</h3>
            <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid #ECEEEA" }}>
              <IconRow path="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v5.2l3.4 2" text="Two-hour windows, not all-day ones" />
              <IconRow path="M4 5h16v15H4V5ZM4 9.5h16M9 3v4M15 3v4" text="Evenings and Saturdays cost the same" />
              <IconRow path="M7 3h3.6l1.6 4-2.5 1.6a12 12 0 0 0 5.7 5.7L17 11.8 21 13.4V17a2 2 0 0 1-2.2 2A16 16 0 0 1 5 5.2 2 2 0 0 1 7 3Z" text="A person answers, not a queue, 07:00 to 20:00" />
            </div>
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ aspectRatio: "4 / 5" }}>
              <img className="photo" src="/images/veiko-why.jpg" alt="Driver in Veiko workwear beside the van, winter daylight" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>

        <div className="why-row" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: 72, alignItems: "center" }}>
          <div style={{ minWidth: 0 }}>
            <div style={{ aspectRatio: "4 / 5" }}>
              <img className="photo" src="/images/veiko-why-2.jpg" alt="Close-up of a signed delivery note and a phone showing proof-of-delivery photo" loading="lazy" decoding="async" />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
            <h3 style={{ margin: 0, fontSize: 30, fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.02em" }}>{t("One price, and paperwork that matches it")}</h3>
            <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid #ECEEEA" }}>
              <IconRow path="M5 3h9l5 5v13H5V3ZM14 3v5h5M8.5 13h7M8.5 17h4" text="Stairs and waiting time are in the quote" />
              <IconRow path="M3 7h4l2-2h6l2 2h4v13H3V7ZM12 16.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" text="Photo, signature and timestamp on every drop" />
              <IconRow path="M5 3h9l5 5v13H5V3ZM14 3v5h5M8.5 13.5l2.5 2.5 4.5-5" text="Insured, F-skatt registered, waste carried under permit" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
