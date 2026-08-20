// Original hand-drawn flat illustration (no external assets, no copyright concerns),
// built from primitive shapes in the site's own palette.
export default function CodingIllustration({ style }) {
  return (
    <svg viewBox="0 0 400 420" style={style} xmlns="http://www.w3.org/2000/svg">
      {/* backdrop blob */}
      <ellipse cx="200" cy="230" rx="170" ry="170" fill="#ebddc5" />

      {/* desk */}
      <rect x="60" y="300" width="280" height="14" rx="6" fill="#c67139" />
      <rect x="80" y="314" width="14" height="60" fill="#8c491a" />
      <rect x="306" y="314" width="14" height="60" fill="#8c491a" />

      {/* laptop */}
      <g>
        <rect x="150" y="250" width="100" height="66" rx="6" fill="#201e1d" />
        <rect x="158" y="257" width="84" height="48" rx="3" fill="#7a8a5e" />
        <rect x="168" y="264" width="40" height="4" rx="2" fill="#f0fae1" opacity="0.8" />
        <rect x="168" y="272" width="60" height="4" rx="2" fill="#f0fae1" opacity="0.6" />
        <rect x="168" y="280" width="30" height="4" rx="2" fill="#f0fae1" opacity="0.5" />
        <rect x="168" y="288" width="50" height="4" rx="2" fill="#f0fae1" opacity="0.4" />
        <path d="M140 316 h120 l8 10 h-136 z" fill="#3a3835" />
      </g>

      {/* mug */}
      <rect x="270" y="292" width="22" height="22" rx="4" fill="#c67139" />
      <path d="M292 298 q10 0 10 8 q0 8 -10 8" stroke="#c67139" strokeWidth="4" fill="none" />

      {/* plant */}
      <rect x="108" y="296" width="18" height="18" rx="3" fill="#56633f" />
      <path d="M117 296 q-14 -18 -26 -14 q4 16 26 14z" fill="#7a8a5e" />
      <path d="M117 296 q14 -22 28 -16 q-2 18 -28 16z" fill="#7a8a5e" />
      <path d="M117 296 q0 -22 0 -30" stroke="#56633f" strokeWidth="3" fill="none" />

      {/* chair */}
      <rect x="178" y="330" width="16" height="46" rx="4" fill="#8c491a" />

      {/* person torso */}
      <g>
        <path d="M160 330 q40 -30 80 0 l-8 46 h-64 z" fill="#c67139" />
        {/* head */}
        <circle cx="200" cy="300" r="26" fill="#f0d6b8" />
        {/* hair */}
        <path d="M174 296 q0 -34 26 -34 q28 0 26 32 q-6 -10 -18 -10 q2 6 -4 10 q-4 -8 -14 -8 q2 6 -4 10 q-6 -4 -12 0z" fill="#3a2a1f" />
        {/* arms reaching to keyboard */}
        <path d="M168 336 q10 -20 34 -16 l-6 20 z" fill="#f0d6b8" />
        <path d="M232 336 q-10 -20 -34 -16 l6 20 z" fill="#f0d6b8" />
      </g>

      {/* floating code chips */}
      <g opacity="0.85">
        <rect x="60" y="130" width="46" height="20" rx="10" fill="#c67139" />
        <text x="83" y="144" fontSize="11" fill="#fff2eb" textAnchor="middle" fontFamily="monospace">{"</>"}</text>

        <rect x="300" y="150" width="52" height="20" rx="10" fill="#7a8a5e" />
        <text x="326" y="164" fontSize="10" fill="#f0fae1" textAnchor="middle" fontFamily="monospace">{"{ }"}</text>

        <rect x="280" y="90" width="60" height="20" rx="10" fill="#8c491a" />
        <text x="310" y="104" fontSize="9" fill="#fff2eb" textAnchor="middle" fontFamily="monospace">function()</text>

        <rect x="50" y="200" width="56" height="20" rx="10" fill="#56633f" />
        <text x="78" y="214" fontSize="9" fill="#f0fae1" textAnchor="middle" fontFamily="monospace">git push</text>
      </g>
    </svg>
  );
}
