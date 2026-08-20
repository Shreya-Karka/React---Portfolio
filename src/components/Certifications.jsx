import TechIcon from "./TechIcon.jsx";
import Reveal from "./Reveal.jsx";
import { certifications } from "../data.js";

function accentColors(accent) {
  return accent === "terracotta"
    ? { bg: "var(--terracotta-dark)", fg: "var(--terracotta-tint)" }
    : { bg: "var(--olive-dark)", fg: "var(--olive-tint)" };
}

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: "90px 44px", maxWidth: 1440, margin: "0 auto" }}>
      <h6 className="section-kicker">Certifications</h6>
      <h2 style={{ fontSize: 39, marginBottom: 40 }}>Credentials</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 22 }}>
        {certifications.map((cert, i) => {
          const c = accentColors(cert.accent);
          return (
            <Reveal
              key={i}
              delay={i * 60}
              as="a"
              href={cert.credentialUrl}
              target="_blank"
              rel="noreferrer"
              className="liftcard"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                padding: 24,
                borderRadius: 28,
                background: "var(--panel)",
                textDecoration: "none",
                color: "var(--ink)",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: c.bg,
                  color: c.fg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 6,
                }}
              >
                <TechIcon name="check" size={18} />
              </div>
              <div className="display" style={{ fontSize: 18.5 }}>
                {cert.title}
              </div>
              <div style={{ fontSize: 15, opacity: 0.7, marginBottom: 4 }}>{cert.issuer}</div>
              <div style={{ fontSize: 15.5, opacity: 0.82, lineHeight: 1.5 }}>{cert.description}</div>
              <div style={{ fontSize: 14.5, fontWeight: 600, color: c.bg, marginTop: 8 }}>
                View Credential →
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
