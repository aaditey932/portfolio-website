"use client";

export default function TabButton({ children, active = false, onClick, style, ...rest }) {
  return (
    <button
      type="button"
      role="tab"
      onClick={onClick}
      aria-selected={active}
      style={{
        position: "relative",
        appearance: "none",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-mono)",
        fontSize: "0.8125rem",
        letterSpacing: "var(--tracking-mono)",
        textTransform: "uppercase",
        color: active ? "var(--accent)" : "var(--text-secondary)",
        padding: "0 0 10px",
        transition: "color var(--dur-base) var(--ease-out)",
        ...style,
      }}
      onMouseEnter={(e) => {
        if (!active) e.currentTarget.style.color = "var(--text-strong)";
      }}
      onMouseLeave={(e) => {
        if (!active) e.currentTarget.style.color = "var(--text-secondary)";
      }}
      {...rest}
    >
      {children}
      <span
        style={{
          position: "absolute",
          left: 0,
          bottom: -1,
          height: 2,
          width: "100%",
          background: active ? "var(--accent)" : "transparent",
          boxShadow: active ? "0 0 12px -2px var(--cyan-glow)" : "none",
          transition: "background var(--dur-base) var(--ease-out)",
        }}
      />
    </button>
  );
}
