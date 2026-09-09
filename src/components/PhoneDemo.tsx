export function PhoneDemo({ maxWidth = 240 }: { maxWidth?: number }) {
  return (
    <div
      style={{
        maxWidth,
        width: "100%",
        margin: "0 auto",
        background: "#050505",
        border: "1px solid #34312e",
        borderRadius: "12% / 5.6%",
        padding: "4.5%",
        boxShadow: "0 24px 60px rgba(0,0,0,0.55)",
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/app-demo-poster.jpg"
        style={{ width: "100%", height: "auto", borderRadius: "8% / 3.8%", display: "block" }}
        aria-label="The Pro Fire App scrolling through every sensor in the home, room by room"
      >
        <source src="/app-demo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
