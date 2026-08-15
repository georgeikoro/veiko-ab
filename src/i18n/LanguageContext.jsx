import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { DICT } from "./dict.js";

const LanguageContext = createContext(null);

function readSavedLang() {
  try {
    const saved = localStorage.getItem("veiko-lang");
    if (["sv", "en", "ar"].includes(saved)) return saved;
  } catch (e) {}
  return "sv";
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readSavedLang);

  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("lang", lang);
    root.setAttribute("dir", dir);
  }, [lang, dir]);

  function setLang(next) {
    if (!["sv", "en", "ar"].includes(next)) return;
    setLangState(next);
    try { localStorage.setItem("veiko-lang", next); } catch (e) {}
  }

  const t = useMemo(() => {
    const dict = DICT[lang] || null;
    return (key) => (dict && dict[key]) || key;
  }, [lang]);

  const value = { lang, dir, setLang, t };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
