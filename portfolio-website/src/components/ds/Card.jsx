"use client";

export default function Card({
  children,
  interactive = false,
  padding = "var(--space-5)",
  style,
  ...rest
}) {
  const base = {
    background: "var(--surface-card)",
    border: "1px solid var(--border-subtle)",
    borderRadius: "var(--radius-lg)",
    boxShadow: "var(--shadow-card)",
    padding,
    transition:
      "border-color var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
    ...style,
  };
  const handlers = interactive
    ? {
        onMouseEnter: (e) => {
          e.currentTarget.style.borderColor = "var(--line-accent)";
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = "var(--shadow-lg)";
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.borderColor = "var(--border-subtle)";
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "var(--shadow-card)";
        },
      }
    : {};
  return (
    <div style={base} {...handlers} {...rest}>
      {children}
    </div>
  );
}
