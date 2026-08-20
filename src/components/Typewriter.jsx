import { useEffect, useState } from "react";

// Cycles through a list of words with a simple type / pause / delete rhythm.
// No external dependency — plain setTimeout-driven state machine.
export default function Typewriter({ words, typingSpeed = 65, deletingSpeed = 35, pause = 1400 }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing"); // typing | pausing | deleting

  useEffect(() => {
    const current = words[index % words.length];
    let timeout;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), pause);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 200);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deletingSpeed);
      } else {
        setIndex((i) => (i + 1) % words.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, index, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span>
      {text}
      <span
        aria-hidden="true"
        style={{
          display: "inline-block",
          width: "2px",
          height: "0.9em",
          background: "currentColor",
          marginLeft: 3,
          verticalAlign: "-0.1em",
          animation: "blink 1s step-end infinite",
        }}
      />
      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </span>
  );
}
