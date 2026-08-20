export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: 36,
        color: "var(--ink)",
        opacity: 0.55,
        fontSize: 14.5,
        borderTop: "1px solid rgba(32,30,29,0.12)",
      }}
    >
      Made with ♥ by Shreya Karka — © {new Date().getFullYear()}
    </footer>
  );
}
