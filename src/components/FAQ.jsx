import { useLanguage } from "../i18n/LanguageContext.jsx";
import { useHoverStyle } from "../hooks/useHoverStyle.js";

const ITEMS = [
  { q: "How quickly can you collect?", a: "Inside the same-day zone, usually about two hours after you say go. Book before 11:00 and it lands the same working day.", open: true },
  { q: "Is the price really fixed?", a: "Yes. Stairs, waiting time and tip fees are in the number you approve. If the job turns out bigger than described, we ring you before carrying on." },
  { q: "What if something is damaged?", a: "Everything we carry is insured. Tell us within seven days, send the proof photos, and we deal with the claim." },
  { q: "Do you take away what you remove?", a: "We are permitted to carry waste and we sort it at a licensed station. The disposal receipt comes with your invoice." },
  { q: "Can we set up a monthly account?", a: "Yes, if you book regularly. One invoice a month, your own references on it, thirty days to pay.", last: true },
];

function FaqItem({ item }) {
  const { t } = useLanguage();
  const [style, hoverHandlers] = useHoverStyle(
    { listStyle: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 24, padding: "26px 0", fontSize: 17.5, fontWeight: 600, letterSpacing: "-0.01em", transition: "color 0.22s ease" },
    { color: "#0F5C3F" }
  );
  return (
    <details style={{ borderTop: "1px solid #E8EBE7", borderBottom: item.last ? "1px solid #E8EBE7" : undefined }} open={item.open || undefined}>
      <summary style={style} {...hoverHandlers}>
        {t(item.q)}
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 17, fontWeight: 400, color: "#0F5C3F", flex: "none" }}>+</span>
      </summary>
      <span style={{ display: "block", fontSize: 15.5, lineHeight: 1.75, color: "#4A544D", padding: "0 0 26px", maxWidth: "58ch" }}>{t(item.a)}</span>
    </details>
  );
}

export default function FAQ() {
  const { t } = useLanguage();
  return (
    <section id="faq">
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "128px 40px 0", display: "grid", gridTemplateColumns: "minmax(0, 0.8fr) minmax(0, 1.2fr)", gap: 72 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12.5, color: "#7E887F" }}>[11]</span>
          <span style={{ fontSize: 13, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#0F5C3F" }}>{t("Questions")}</span>
          <h2 style={{ margin: 0, fontSize: "clamp(32px, 3.6vw, 46px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.03em" }}>{t("Before you book")}</h2>
          <span style={{ fontSize: 16, lineHeight: 1.7, color: "#4A544D", maxWidth: "30ch", paddingTop: 4 }}>{t("Anything else, ring us. One of us picks up between 07:00 and 20:00.")}</span>
        </div>
        <div style={{ minWidth: 0, display: "flex", flexDirection: "column" }}>
          {ITEMS.map((item) => <FaqItem key={item.q} item={item} />)}
        </div>
      </div>
    </section>
  );
}
