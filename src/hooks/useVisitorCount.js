import { useEffect, useState } from "react";

// Uses Abacus (https://abacus.jasoncameron.dev) — a free, no-auth, CORS-enabled
// hit-counter API. Each call to /hit/{namespace}/{key} increments a persistent
// server-side counter and returns the new total, so the count is real and
// shared across every visitor, not just a local/browser-side number.
//
// LOCAL DEV IS EXCLUDED: when running on localhost/127.0.0.1 (npm run dev,
// npm run preview, etc.), this hook never calls the API — it just shows the
// count as static "0" instead. That means testing the site locally, as many
// times as you like, will never pollute the real counter. Only real visits
// to the deployed domain increment it.
//
// To avoid double-counting the same visitor from re-renders or repeated
// component mounts, we only send the increment once per browser tab session
// (sessionStorage flag). Refreshing the page won't count again until a new
// tab/session is opened.
//
// NAMESPACE/KEY: change these if you ever want to reset the counter back to
// 0 — a brand-new namespace+key pair always starts fresh at 0. (This pair
// was rotated on 2026-08-20 to shake off test hits from local dev testing —
// it's a clean, never-used key, so it will read 0 until the site goes live
// and real visitors start showing up.)
const NAMESPACE = "shreya-karka-portfolio-v2";
const KEY = "visits";
const SESSION_FLAG = "shreya-portfolio-visit-counted";

function isLocalHost() {
  const h = window.location.hostname;
  return h === "localhost" || h === "127.0.0.1" || h === "" || h === "0.0.0.0";
}

export default function useVisitorCount() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    if (isLocalHost()) {
      // Local testing never counts — show a static 0 instead of hitting
      // the real API at all.
      setCount(0);
      return;
    }

    // Set the session flag synchronously, before the fetch even starts.
    // This matters because React 18 StrictMode (dev mode) runs effects
    // twice in a row (mount → cleanup → mount again) — if we only set the
    // flag inside the .then() callback, both invocations can race past the
    // sessionStorage check before either fetch resolves, causing a double
    // hit for a single real visit. Setting it up front closes that race.
    const alreadyCounted = sessionStorage.getItem(SESSION_FLAG);
    const url = alreadyCounted
      ? `https://abacus.jasoncameron.dev/get/${NAMESPACE}/${KEY}`
      : `https://abacus.jasoncameron.dev/hit/${NAMESPACE}/${KEY}`;

    if (!alreadyCounted) {
      sessionStorage.setItem(SESSION_FLAG, "1");
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.value === "number") {
          setCount(data.value);
        }
      })
      .catch(() => {
        // Network unavailable (e.g. offline, or blocked in a sandboxed
        // preview) — fail quietly and just don't show a number.
        setCount(null);
      });
  }, []);

  return count;
}
