import TechIcon from "./TechIcon.jsx";
import Reveal from "./Reveal.jsx";
import { recognitions } from "../data.js";

function accentColors(accent) {
  return accent === "terracotta"
    ? { bg: "var(--terracotta)", fg: "var(--terracotta-tint)" }
    : { bg: "var(--olive)", fg: "var(--olive-tint)" };
}

export default function Recognitions() {
  return (
    <section id="recognitions" style={{ padding: "90px 44px", maxWidth: 1440, margin: "0 auto" }}>
      <h6 className="section-kicker">Recognitions</h6>
      <h2 className="section-title">From my managers</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
        {recognitions.map((r, i) => {
          const c = accentColors(r.accent);
          return (
            <Reveal
              key={r.title}
              delay={i * 80}
              className="liftcard"
              style={{ display: "flex", flexDirection: "column", gap: 12, padding: 28, borderRadius: 28, background: "var(--panel)" }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: c.bg,
                  color: c.fg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TechIcon name={r.icon} size={20} />
              </div>
              <div className="display" style={{ fontSize: 20.5 }}>
                {r.title}
              </div>
              <p style={{ margin: 0, fontSize: 17, opacity: 0.85 }}>{r.description}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
