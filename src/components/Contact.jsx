import { useState } from "react";
import TechIcon from "./TechIcon.jsx";
import Reveal from "./Reveal.jsx";
import useVisitorCount from "../hooks/useVisitorCount.js";
import { profile } from "../data.js";

function todayISO() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

function parts(iso) {
  const d = new Date(iso + "T00:00:00");
  return {
    weekday: d.toLocaleDateString(undefined, { weekday: "long" }),
    month: d.toLocaleDateString(undefined, { month: "long" }),
    day: d.getDate(),
    year: d.getFullYear(),
  };
}

function googleMeetUrl(iso) {
  const start = iso.replace(/-/g, "") + "T100000Z";
  const end = iso.replace(/-/g, "") + "T103000Z";
  const text = encodeURIComponent(`Meeting with ${profile.name}`);
  const details = encodeURIComponent("Portfolio meeting request — looking forward to connecting!");
  // `add=` invites the organizer (Shreya) as a guest on the event, and also
  // nudges Google Calendar's "auto-attach conferencing when a guest is
  // added" behavior on personal accounts (not guaranteed on every account
  // type — if Meet isn't attached automatically, the "Add Google Meet
  // video conferencing" button in the event editor adds it in one click).
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${start}/${end}&details=${details}&add=${encodeURIComponent(profile.email)}`;
}

function teamsMeetingUrl(iso) {
  const startdt = `${iso}T10:00:00`;
  const enddt = `${iso}T10:30:00`;
  const subject = encodeURIComponent(`Meeting with ${profile.name}`);
  const body = encodeURIComponent("Portfolio meeting request — looking forward to connecting!");
  // `to=` pre-fills Shreya as a required attendee. Microsoft doesn't expose
  // a link parameter that can flip the "Teams meeting" toggle on (that
  // requires a signed-in Graph API call), so that one small step is still
  // manual — see the caption under the buttons in the UI.
  return `https://outlook.office.com/calendar/0/deeplink/compose?subject=${subject}&startdt=${startdt}&enddt=${enddt}&allday=false&body=${body}&to=${encodeURIComponent(profile.email)}`;
}

export default function Contact() {
  const [date, setDate] = useState(todayISO());
  const p = parts(date);
  // Real, persistent count from a free public hit-counter API — starts at 0
  // for a fresh namespace/key and increments once per visitor session.
  // See src/hooks/useVisitorCount.js for details.
  const visitorCount = useVisitorCount();

  return (
    <section id="contact" style={{ padding: "100px 44px 60px", maxWidth: 1440, margin: "0 auto" }}>
      <h6 className="section-kicker">Contact</h6>

      <div
        className="contact-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "stretch" }}
      >
        {/* LEFT: intro + contact info + links */}
        <Reveal
          style={{
            background: "var(--bg)",
            borderRadius: 28,
            padding: 36,
            display: "flex",
            flexDirection: "column",
            gap: 24,
            minWidth: 0,
          }}
        >
          <h2 style={{ fontSize: 39, margin: 0 }}>Let's talk</h2>
          <p style={{ fontSize: 18.5, opacity: 0.85, margin: 0, lineHeight: 1.6 }}>
            I'm actively looking for full-time software engineering roles. If there's a fit, or
            you just want to chat about a project, reach out — I'd love to hear from you.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <a
              href={`mailto:${profile.email}`}
              style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 17, fontWeight: 600, color: "var(--ink)" }}
            >
              <span
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  background: "var(--terracotta)",
                  color: "var(--terracotta-tint)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: "none",
                }}
              >
                <TechIcon name="email" size={16} />
              </span>
              <span style={{ wordBreak: "break-word" }}>{profile.email}</span>
            </a>
            <a
              href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
              style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 17, fontWeight: 600, color: "var(--ink)" }}
            >
              <span
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  background: "var(--olive)",
                  color: "var(--olive-tint)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: "none",
                }}
              >
                <TechIcon name="phone" size={16} />
              </span>
              {profile.phone}
            </a>
          </div>

          <div>
            <div style={{ fontSize: 15, opacity: 0.7, marginBottom: 12 }}>Find me online</div>
            <div style={{ display: "flex", gap: 12 }}>
              <a href={profile.links.github} className="social" title="GitHub">
                <TechIcon name="github" size={20} />
              </a>
              <a href={profile.links.linkedin} className="social" title="LinkedIn">
                <TechIcon name="linkedin" size={20} />
              </a>
              <a href={profile.links.leetcode} className="social" title="LeetCode">
                <TechIcon name="leetcode" size={20} />
              </a>
            </div>
          </div>
        </Reveal>

        {/* RIGHT: calendar + scheduling + visitor count */}
        <Reveal delay={120}>
          <div style={{ background: "var(--panel)", borderRadius: 28, padding: 32, textAlign: "center" }}>
            <div style={{ fontSize: 15, color: "var(--terracotta-dark)", fontWeight: 600, marginBottom: 4 }}>
              {p.weekday}
            </div>
            <div className="display" style={{ fontSize: 83, lineHeight: 1, color: "var(--ink)" }}>
              {p.day}
            </div>
            <div style={{ fontSize: 20.5, marginBottom: 20 }}>
              {p.month} {p.year}
            </div>

            <input
              type="date"
              value={date}
              min={todayISO()}
              onChange={(e) => setDate(e.target.value)}
              style={{
                fontFamily: "'Figtree', sans-serif",
                fontSize: 16,
                padding: "10px 14px",
                borderRadius: 10,
                border: "1px solid rgba(32,30,29,0.2)",
                background: "var(--card)",
                color: "var(--ink)",
                marginBottom: 20,
              }}
            />

            <div style={{ fontSize: 15, opacity: 0.75, marginBottom: 14 }}>
              Pick a date and schedule a 30-minute intro call
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
              <a href={googleMeetUrl(date)} target="_blank" rel="noreferrer" className="btn-primary">
                Google Meet
              </a>
              <a href={teamsMeetingUrl(date)} target="_blank" rel="noreferrer" className="btn-teams">
                MS Teams
              </a>
            </div>
            <div style={{ fontSize: 12, opacity: 0.55, marginTop: 12 }}>
              Opens a pre-filled invite on your calendar — just flip on the video-call
              toggle before sending, since neither provider allows that step to be done
              automatically from a link.
            </div>
          </div>

          <div
            style={{
              marginTop: 20,
              background: "var(--panel)",
              borderRadius: 28,
              padding: "28px 32px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 15, opacity: 0.7, marginBottom: 10 }}>Portfolio visitors so far</div>
            <div className="display" style={{ fontSize: 50.5, color: "var(--terracotta-dark)" }}>
              {visitorCount === null ? "—" : visitorCount.toLocaleString()}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
