"use client";

const VARIANTS = {
  outline: { background: "var(--overlay-hover)", border: "1px solid var(--border-default)" },
  bare: { background: "transparent", border: "1px solid transparent" },
};

export default function IconLink({
  children,
  href,
  label,
  size = 40,
  variant = "outline",
  style,
  ...rest
}) {
  const dim = typeof size === "number" ? `${size}px` : size;
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: dim,
        height: dim,
        borderRadius: "var(--radius-md)",
        color: "var(--text-secondary)",
        transition:
          "color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)",
        ...VARIANTS[variant],
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--accent)";
        e.currentTarget.style.borderColor = "var(--line-accent)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "var(--text-secondary)";
        e.currentTarget.style.borderColor =
          variant === "outline" ? "var(--border-default)" : "transparent";
      }}
      {...rest}
    >
      <span style={{ display: "inline-flex", width: "45%", height: "45%" }}>{children}</span>
    </a>
  );
}
