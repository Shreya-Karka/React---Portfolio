import TechIcon from "./TechIcon.jsx";
import Typewriter from "./Typewriter.jsx";
import { profile } from "../data.js";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-grid"
      style={{
        minHeight: "88vh",
        display: "grid",
        gridTemplateColumns: "1.2fr 0.8fr",
        alignItems: "center",
        gap: 40,
        padding: "40px 44px 60px",
        maxWidth: 1440,
        margin: "0 auto",
        boxSizing: "border-box",
      }}
    >
      <div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "var(--panel)",
            color: "var(--terracotta-dark)",
            fontSize: 14,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            padding: "6px 16px",
            borderRadius: 999,
            marginBottom: 24,
          }}
        >
          Open to full-time opportunities
        </div>
        <h1 style={{ fontSize: "clamp(44px,6.6vw,72px)", lineHeight: 1.05, margin: "0 0 10px" }}>
          {profile.name}
        </h1>
        <div
          style={{
            fontSize: "clamp(22px,2.9vw,31px)",
            color: "var(--terracotta-dark)",
            fontWeight: 600,
            minHeight: "1.4em",
            margin: "0 0 20px",
          }}
        >
          <Typewriter words={profile.roles} />
        </div>
        <p style={{ fontSize: 20.5, maxWidth: 560, opacity: 0.85, margin: "0 0 28px" }}>
          {profile.tagline}
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 28 }}>
          <a href={`mailto:${profile.email}`} className="btn-primary">
            Get in Touch
          </a>
          <a href="#projects" className="btn-ghost">
            View Projects
          </a>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <a href={profile.links.github} className="social" title="GitHub" aria-label="GitHub">
            <TechIcon name="github" size={18} />
          </a>
          <a href={profile.links.linkedin} className="social" title="LinkedIn" aria-label="LinkedIn">
            <TechIcon name="linkedin" size={18} />
          </a>
          <a href={profile.links.leetcode} className="social" title="LeetCode" aria-label="LeetCode">
            <TechIcon name="leetcode" size={18} />
          </a>
        </div>
        <div
          style={{
            display: "flex",
            gap: 32,
            flexWrap: "wrap",
            marginTop: 44,
            paddingTop: 28,
            borderTop: "1px solid rgba(32,30,29,0.12)",
          }}
        >
          {profile.stats.map((s) => (
            <div key={s.label}>
              <div
                className="display"
                style={{
                  fontSize: 32,
                  color: s.color === "terracotta" ? "var(--terracotta)" : "var(--olive-dark)",
                }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: 15, opacity: 0.7 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position: "relative", justifySelf: "center", alignSelf: "center" }}>
        <div
          style={{
            position: "absolute",
            inset: -18,
            background: "var(--panel)",
            opacity: 0.5,
            borderRadius: "50%",
            zIndex: 0,
          }}
        />
        <img
          src="/images/hero.jpg"
          alt="Shreya Karka"
          style={{
            width: 380,
            height: 380,
            borderRadius: "50%",
            position: "relative",
            zIndex: 1,
            objectFit: "cover",
            objectPosition: "50% 20%",
            border: "2px solid rgba(255,255,255,0.4)",
            boxShadow: "var(--shadow-sm)",
          }}
        />
      </div>
    </section>
  );
}
