import { useEffect, useState } from "react";

export default function Loader({ onDone }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setExiting(true), 900);
    const doneTimer = setTimeout(() => onDone(), 1300);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 18,
        background: "var(--bg)",
        opacity: exiting ? 0 : 1,
        transition: "opacity 0.4s ease",
        pointerEvents: exiting ? "none" : "auto",
      }}
    >
      <div
        className="display"
        style={{
          fontSize: 39,
          color: "var(--terracotta)",
          animation: "loaderPulse 1.1s ease-in-out infinite",
        }}
      >
        SK
      </div>
      <div style={{ width: 140, height: 3, borderRadius: 999, background: "var(--panel)", overflow: "hidden" }}>
        <div
          style={{
            height: "100%",
            width: "40%",
            borderRadius: 999,
            background: "var(--terracotta)",
            animation: "loaderBar 0.9s ease-in-out infinite",
          }}
        />
      </div>
      <style>{`
        @keyframes loaderPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.96); }
        }
        @keyframes loaderBar {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(340%); }
        }
      `}</style>
    </div>
  );
}
