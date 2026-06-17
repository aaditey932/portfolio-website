"use client";

const TONES = {
  accent: {
    color: "var(--accent)",
    background: "var(--accent-tint)",
    borderColor: "var(--line-accent)",
  },
  neutral: {
    color: "var(--text-secondary)",
    background: "var(--overlay-hover)",
    borderColor: "var(--border-subtle)",
  },
};

export default function Tag({ children, tone = "accent", interactive = false, style, ...rest }) {
  const t = TONES[tone] || TONES.accent;
  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    fontFamily: "var(--font-mono)",
    fontSize: "0.75rem",
    fontWeight: 500,
    letterSpacing: "var(--tracking-mono)",
    lineHeight: 1,
    padding: "5px 11px",
    borderRadius: "var(--radius-pill)",
    border: "1px solid",
    whiteSpace: "nowrap",
    cursor: interactive ? "pointer" : "default",
    transition:
      "background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)",
    ...t,
    ...style,
  };
  const handlers = interactive
    ? {
        onMouseEnter: (e) => {
          e.currentTarget.style.borderColor = "var(--accent)";
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.borderColor = t.borderColor;
        },
      }
    : {};
  return (
    <span style={baseStyle} {...handlers} {...rest}>
      {children}
    </span>
  );
}
