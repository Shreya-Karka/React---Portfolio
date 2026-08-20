import TechIcon from "./TechIcon.jsx";
import Reveal from "./Reveal.jsx";
import { experience } from "../data.js";

function accentColors(accent) {
  return accent === "terracotta"
    ? { bg: "var(--terracotta)", fg: "var(--terracotta-tint)", tagBg: "var(--terracotta-tint)", tagFg: "var(--terracotta-dark)" }
    : { bg: "var(--olive)", fg: "var(--olive-tint)", tagBg: "var(--olive-tint)", tagFg: "var(--olive-dark)" };
}

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ padding: "90px 44px", maxWidth: 1440, margin: "0 auto", background: "var(--panel)", borderRadius: 32 }}
    >
      <h6 className="section-kicker">Experience</h6>
      <h2 className="section-title">Where I've worked</h2>

      <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 28 }}>
        <div
          style={{
            position: "absolute",
            left: 27,
            top: 14,
            bottom: 14,
            width: 2,
            background: "rgba(140,73,26,0.25)",
          }}
        />

        {experience.map((job, jobIndex) => {
          const c = accentColors(job.accent);
          return (
            <Reveal key={job.role} delay={jobIndex * 60} style={{ position: "relative", display: "grid", gridTemplateColumns: "56px 1fr", gap: 28 }}>
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: 56,
                  height: 56,
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
                <TechIcon name={job.icon} size={24} />
              </div>
              <div className="card" style={{ background: "var(--card)", borderRadius: 20, padding: "28px 32px", boxShadow: "var(--shadow-sm)" }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
                  <h3 style={{ fontSize: 24 }}>{job.role}</h3>
                  <span style={{ fontSize: 15, fontWeight: 600, color: c.tagFg, background: c.tagBg, padding: "4px 12px", borderRadius: 999 }}>
                    {job.period}
                  </span>
                </div>
                <div style={{ fontSize: 16, color: "var(--terracotta-dark)", marginBottom: 14, fontWeight: 600 }}>
                  {job.company} · {job.location}
                </div>
                <ul style={{ margin: 0, paddingLeft: 20, fontSize: 17, opacity: 0.85, display: "flex", flexDirection: "column", gap: 6 }}>
                  {job.bullets.map((b, i) => (
                    <Reveal key={i} as="li" delay={i * 70}>
                      {b}
                    </Reveal>
                  ))}
                </ul>
                {job.stack && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 16 }}>
                    {job.stack.map((s) => (
                      <span
                        key={s}
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: c.tagFg,
                          background: c.tagBg,
                          padding: "4px 10px",
                          borderRadius: 999,
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
