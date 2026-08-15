import { useLanguage } from "../i18n/LanguageContext.jsx";

/** The repeated "[0X] / eyebrow / H2" header block used across most sections. */
export default function SectionKicker({ index, eyebrow, heading, eyebrowColor = "#0F5C3F", gap = 16 }) {
  const { t } = useLanguage();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap }}>
      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12.5, color: "#7E887F" }}>{index}</span>
      <span style={{ fontSize: 13, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: eyebrowColor }}>{t(eyebrow)}</span>
      <h2 style={{ margin: 0, fontSize: "clamp(32px, 3.6vw, 46px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.03em" }}>{t(heading)}</h2>
    </div>
  );
}
