import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext.jsx";

const OPTIONS = [
  { code: "sv", label: "Svenska" },
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (boxRef.current && !boxRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <div data-lang="" ref={boxRef} style={{ position: "relative", flex: "none" }}>
      <button
        data-lang-toggle=""
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={(e) => { e.stopPropagation(); setOpen((o) => !o); }}
        style={{ display: "flex", alignItems: "center", gap: 9, border: "1px solid #DCE3DD", background: "transparent", fontFamily: "'IBM Plex Mono', monospace", fontSize: 11.5, letterSpacing: "0.1em", color: "#0F1512", padding: "10px 12px", cursor: "pointer", transition: "border-color 0.25s ease" }}
      >
        <span data-lang-current="">{lang.toUpperCase()}</span>
        <svg data-chev="" width="9" height="6" viewBox="0 0 9 6" fill="none" style={{ transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}>
          <path d="M1 1.2 4.5 4.7 8 1.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
        </svg>
      </button>
      <div data-lang-menu="" data-open={open ? "" : undefined} role="menu" style={{ position: "absolute", top: "calc(100% + 9px)", right: 0, minWidth: 186, background: "#FFFFFF", border: "1px solid #DCE3DD", flexDirection: "column", zIndex: 70 }}>
        {OPTIONS.map((opt) => (
          <button
            key={opt.code}
            data-lang-opt={opt.code}
            type="button"
            role="menuitemradio"
            aria-checked={lang === opt.code}
            onClick={(e) => { e.stopPropagation(); setOpen(false); if (opt.code !== lang) setLang(opt.code); }}
            style={{ display: "flex", alignItems: "center", gap: 12, border: 0, background: "transparent", width: "100%", textAlign: "left", fontFamily: "Switzer, sans-serif", fontSize: 14.5, color: "#0F1512", padding: "13px 16px", cursor: "pointer", transition: "background 0.2s ease" }}
          >
            <span data-dot="" style={{ width: 7, height: 7, flex: "none", background: "transparent" }} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11.5, letterSpacing: "0.1em", color: "#7E887F", width: "2.4ch" }}>{opt.code.toUpperCase()}</span>
            <span>{opt.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
