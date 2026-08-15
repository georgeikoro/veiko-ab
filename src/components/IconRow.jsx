import { useLanguage } from "../i18n/LanguageContext.jsx";

/** Icon + translated text row, used across Why/Audiences/Coverage feature lists. */
export default function IconRow({ path, text, align = "center", size = 17, fontSize = 15.5, color, lineHeight, padding = 16 }) {
  const { t } = useLanguage();
  return (
    <span style={{ display: "flex", alignItems: align === "center" ? "center" : undefined, gap: 13, padding: `${padding}px 0`, borderBottom: "1px solid #ECEEEA", fontSize, lineHeight, color }}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flex: "none", marginTop: align === "top" ? 4 : undefined }}>
        <path d={path} stroke="#0F5C3F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {t(text)}
    </span>
  );
}
