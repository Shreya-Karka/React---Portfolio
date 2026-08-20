const links = [
  ["#about", "About"],
  ["#experience", "Experience"],
  ["#tech", "Tech"],
  ["#projects", "Projects"],
  ["#education", "Education"],
  ["#recognitions", "Recognitions"],
  ["#certifications", "Certifications"],
];

export default function Nav() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        gap: 28,
        flexWrap: "wrap",
        padding: "16px 44px",
        background: "rgba(245,234,216,0.88)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(32,30,29,0.1)",
      }}
    >
      <a
        href="#home"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        aria-label="Back to top"
        className="display"
        style={{
          textDecoration: "none",
          fontSize: 20.5,
          marginRight: "auto",
          width: 42,
          height: 42,
          borderRadius: "50%",
          background: "var(--terracotta)",
          color: "var(--terracotta-tint)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        SK
      </a>
      <ul style={{ display: "flex", gap: 28, listStyle: "none", margin: 0, padding: 0 }}>
        {links.map(([href, label]) => (
          <li key={href}>
            <a href={href} className="navlink">
              {label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        style={{
          textDecoration: "none",
          fontSize: 17,
          color: "var(--terracotta-tint)",
          background: "var(--terracotta)",
          padding: "8px 18px",
          borderRadius: 999,
        }}
      >
        Contact
      </a>
    </nav>
  );
}
