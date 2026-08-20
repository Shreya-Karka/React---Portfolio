import Reveal from "./Reveal.jsx";
import TechIcon from "./TechIcon.jsx";
import Carousel from "./Carousel.jsx";
import { about } from "../data.js";

const groupPhotos = [
  { src: "/images/collage4.jpg", pos: "50% 10%" },
  { src: "/images/collage1.jpg", pos: "50% 25%" },
  { src: "/images/about.jpg", pos: "50% 30%" },
  { src: "/images/collage3.jpg", pos: "50% 22%" },
  { src: "/images/collage2.jpg", pos: "50% 35%" },
];

export default function About() {
  return (
    <section
      id="about"
      className="about-grid"
      style={{
        padding: "90px 44px",
        maxWidth: 1440,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1.4fr",
        gap: 56,
        alignItems: "center",
      }}
    >
      <Reveal>
        <Carousel photos={groupPhotos} />
      </Reveal>
      <div style={{ textAlign: "center" }}>
        <Reveal>
          <h6 className="section-kicker">About</h6>
        </Reveal>
        <Reveal delay={80}>
          <h2 style={{ fontSize: 39, marginBottom: 24 }}>A little about me</h2>
        </Reveal>
        <div style={{ fontSize: 18.5, opacity: 0.88 }}>
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={160 + i * 100}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={160 + about.paragraphs.length * 100}>
          <a
            href={about.resumeUrl}
            download
            className="btn-primary"
            style={{ marginTop: 8, display: "inline-flex" }}
          >
            <TechIcon name="download" size={15} />
            Download Resume
          </a>
        </Reveal>
      </div>
    </section>
  );
}
