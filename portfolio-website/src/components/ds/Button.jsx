"use client";

const SIZES = {
  sm: { padding: "8px 16px", fontSize: "0.8125rem" },
  md: { padding: "12px 24px", fontSize: "0.875rem" },
  lg: { padding: "15px 30px", fontSize: "0.9375rem" },
};

const VARIANTS = {
  primary: { background: "var(--accent)", color: "var(--on-accent)" },
  secondary: {
    background: "var(--overlay-hover)",
    borderColor: "var(--line-strong)",
    color: "var(--text-strong)",
  },
  ghost: { background: "transparent", color: "var(--text-secondary)" },
};

const HOVER = {
  primary: (e) => {
    e.currentTarget.style.background = "var(--accent-hover)";
  },
  secondary: (e) => {
    e.currentTarget.style.background = "var(--overlay-press)";
    e.currentTarget.style.borderColor = "var(--line-accent)";
  },
  ghost: (e) => {
    e.currentTarget.style.color = "var(--text-strong)";
  },
};
const LEAVE = {
  primary: (e) => {
    e.currentTarget.style.background = "var(--accent)";
  },
  secondary: (e) => {
    e.currentTarget.style.background = "var(--overlay-hover)";
    e.currentTarget.style.borderColor = "var(--line-strong)";
  },
  ghost: (e) => {
    e.currentTarget.style.color = "var(--text-secondary)";
  },
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  icon,
  iconRight,
  disabled = false,
  fullWidth = false,
  type = "button",
  onClick,
  target,
  rel,
  ...rest
}) {
  const style = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    lineHeight: 1,
    borderRadius: "var(--radius-pill)",
    border: "1px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    width: fullWidth ? "100%" : "auto",
    transition:
      "background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
    textDecoration: "none",
    whiteSpace: "nowrap",
    ...SIZES[size],
    ...VARIANTS[variant],
  };

  const handlers = disabled
    ? {}
    : {
        onMouseEnter: HOVER[variant],
        onMouseLeave: LEAVE[variant],
        onMouseDown: (e) => {
          e.currentTarget.style.transform = "translateY(1px)";
        },
        onMouseUp: (e) => {
          e.currentTarget.style.transform = "translateY(0)";
        },
      };

  const iconWrap = (node) =>
    node ? (
      <span style={{ display: "inline-flex", width: "1.05em", height: "1.05em" }}>{node}</span>
    ) : null;

  const content = (
    <>
      {iconWrap(icon)}
      {children}
      {iconWrap(iconRight)}
    </>
  );

  if (href && !disabled) {
    const isExternal = /^https?:/.test(href) || href.startsWith("mailto:");
    return (
      <a
        href={href}
        style={style}
        onClick={onClick}
        target={target ?? (isExternal && !href.startsWith("mailto:") ? "_blank" : undefined)}
        rel={rel ?? (isExternal && !href.startsWith("mailto:") ? "noopener noreferrer" : undefined)}
        {...handlers}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} style={style} disabled={disabled} onClick={onClick} {...handlers} {...rest}>
      {content}
    </button>
  );
}
