function LegalHeader() {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(255,255,255,0.94)", backdropFilter: "blur(8px)", borderBottom: "1px solid #ECEEEA" }}>
      <div style={{ boxSizing: "border-box", maxWidth: 860, margin: "0 auto", padding: "0 24px", height: 76, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <a data-logo="" href="/" style={{ display: "flex", alignItems: "center", gap: 9, flex: "none" }}>
          <svg width="25" height="25" viewBox="0 0 100 100" aria-hidden="true">
            <path data-mark="" fillRule="evenodd" fill="#0F1512" d="M8 10 H92 V70 L74 92 H26 L8 70 Z M27 22 L50 58 L73 22 L73 41 L50 77 L27 41 Z" />
          </svg>
          <span data-word="" style={{ fontWeight: 700, fontSize: 20, letterSpacing: "-0.03em", color: "#0F1512" }}>Veiko AB</span>
        </a>
        <a href="/" style={{ fontSize: 14.5, color: "#4A544D" }}>← Till startsidan</a>
      </div>
    </header>
  );
}

function LegalFooter() {
  return (
    <footer style={{ background: "#0F1512", color: "#B9C1BA", marginTop: 96 }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 24px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16, fontSize: 13.5 }}>
        <span>© {new Date().getFullYear()} Veiko AB · Org.nr 559539-9998</span>
        <div style={{ display: "flex", gap: 20 }}>
          <a href="/villkor" style={{ color: "#B9C1BA" }}>Allmänna villkor</a>
          <a href="/integritetspolicy" style={{ color: "#B9C1BA" }}>Integritetspolicy</a>
          <a href="/" style={{ color: "#B9C1BA" }}>Till startsidan</a>
        </div>
      </div>
    </footer>
  );
}

export default function LegalPage({ title, updated, children }) {
  return (
    <div style={{ background: "#FFFFFF", color: "#0F1512", minHeight: "100vh", fontFamily: "Switzer, system-ui, sans-serif" }}>
      <LegalHeader />
      <main style={{ maxWidth: 760, margin: "0 auto", padding: "64px 24px 0" }}>
        <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11.5, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0F5C3F", margin: "0 0 14px" }}>Veiko AB</p>
        <h1 style={{ margin: "0 0 10px", fontWeight: 700, fontSize: "clamp(30px, 4vw, 42px)", lineHeight: 1.08, letterSpacing: "-0.03em" }}>{title}</h1>
        {updated && <p style={{ margin: "0 0 48px", fontSize: 14, color: "#6B756E" }}>Senast uppdaterad: {updated}</p>}
        <div className="legal-body" style={{ fontSize: 16, lineHeight: 1.75, color: "#333935", paddingBottom: 40 }}>
          {children}
        </div>
      </main>
      <LegalFooter />
    </div>
  );
}
