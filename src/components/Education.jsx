import TechIcon from "./TechIcon.jsx";
import Reveal from "./Reveal.jsx";
import { education } from "../data.js";

function accentColors(accent) {
  return accent === "terracotta"
    ? { bg: "var(--terracotta)", fg: "var(--terracotta-tint)", tagBg: "var(--terracotta-tint)", tagFg: "var(--terracotta-dark)" }
    : { bg: "var(--olive)", fg: "var(--olive-tint)", tagBg: "var(--olive-tint)", tagFg: "var(--olive-dark)" };
}

export default function Education() {
  return (
    <section
      id="education"
      style={{ padding: "90px 44px", maxWidth: 1440, margin: "0 auto", background: "var(--panel)", borderRadius: 32 }}
    >
      <h6 className="section-kicker">Education</h6>
      <h2 style={{ fontSize: 39, marginBottom: 40 }}>Academic background</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 820 }}>
        {education.map((e, i) => {
          const c = accentColors(e.accent);
          return (
            <Reveal key={e.degree} delay={i * 80} style={{ display: "grid", gridTemplateColumns: "64px 1fr", gap: 28, alignItems: "center" }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: c.bg,
                  color: c.fg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "var(--shadow-md)",
                  flex: "none",
                }}
              >
                <TechIcon name="gradcap" size={26} />
              </div>
              <div className="card" style={{ background: "var(--card)", borderRadius: 20, padding: "28px 32px", boxShadow: "var(--shadow-sm)" }}>
                <h3 style={{ fontSize: 24, marginBottom: 10 }}>{e.degree}</h3>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
                  <div style={{ fontSize: 16, color: "var(--terracotta-dark)", fontWeight: 600 }}>{e.school}</div>
                  <span style={{ fontSize: 15, fontWeight: 600, color: c.tagFg, background: c.tagBg, padding: "4px 12px", borderRadius: 999, whiteSpace: "nowrap" }}>
                    {e.period}
                  </span>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
