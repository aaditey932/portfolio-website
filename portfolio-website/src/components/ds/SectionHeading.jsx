export default function SectionHeading({ index, eyebrow, title, align = "left" }) {
  const centered = align === "center";
  return (
    <header
      style={{
        textAlign: align,
        maxWidth: centered ? 640 : "none",
        margin: centered ? "0 auto" : 0,
      }}
    >
      {(index || eyebrow) && (
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: centered ? "center" : "flex-start",
            gap: 10,
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            letterSpacing: "var(--tracking-caps)",
            textTransform: "uppercase",
            color: "var(--accent)",
            margin: "0 0 16px",
          }}
        >
          {index && <span style={{ color: "var(--text-faint)" }}>{index}</span>}
          {index && eyebrow && (
            <span style={{ width: 24, height: 1, background: "var(--line-accent)" }} />
          )}
          {eyebrow}
        </p>
      )}
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "clamp(2rem, 4vw, 3rem)",
          lineHeight: "var(--leading-tight)",
          letterSpacing: "var(--tracking-tight)",
          color: "var(--text-heading)",
          margin: 0,
        }}
      >
        {title}
      </h2>
    </header>
  );
}
