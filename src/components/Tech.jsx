import TechIcon from "./TechIcon.jsx";
import Reveal from "./Reveal.jsx";
import CodingIllustration from "./CodingIllustration.jsx";
import { techGroups } from "../data.js";

function accentColors(accent) {
  return accent === "terracotta"
    ? { chipBg: "var(--terracotta-dark)", chipFg: "var(--terracotta-tint)", headIcon: "var(--terracotta-dark)" }
    : { chipBg: "var(--olive-dark)", chipFg: "var(--olive-tint)", headIcon: "var(--olive-dark)" };
}

export default function Tech() {
  return (
    <section id="tech" style={{ padding: "90px 44px", maxWidth: 1440, margin: "0 auto" }}>
      <h6 className="section-kicker">Tech</h6>
      <h2 className="section-title">Tools I reach for</h2>
      <div className="tech-layout" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 48, alignItems: "start" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 40 }}>
          {techGroups.map((group, groupIndex) => {
            const c = accentColors(group.accent);
            return (
              <Reveal key={group.title} delay={groupIndex * 40}>
                <h5
                  style={{
                    fontSize: 16,
                    margin: "0 0 14px",
                    opacity: 0.7,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {group.title}
                </h5>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {group.skills.map((skill, skillIndex) => (
                    <Reveal
                      key={skill.name}
                      as="span"
                      delay={skillIndex * 45}
                      className="chip"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 7,
                        background: c.chipBg,
                        color: c.chipFg,
                        fontSize: 15,
                        fontWeight: 600,
                        padding: "7px 14px 7px 9px",
                        borderRadius: 999,
                      }}
                    >
                      <TechIcon name={skill.icon} size={15} />
                      {skill.name}
                    </Reveal>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
        <div style={{ position: "sticky", top: 100 }}>
          <CodingIllustration style={{ width: "100%", height: "auto" }} />
        </div>
      </div>
    </section>
  );
}
