const STRIP = [
  { img: "veiko-strip-1", alt: "Loading the van at dawn, Södermalm", caption: "06:40 · Södermalm" },
  { img: "veiko-strip-2", alt: "Handover in a stairwell, mid-morning", caption: "11:15 · Vasastan" },
  { img: "veiko-strip-3", alt: "Last drop of the day, winter dusk", caption: "17:50 · Nacka" },
];

export default function PhotoStrip() {
  return (
    <section>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "96px 40px 0" }}>
        <div className="strip-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 24 }}>
          {STRIP.map((s) => (
            <div key={s.img} style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ aspectRatio: "3 / 4" }}>
                <img className="photo" src={`/images/${s.img}.jpg`} alt={s.alt} loading="lazy" decoding="async" />
              </div>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: "#7E887F" }}>{s.caption}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
