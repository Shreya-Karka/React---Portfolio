import { useState } from "react";
import Loader from "./components/Loader.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Tech from "./components/Tech.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Recognitions from "./components/Recognitions.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <Nav />
      <div style={{ paddingTop: 72 }}>
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Projects />
        <Education />
        <Recognitions />
        <Certifications />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
