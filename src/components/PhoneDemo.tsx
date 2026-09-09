export function PhoneDemo({ maxWidth = 260 }: { maxWidth?: number }) {
  // The video contains the real phone; its background is keyed to the page color,
  // so no frame or clipping is needed — just a shadow to lift it off the page.
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      poster="/app-demo-poster.jpg"
      style={{
        width: "100%",
        maxWidth,
        height: "auto",
        display: "block",
        margin: "0 auto",
        filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.6))",
      }}
      aria-label="The Pro Fire App scrolling through every sensor in the home, room by room"
    >
      <source src="/app-demo.mp4" type="video/mp4" />
    </video>
  );
}
