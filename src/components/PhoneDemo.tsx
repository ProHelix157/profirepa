export function PhoneDemo({ maxWidth = 300 }: { maxWidth?: number }) {
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
        border: "2px solid var(--divider)",
      }}
      aria-label="The Pro Fire App scrolling through every sensor in the home, room by room"
    >
      <source src="/app-demo.mp4" type="video/mp4" />
    </video>
  );
}
