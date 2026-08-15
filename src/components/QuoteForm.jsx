import { useMemo, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { useHoverStyle } from "../hooks/useHoverStyle.js";

// Set VITE_WEB3FORMS_ACCESS_KEY in .env (see .env.example) — until then,
// submissions fall back to opening the visitor's email app pre-filled to
// hej@veiko.se. Note: like all Vite VITE_-prefixed vars, this gets inlined
// into the built JS bundle — that's expected for Web3Forms, whose access
// keys are meant to be used client-side (their backend does the spam/rate
// checks), not a private server secret.
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "";

const AREAS = [
  "Södermalm", "Gamla stan", "Norrmalm", "Kungsholmen", "Östermalm", "Vasastan", "Årsta", "Liljeholmen",
  "Solna", "Sundbyberg", "Kista", "Nacka", "Tyresö", "Skärholmen", "Täby", "Huddinge", "Haninge",
  "Uppsala", "Södertälje", "Arlanda", "Bromma",
];

const SERVICE_OPTIONS = ["Package delivery", "Food delivery", "Small move", "Junk removal"];

function isValidPhone(v) {
  return /^[0-9+()\-.\s]{6,20}$/.test((v || "").trim());
}
function isValidArea(v) {
  const val = (v || "").trim().toLowerCase();
  if (!val) return false;
  return AREAS.some((a) => val.includes(a.toLowerCase()));
}
function todayISO() {
  const d = new Date();
  const pad = (n) => (n < 10 ? "0" + n : "" + n);
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}
function makeRef() {
  return "VK-2026-" + String(Math.floor(1000 + Math.random() * 9000));
}

const fieldStyle = { boxSizing: "border-box", width: "100%", minWidth: 0, borderWidth: 1, borderStyle: "solid", borderColor: "rgba(255,255,255,0.24)", background: "rgba(255,255,255,0.05)", outline: "none", color: "#FFFFFF", fontFamily: "Switzer, sans-serif", fontSize: 15.5, padding: "13px 14px", transition: "border-color 0.22s ease, background 0.22s ease" };
const invalidStyle = { borderColor: "#FF9B8A", background: "rgba(255,110,90,0.08)" };
const rowLabelStyle = { display: "grid", gridTemplateColumns: "minmax(0, clamp(84px, 13vw, 132px)) minmax(0, 1fr)", gap: "clamp(12px, 1.4vw, 18px)", alignItems: "start", padding: "14px 22px", cursor: "text", borderBottom: "1px solid rgba(255,255,255,0.16)" };
const rowSpanStyle = { fontFamily: "'IBM Plex Mono', monospace", fontSize: 11.5, letterSpacing: "0.1em", textTransform: "uppercase", color: "#B9C1BA", paddingTop: 13 };
const errorStyle = { fontSize: 12.5, lineHeight: 1.4, color: "#FF9B8A" };

function SubmitButton({ disabled }) {
  const { t } = useLanguage();
  const [style, hoverHandlers] = useHoverStyle(
    { border: 0, background: "#0F5C3F", color: "#FFFFFF", fontFamily: "Switzer, sans-serif", fontWeight: 600, fontSize: 15, padding: "18px 26px", cursor: disabled ? "default" : "pointer", transition: "background 0.25s ease", opacity: disabled ? 0.7 : 1 },
    { background: "#1FA971" }
  );
  return <button type="submit" disabled={disabled} style={style} {...hoverHandlers}>{t("Send it over")}</button>;
}

function ResetButton({ onClick }) {
  const { t } = useLanguage();
  const [style, hoverHandlers] = useHoverStyle(
    { marginTop: 10, borderWidth: 1, borderStyle: "solid", borderColor: "rgba(255,255,255,0.24)", background: "transparent", color: "#FFFFFF", fontFamily: "Switzer, sans-serif", fontWeight: 600, fontSize: 14, padding: "13px 22px", cursor: "pointer", transition: "border-color 0.22s ease" },
    { borderColor: "#1FA971" }
  );
  return <button type="button" onClick={onClick} style={style} {...hoverHandlers}>{t("Send another request")}</button>;
}

export default function QuoteForm() {
  const { t } = useLanguage();
  const [values, setValues] = useState({ service: SERVICE_OPTIONS[0], from: "", to: "", date: "", time: "", phone: "", load: "", details: "", botcheck: false });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success
  const [successMsg, setSuccessMsg] = useState("We've got your details and will contact you as soon as possible.");
  const [ref, setRef] = useState(makeRef);
  const inputRefs = useRef({});
  const min = useMemo(todayISO, []);

  function handleChange(e) {
    const { name, type, value, checked } = e.target;
    setValues((v) => ({ ...v, [name]: type === "checkbox" ? checked : value }));
  }

  function validateField(name, vals) {
    if (name === "from" || name === "to") {
      if (!isValidArea(vals[name])) return t("Enter a Stockholm area we cover — see the suggestions.");
    } else if (name === "phone") {
      if (!isValidPhone(vals.phone)) return t("Numbers only, please — no letters.");
    } else if (name === "date") {
      if (!vals.date) return t("Choose a date.");
    } else if (name === "time") {
      if (!vals.time) return t("Choose a time.");
    }
    return null;
  }

  function handleBlur(name) {
    const msg = validateField(name, values);
    setErrors((e) => ({ ...e, [name]: msg }));
  }

  function fallbackMailto(vals) {
    const subject = "Quote request — " + (vals.service || "");
    const lines = [
      "Service: " + (vals.service || ""),
      "From: " + (vals.from || ""),
      "To: " + (vals.to || ""),
      "Date: " + (vals.date || ""),
      "Time: " + (vals.time || ""),
      "Phone: " + (vals.phone || ""),
      "Load: " + (vals.load || ""),
      "Details: " + (vals.details || ""),
    ];
    const mailto = "mailto:hej@veiko.se?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(lines.join("\n"));
    window.location.href = mailto;
    setSuccessMsg(t("We've opened your email app — just hit send to finish, and we'll contact you as soon as possible."));
    setStatus("success");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const fields = ["from", "to", "date", "time", "phone"];
    const newErrors = {};
    fields.forEach((name) => { const msg = validateField(name, values); if (msg) newErrors[name] = msg; });
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      const firstInvalid = fields.find((f) => newErrors[f]);
      if (firstInvalid && inputRefs.current[firstInvalid]) inputRefs.current[firstInvalid].focus();
      return;
    }
    setErrors({});

    if (values.botcheck || !WEB3FORMS_ACCESS_KEY) {
      fallbackMailto(values);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, subject: "New quote request — Veiko AB", ...values }),
      });
      const json = await res.json();
      if (json && json.success) {
        setSuccessMsg(t("We've got your details and will contact you as soon as possible."));
        setStatus("success");
      } else {
        fallbackMailto(values);
      }
    } catch (err) {
      fallbackMailto(values);
    }
  }

  function handleReset() {
    setValues({ service: SERVICE_OPTIONS[0], from: "", to: "", date: "", time: "", phone: "", load: "", details: "", botcheck: false });
    setErrors({});
    setStatus("idle");
    setRef(makeRef());
  }

  function fieldProps(name) {
    return {
      name,
      value: values[name],
      onChange: handleChange,
      onBlur: () => handleBlur(name),
      ref: (el) => { inputRefs.current[name] = el; },
      style: errors[name] ? { ...fieldStyle, ...invalidStyle } : fieldStyle,
    };
  }

  return (
    <form id="quote-form" noValidate onSubmit={handleSubmit} style={{ minWidth: 0, border: "1px solid rgba(255,255,255,0.16)", display: "flex", flexDirection: "column" }}>
      <input type="checkbox" name="botcheck" checked={values.botcheck} onChange={handleChange} style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      {status !== "success" && (
        <div id="quote-form-fields">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 20, padding: "18px 22px", borderBottom: "1px solid rgba(255,255,255,0.16)" }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11.5, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1FA971" }}>{t("New job")}</span>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11.5, letterSpacing: "0.1em", color: "#8D968E" }}>{ref}</span>
          </div>

          <label style={rowLabelStyle}>
            <span style={{ ...rowSpanStyle }}>{t("Type of job")}</span>
            <select name="service" value={values.service} onChange={handleChange} style={{ ...fieldStyle, colorScheme: "dark", cursor: "pointer" }}>
              {SERVICE_OPTIONS.map((opt) => <option key={opt}>{t(opt)}</option>)}
            </select>
          </label>

          <label style={rowLabelStyle}>
            <span style={rowSpanStyle}>{t("Pick up at")}</span>
            <div style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <input type="text" required list="veiko-areas" autoComplete="off" placeholder="Hornsgatan, Södermalm" {...fieldProps("from")} />
              {errors.from && <span style={errorStyle}>{errors.from}</span>}
            </div>
          </label>

          <label style={rowLabelStyle}>
            <span style={rowSpanStyle}>{t("Deliver to")}</span>
            <div style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <input type="text" required list="veiko-areas" autoComplete="off" placeholder="Torshamnsgatan, Kista" {...fieldProps("to")} />
              {errors.to && <span style={errorStyle}>{errors.to}</span>}
            </div>
          </label>

          <datalist id="veiko-areas">
            {AREAS.map((a) => <option key={a} value={a} />)}
          </datalist>

          <label style={rowLabelStyle}>
            <span style={rowSpanStyle}>{t("Moving date")}</span>
            <div style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <input type="date" required min={min} {...fieldProps("date")} style={{ ...(errors.date ? { ...fieldStyle, ...invalidStyle } : fieldStyle), colorScheme: "dark" }} />
              {errors.date && <span style={errorStyle}>{errors.date}</span>}
            </div>
          </label>

          <label style={rowLabelStyle}>
            <span style={rowSpanStyle}>{t("Moving time")}</span>
            <div style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <input type="time" required {...fieldProps("time")} style={{ ...(errors.time ? { ...fieldStyle, ...invalidStyle } : fieldStyle), colorScheme: "dark" }} />
              {errors.time && <span style={errorStyle}>{errors.time}</span>}
            </div>
          </label>

          <label style={rowLabelStyle}>
            <span style={rowSpanStyle}>{t("Your phone")}</span>
            <div style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <input type="tel" required inputMode="tel" autoComplete="tel" placeholder="070 000 00 00" {...fieldProps("phone")} />
              {errors.phone && <span style={errorStyle}>{errors.phone}</span>}
            </div>
          </label>

          <label style={{ display: "flex", flexDirection: "column", gap: 10, padding: "14px 22px", cursor: "text", borderBottom: "1px solid rgba(255,255,255,0.16)" }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11.5, letterSpacing: "0.1em", textTransform: "uppercase", color: "#B9C1BA" }}>{t("The load")}</span>
            <textarea rows={2} placeholder="Two boxes and a desk, second floor, no lift" {...fieldProps("load")} style={{ ...fieldStyle, resize: "vertical" }} />
          </label>

          <label style={{ display: "flex", flexDirection: "column", gap: 10, padding: "14px 22px", cursor: "text" }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11.5, letterSpacing: "0.1em", textTransform: "uppercase", color: "#B9C1BA" }}>{t("Anything else?")}</span>
            <textarea rows={2} placeholder={t("Anything we should know before we start")} {...fieldProps("details")} style={{ ...fieldStyle, resize: "vertical" }} />
          </label>

          <div style={{ display: "flex", flexDirection: "column", gap: 14, padding: 22, borderTop: "1px solid rgba(255,255,255,0.16)" }}>
            <SubmitButton disabled={status === "submitting"} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11.5, letterSpacing: "0.06em", textTransform: "uppercase", color: "#8D968E" }}>{t("No booking fee · no card details")}</span>
          </div>
        </div>
      )}

      {status === "success" && (
        <div id="quote-success" style={{ display: "flex", padding: "56px 30px", textAlign: "center", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <span style={{ width: 46, height: 46, borderRadius: "50%", background: "rgba(31,169,113,0.14)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 12.5l5 5L20 7" stroke="#1FA971" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
          <span style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>{t("Sent.")}</span>
          <span style={{ fontSize: 15.5, lineHeight: 1.7, color: "#B9C1BA", maxWidth: "34ch" }}>{successMsg}</span>
          <ResetButton onClick={handleReset} />
        </div>
      )}
    </form>
  );
}
