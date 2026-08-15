import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function IntroOverlay({ visible }) {
  const { t } = useLanguage();

  return (
    <div
      data-intro=""
      style={{
        position: "fixed", inset: 0, zIndex: 200, background: "#0F1512", overflow: "hidden",
        pointerEvents: "none", display: visible ? "block" : "none",
        animation: "veikoLift 0.6s cubic-bezier(0.76, 0, 0.24, 1) 2.28s forwards",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "#0F5C3F", transform: "scaleX(0)", transformOrigin: "left", animation: "veikoLoad 2.28s linear forwards" }} />
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "clamp(28px, 6vh, 62px) 0 clamp(26px, 5vh, 54px)", animation: "veikoContentOut 0.6s cubic-bezier(0.76, 0, 0.24, 1) 2.28s forwards" }}>

        <div style={{ boxSizing: "border-box", width: "100%", maxWidth: 1240, margin: "0 auto", padding: "0 40px", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 24, fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8D968E" }}>
          <span style={{ opacity: 0, animation: "veikoIn 0.3s ease-out 0.06s forwards" }}>Dispatch · VK-2026-0418</span>
          <span style={{ position: "relative", display: "inline-block", minWidth: "6ch", textAlign: "right", color: "#FFFFFF" }}>
            <span style={{ opacity: 0, animation: "veikoTick 0.66s linear 0.1s forwards" }}>06:40</span>
            <span style={{ position: "absolute", top: 0, right: 0, opacity: 0, animation: "veikoTick 0.66s linear 0.72s forwards" }}>11:15</span>
            <span style={{ position: "absolute", top: 0, right: 0, opacity: 0, animation: "veikoIn 0.26s ease-out 1.36s forwards" }}>17:50</span>
          </span>
        </div>

        <div style={{ boxSizing: "border-box", width: "100%", maxWidth: 1240, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "minmax(0, clamp(84px, 18vw, 190px)) minmax(0, 1fr)", gap: "clamp(14px, 3vw, 28px)", padding: "clamp(9px, 1.6vh, 15px) 0" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "rgba(255,255,255,0.16)", transform: "scaleX(0)", transformOrigin: "left", animation: "veikoRowRule 0.46s cubic-bezier(0.16, 1, 0.3, 1) 0.16s forwards" }} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8D968E", opacity: 0, animation: "veikoIn 0.26s ease-out 0.26s forwards" }}>{t("Service")}</span>
            <span style={{ fontSize: "clamp(14.5px, 1.5vw, 17px)", fontWeight: 500, color: "#FFFFFF", opacity: 0, animation: "veikoIn 0.26s ease-out 0.32s forwards" }}>{t("Same-day package delivery")}</span>
          </div>
          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "minmax(0, clamp(84px, 18vw, 190px)) minmax(0, 1fr)", gap: "clamp(14px, 3vw, 28px)", padding: "clamp(9px, 1.6vh, 15px) 0" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "rgba(255,255,255,0.16)", transform: "scaleX(0)", transformOrigin: "left", animation: "veikoRowRule 0.46s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards" }} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8D968E", opacity: 0, animation: "veikoIn 0.26s ease-out 0.40s forwards" }}>{t("From")}</span>
            <span style={{ fontSize: "clamp(14.5px, 1.5vw, 17px)", fontWeight: 500, color: "#FFFFFF", opacity: 0, animation: "veikoIn 0.26s ease-out 0.46s forwards" }}>Hornsgatan, Södermalm</span>
          </div>
          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "minmax(0, clamp(84px, 18vw, 190px)) minmax(0, 1fr)", gap: "clamp(14px, 3vw, 28px)", padding: "clamp(9px, 1.6vh, 15px) 0" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "rgba(255,255,255,0.16)", transform: "scaleX(0)", transformOrigin: "left", animation: "veikoRowRule 0.46s cubic-bezier(0.16, 1, 0.3, 1) 0.44s forwards" }} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8D968E", opacity: 0, animation: "veikoIn 0.26s ease-out 0.54s forwards" }}>{t("To")}</span>
            <span style={{ fontSize: "clamp(14.5px, 1.5vw, 17px)", fontWeight: 500, color: "#FFFFFF", opacity: 0, animation: "veikoIn 0.26s ease-out 0.60s forwards" }}>Torshamnsgatan, Kista</span>
          </div>
          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "minmax(0, clamp(84px, 18vw, 190px)) minmax(0, 1fr)", gap: "clamp(14px, 3vw, 28px)", padding: "clamp(9px, 1.6vh, 15px) 0" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "rgba(255,255,255,0.16)", transform: "scaleX(0)", transformOrigin: "left", animation: "veikoRowRule 0.46s cubic-bezier(0.16, 1, 0.3, 1) 0.58s forwards" }} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8D968E", opacity: 0, animation: "veikoIn 0.26s ease-out 0.68s forwards" }}>{t("Price")}</span>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "clamp(14.5px, 1.5vw, 17px)", fontWeight: 500, color: "#FFFFFF", opacity: 0, animation: "veikoIn 0.26s ease-out 0.74s forwards" }}>{t("395 kr · fixed")}</span>
          </div>
          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "minmax(0, clamp(84px, 18vw, 190px)) minmax(0, 1fr)", gap: "clamp(14px, 3vw, 28px)", padding: "clamp(9px, 1.6vh, 15px) 0" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "rgba(255,255,255,0.16)", transform: "scaleX(0)", transformOrigin: "left", animation: "veikoRowRule 0.46s cubic-bezier(0.16, 1, 0.3, 1) 0.72s forwards" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "rgba(255,255,255,0.16)", transform: "scaleX(0)", transformOrigin: "left", animation: "veikoRowRule 0.46s cubic-bezier(0.16, 1, 0.3, 1) 0.86s forwards" }} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8D968E", opacity: 0, animation: "veikoIn 0.26s ease-out 0.82s forwards" }}>{t("Status")}</span>
            <span style={{ position: "relative", display: "block", minHeight: 24 }}>
              <span style={{ position: "absolute", top: 0, left: 0, display: "flex", alignItems: "center", gap: 12, fontSize: "clamp(14.5px, 1.5vw, 17px)", fontWeight: 500, color: "#B9C1BA", opacity: 0, animation: "veikoIn 0.26s ease-out 0.88s forwards, veikoOut 0.22s ease-in 1.5s forwards" }}><span style={{ width: 9, height: 9, background: "#8D968E", display: "inline-block", flex: "none" }} />{t("In transit")}</span>
              <span style={{ position: "absolute", top: 0, left: 0, display: "flex", alignItems: "center", gap: 12, fontSize: "clamp(14.5px, 1.5vw, 17px)", fontWeight: 500, color: "#1FA971", opacity: 0, animation: "veikoIn 0.3s ease-out 1.64s forwards" }}><span style={{ width: 9, height: 9, background: "#1FA971", display: "inline-block", flex: "none" }} />{t("Delivered · photo, signature, timestamp")}</span>
            </span>
          </div>
        </div>

        <div style={{ boxSizing: "border-box", width: "100%", maxWidth: 1240, margin: "0 auto", padding: "0 40px", display: "flex", flexDirection: "column" }}>
          <div style={{ overflow: "hidden", paddingBottom: "clamp(8px, 1.4vh, 12px)" }}>
            <span style={{ display: "block", color: "#FFFFFF", fontWeight: 700, fontSize: "clamp(32px, 8.4vw, 118px)", lineHeight: 0.9, letterSpacing: "-0.05em", transform: "translateY(115%)", animation: "veikoRise 0.6s cubic-bezier(0.16, 1, 0.3, 1) 1.62s forwards" }}>Veiko AB</span>
          </div>
          <div style={{ height: 3, background: "#0F5C3F", transform: "scaleX(0)", transformOrigin: "left", animation: "veikoUnderline 0.42s cubic-bezier(0.16, 1, 0.3, 1) 1.92s forwards" }} />
          <span style={{ paddingTop: "clamp(14px, 2.4vh, 22px)", fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8D968E", opacity: 0, animation: "veikoIn 0.3s ease-out 2.02s forwards" }}>{t("Packages · Food · Moves · Disposal")}</span>
        </div>

      </div>
    </div>
  );
}
