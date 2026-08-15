export default function WidePhoto() {
  return (
    <section>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "96px 40px 0" }}>
        <div style={{ aspectRatio: "16 / 6" }}>
          <img className="photo" src="/images/veiko-band.jpg" alt="Wide view of a van loading on a Stockholm street, early morning" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  );
}
