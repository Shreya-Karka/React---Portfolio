import TechIcon from "./TechIcon.jsx";
import Reveal from "./Reveal.jsx";
import { projects, profile } from "../data.js";

function accentColors(accent) {
  return accent === "terracotta"
    ? { bg: "var(--terracotta)", fg: "var(--terracotta-tint)", tagBg: "var(--terracotta-tint)", tagFg: "var(--terracotta-dark)" }
    : { bg: "var(--olive)", fg: "var(--olive-tint)", tagBg: "var(--olive-tint)", tagFg: "var(--olive-dark)" };
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "90px 44px", maxWidth: 1440, margin: "0 auto" }}>
      <h6 className="section-kicker">Projects</h6>
      <h2 className="section-title">Things I've built</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
        {projects.map((p, i) => {
          const c = accentColors(p.accent);
          return (
            <Reveal
              key={i}
              delay={i * 70}
              className="liftcard"
              style={{
                background: "var(--panel)",
                borderRadius: 28,
                padding: 30,
                display: "flex",
                flexDirection: "column",
              }}
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
                  marginBottom: 16,
                }}
              >
                <TechIcon name={p.icon} size={20} />
              </div>
              <div className="display" style={{ fontSize: 22, marginBottom: 10 }}>
                {p.title}
              </div>
              <p style={{ margin: "0 0 18px", fontSize: 16.5, opacity: 0.85, flexGrow: 1 }}>
                {p.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                {p.stack.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontSize: 12.5,
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
              <div style={{ display: "flex", gap: 16, fontSize: 15, fontWeight: 600 }}>
                <a href={p.codeUrl} target="_blank" rel="noreferrer">Code →</a>
                {p.demoUrl && (
                  <a href={p.demoUrl} target="_blank" rel="noreferrer">Live Demo →</a>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={projects.length * 70} style={{ marginTop: 40, textAlign: "center" }}>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="btn-ghost"
          style={{ display: "inline-flex" }}
        >
          <TechIcon name="github" size={15} />
          View More on GitHub
        </a>
      </Reveal>
    </section>
  );
}
