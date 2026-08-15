export default function ProgressBar() {
  return (
    <div
      data-progress=""
      style={{
        position: "fixed", top: 0, left: 0, right: 0, height: 2, background: "#0F5C3F",
        transform: "scaleX(0)", transformOrigin: "left", zIndex: 60, pointerEvents: "none",
      }}
    />
  );
}
