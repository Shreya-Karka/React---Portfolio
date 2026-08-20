import { useEffect, useState } from "react";

// Lightweight auto-advancing carousel with fade transitions and dot nav.
// No external library — plain interval + CSS opacity crossfade.
export default function Carousel({ photos, height = 340, interval = 3500 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % photos.length);
    }, interval);
    return () => clearInterval(timer);
  }, [photos.length, interval]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height,
          borderRadius: 24,
          overflow: "hidden",
          boxShadow: "var(--shadow-md)",
        }}
      >
        {photos.map((p, i) => (
          <img
            key={p.src}
            src={p.src}
            alt="Shreya Karka with colleagues"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: p.pos || "50% 25%",
              opacity: i === index ? 1 : 0,
              transition: "opacity 0.9s ease",
            }}
          />
        ))}
      </div>
      <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
        {photos.map((p, i) => (
          <button
            key={p.src}
            onClick={() => setIndex(i)}
            aria-label={`Show photo ${i + 1}`}
            style={{
              width: i === index ? 22 : 8,
              height: 8,
              borderRadius: 999,
              border: "none",
              padding: 0,
              cursor: "pointer",
              background: i === index ? "var(--terracotta)" : "rgba(32,30,29,0.2)",
              transition: "width 0.3s ease, background 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
