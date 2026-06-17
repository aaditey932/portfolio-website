"use client";

const TONES = {
  accent: "var(--accent)",
  success: "var(--success)",
  warning: "var(--warning)",
  danger: "var(--danger)",
  neutral: "var(--text-secondary)",
};

export default function Badge({ children, tone = "accent", dot = false, style, ...rest }) {
  const c = TONES[tone] || TONES.accent;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "var(--font-mono)",
        fontSize: "0.6875rem",
        fontWeight: 600,
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase",
        color: c,
        background: `color-mix(in srgb, ${c} 12%, transparent)`,
        border: `1px solid color-mix(in srgb, ${c} 30%, transparent)`,
        borderRadius: "var(--radius-sm)",
        padding: "4px 9px",
        lineHeight: 1,
        ...style,
      }}
      {...rest}
    >
      {dot && (
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: c,
            flex: "none",
          }}
        />
      )}
      {children}
    </span>
  );
}
