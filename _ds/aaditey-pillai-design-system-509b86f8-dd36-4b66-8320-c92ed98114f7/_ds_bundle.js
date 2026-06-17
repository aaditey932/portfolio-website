/* @ds-bundle: {"format":3,"namespace":"AaditeyPillaiDesignSystem_509b86","components":[{"name":"ExperienceCard","sourcePath":"components/cards/ExperienceCard.jsx"},{"name":"ProjectCard","sourcePath":"components/cards/ProjectCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconLink","sourcePath":"components/core/IconLink.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"TabButton","sourcePath":"components/core/TabButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/cards/ExperienceCard.jsx":"02261aa3dc34","components/cards/ProjectCard.jsx":"c7678c72cc59","components/core/Badge.jsx":"c437e4dfb501","components/core/Button.jsx":"718e46044e80","components/core/Card.jsx":"b2f2c2859a24","components/core/IconLink.jsx":"82cf97e4f020","components/core/SectionHeading.jsx":"06f9a3892d40","components/core/TabButton.jsx":"d782c3ded34c","components/core/Tag.jsx":"3b601f771e7d","ui_kits/portfolio/app-education.jsx":"78b62f69d4ec","ui_kits/portfolio/app-experience.jsx":"758c31437b6e","ui_kits/portfolio/app-home.jsx":"abeccd398093","ui_kits/portfolio/app-projects.jsx":"4a1dd605e53a","ui_kits/portfolio/data.js":"f1aa3d24d3cd","ui_kits/portfolio/icons.jsx":"605b2c73087f","ui_kits/portfolio/sections.jsx":"e3e36bad46b9","ui_kits/portfolio/shell.jsx":"f3eacb4d6184"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AaditeyPillaiDesignSystem_509b86 = window.AaditeyPillaiDesignSystem_509b86 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small status/metric label. Mono, uppercase by default. Use for
 * result metrics (0.90 F1), availability ("Open to Spring 2026"), or status.
 */
function Badge({
  children,
  tone = "accent",
  dot = false,
  ...rest
}) {
  const tones = {
    accent: "var(--accent)",
    success: "var(--success)",
    warning: "var(--warning)",
    danger: "var(--danger)",
    neutral: "var(--text-secondary)"
  };
  const c = tones[tone] || tones.accent;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-mono)",
      fontSize: "0.6875rem",
      fontWeight: 600,
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: c,
      background: "color-mix(in srgb, " + c + " 12%, transparent)",
      border: "1px solid color-mix(in srgb, " + c + " 30%, transparent)",
      borderRadius: "var(--radius-sm)",
      padding: "4px 9px",
      lineHeight: 1,
      ...rest.style
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: c,
      flex: "none"
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the portfolio's primary call-to-action.
 * Primary = cyan pill with near-black ink (the site's "Hire Me"); secondary =
 * hairline outline on a faint white fill ("View Resume"); ghost = bare text.
 * Renders as <a> when `href` is set, otherwise <button>.
 */
function Button({
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
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: "0.8125rem"
    },
    md: {
      padding: "12px 24px",
      fontSize: "0.875rem"
    },
    lg: {
      padding: "15px 30px",
      fontSize: "0.9375rem"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    lineHeight: 1,
    borderRadius: "var(--radius-pill)",
    border: "1px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    width: fullWidth ? "100%" : "auto",
    transition: "background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
    textDecoration: "none",
    whiteSpace: "nowrap",
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: "var(--accent)",
      color: "var(--on-accent)"
    },
    secondary: {
      background: "var(--overlay-hover)",
      borderColor: "var(--line-strong)",
      color: "var(--text-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-secondary)"
    }
  };
  const hover = {
    primary: e => e.currentTarget.style.background = "var(--accent-hover)",
    secondary: e => {
      e.currentTarget.style.background = "var(--overlay-press)";
      e.currentTarget.style.borderColor = "var(--line-accent)";
    },
    ghost: e => e.currentTarget.style.color = "var(--text-strong)"
  };
  const leave = {
    primary: e => e.currentTarget.style.background = "var(--accent)",
    secondary: e => {
      e.currentTarget.style.background = "var(--overlay-hover)";
      e.currentTarget.style.borderColor = "var(--line-strong)";
    },
    ghost: e => e.currentTarget.style.color = "var(--text-secondary)"
  };
  const handlers = disabled ? {} : {
    onMouseEnter: hover[variant],
    onMouseLeave: leave[variant],
    onMouseDown: e => e.currentTarget.style.transform = "translateY(1px)",
    onMouseUp: e => e.currentTarget.style.transform = "translateY(0)"
  };
  const style = {
    ...base,
    ...variants[variant]
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: "1.05em",
      height: "1.05em"
    }
  }, icon) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: "1.05em",
      height: "1.05em"
    }
  }, iconRight) : null);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: style,
      onClick: onClick
    }, handlers, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    style: style,
    disabled: disabled,
    onClick: onClick
  }, handlers, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the base dark surface container. A near-black panel with a hairline
 * border that lifts (border brightens, subtle rise) on hover when `interactive`.
 */
function Card({
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
    transition: "border-color var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
    ...style
  };
  const handlers = interactive ? {
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = "var(--line-accent)";
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "var(--shadow-lg)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = "var(--border-subtle)";
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "var(--shadow-card)";
    }
  } : {};
  return /*#__PURE__*/React.createElement("div", _extends({
    style: base
  }, handlers, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconLink — a square icon affordance for social / external links (GitHub,
 * LinkedIn, code). Hairline by default; brightens to the accent on hover.
 * Pass an SVG/img node as `children`.
 */
function IconLink({
  children,
  href,
  label,
  size = 40,
  variant = "outline",
  ...rest
}) {
  const dim = typeof size === "number" ? size + "px" : size;
  const variants = {
    outline: {
      background: "var(--overlay-hover)",
      border: "1px solid var(--border-default)"
    },
    bare: {
      background: "transparent",
      border: "1px solid transparent"
    }
  };
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    "aria-label": label,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dim,
      height: dim,
      borderRadius: "var(--radius-md)",
      color: "var(--text-secondary)",
      transition: "color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)",
      ...variants[variant],
      ...rest.style
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = "var(--accent)";
      e.currentTarget.style.borderColor = "var(--line-accent)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = "var(--text-secondary)";
      e.currentTarget.style.borderColor = variant === "outline" ? "var(--border-default)" : "transparent";
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: "45%",
      height: "45%"
    }
  }, children));
}
Object.assign(__ds_scope, { IconLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconLink.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
/**
 * SectionHeading — the standard section opener. A mono eyebrow with an
 * optional index number ("01 — Experience") above a display title, mirroring
 * the numbered-section rhythm of the dark/technical direction.
 */
function SectionHeading({
  index,
  eyebrow,
  title,
  align = "left"
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      textAlign: align,
      maxWidth: align === "center" ? "640px" : "none",
      margin: align === "center" ? "0 auto" : "0"
    }
  }, (index || eyebrow) && /*#__PURE__*/React.createElement("p", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: align === "center" ? "center" : "flex-start",
      gap: "10px",
      fontFamily: "var(--font-mono)",
      fontSize: "0.75rem",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--accent)",
      margin: "0 0 16px"
    }
  }, index ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)"
    }
  }, index) : null, index && eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 1,
      background: "var(--line-accent)"
    }
  }) : null, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(2rem, 4vw, 3rem)",
      lineHeight: "var(--leading-tight)",
      letterSpacing: "var(--tracking-tight)",
      color: "var(--text-heading)",
      margin: 0
    }
  }, title));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/TabButton.jsx
try { (() => {
/**
 * TabButton — underline-style tab used in the About section (Skills /
 * Education) and as a project filter. Active tab gets cyan text + an accent
 * underline; inactive is muted.
 */
function TabButton({
  children,
  active = false,
  onClick,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    "aria-selected": active,
    style: {
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
      ...rest.style
    },
    onMouseEnter: e => {
      if (!active) e.currentTarget.style.color = "var(--text-strong)";
    },
    onMouseLeave: e => {
      if (!active) e.currentTarget.style.color = "var(--text-secondary)";
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      bottom: -1,
      height: 2,
      width: "100%",
      background: active ? "var(--accent)" : "transparent",
      boxShadow: active ? "0 0 12px -2px var(--cyan-glow)" : "none",
      transition: "background var(--dur-base) var(--ease-out)"
    }
  }));
}
Object.assign(__ds_scope, { TabButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TabButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — a tech/skill pill (LangGraph, FastAPI, RAG…). Monospace, cyan-tinted
 * by default; `tone="neutral"` for a quiet hairline chip. Set `interactive`
 * for filter pills that respond to hover.
 */
function Tag({
  children,
  tone = "accent",
  interactive = false,
  ...rest
}) {
  const tones = {
    accent: {
      color: "var(--accent)",
      background: "var(--accent-tint)",
      borderColor: "var(--line-accent)"
    },
    neutral: {
      color: "var(--text-secondary)",
      background: "var(--overlay-hover)",
      borderColor: "var(--border-subtle)"
    }
  };
  const style = {
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
    transition: "background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)",
    ...tones[tone]
  };
  const handlers = interactive ? {
    onMouseEnter: e => e.currentTarget.style.borderColor = "var(--accent)",
    onMouseLeave: e => e.currentTarget.style.borderColor = tones[tone].borderColor
  } : {};
  return /*#__PURE__*/React.createElement("span", _extends({
    style: style
  }, handlers, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/cards/ExperienceCard.jsx
try { (() => {
/**
 * ExperienceCard — a role entry: company + role + period in a header rail,
 * a short summary, achievement bullets, and a tech-tag footer. A cyan tick
 * marks each bullet. Use in a vertical stack on the Experience section.
 */
function ExperienceCard({
  company,
  role,
  period,
  logo,
  summary,
  bullets = [],
  tags = []
}) {
  const initials = company.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  const mark = logo ? /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      width: 48,
      height: 48,
      borderRadius: "var(--radius-md)",
      background: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 7,
      border: "1px solid var(--border-default)",
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: company + " logo",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      display: "block"
    }
  })) : /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      width: 48,
      height: 48,
      borderRadius: "var(--radius-md)",
      background: "var(--accent-tint)",
      border: "1px solid var(--line-accent)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-mono)",
      fontWeight: 600,
      fontSize: "0.9375rem",
      color: "var(--accent)"
    }
  }, initials);
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "16px"
    }
  }, mark, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "var(--text-2xl)",
      color: "var(--text-heading)",
      margin: 0,
      lineHeight: 1.15
    }
  }, company), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      color: "var(--accent)",
      margin: "4px 0 0"
    }
  }, role))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      letterSpacing: "var(--tracking-mono)",
      color: "var(--text-meta)",
      whiteSpace: "nowrap"
    }
  }, period)), summary && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: "var(--text-secondary)",
      lineHeight: "var(--leading-normal)",
      margin: "var(--space-4) 0 0"
    }
  }, summary), bullets.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: "var(--space-4) 0 0",
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }
  }, bullets.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: "12px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: "var(--text-body)",
      lineHeight: "var(--leading-normal)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)",
      fontFamily: "var(--font-mono)",
      flex: "none",
      marginTop: "1px"
    },
    "aria-hidden": true
  }, "\u203A"), /*#__PURE__*/React.createElement("span", null, b)))), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "6px",
      marginTop: "var(--space-5)",
      paddingTop: "var(--space-4)",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t,
    tone: "neutral"
  }, t))));
}
Object.assign(__ds_scope, { ExperienceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ExperienceCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProjectCard.jsx
try { (() => {
const CodeGlyph = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: {
    width: "100%",
    height: "100%"
  }
}, /*#__PURE__*/React.createElement("polyline", {
  points: "16 18 22 12 16 6"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "8 6 2 12 8 18"
}));
const ArrowGlyph = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: {
    width: "100%",
    height: "100%"
  }
}, /*#__PURE__*/React.createElement("line", {
  x1: "7",
  y1: "17",
  x2: "17",
  y2: "7"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "7 7 17 7 17 17"
}));

/**
 * ProjectCard — a project tile: thumbnail (image or mono fallback), title,
 * description, tech tags, and GitHub / live links. Built on Card; lifts on hover.
 */
function ProjectCard({
  title,
  description,
  image,
  tags = [],
  gitUrl,
  liveUrl
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    padding: "0",
    style: {
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "16 / 10",
      background: image ? `url(${image}) center / cover no-repeat` : "linear-gradient(135deg, var(--ink-800), var(--ink-900))",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, !image && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-mono)",
      fontSize: "0.75rem",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, "</>", "\xA0 no preview")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-5)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "var(--text-xl)",
      color: "var(--text-heading)",
      margin: 0,
      lineHeight: 1.2
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      flex: "none",
      color: "var(--text-faint)"
    }
  }, gitUrl && /*#__PURE__*/React.createElement("a", {
    href: gitUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Source on GitHub",
    style: {
      width: 18,
      height: 18,
      color: "inherit",
      transition: "color var(--dur-base)"
    },
    onMouseEnter: e => e.currentTarget.style.color = "var(--accent)",
    onMouseLeave: e => e.currentTarget.style.color = "var(--text-faint)"
  }, /*#__PURE__*/React.createElement(CodeGlyph, null)), liveUrl && /*#__PURE__*/React.createElement("a", {
    href: liveUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Live demo",
    style: {
      width: 18,
      height: 18,
      color: "inherit",
      transition: "color var(--dur-base)"
    },
    onMouseEnter: e => e.currentTarget.style.color = "var(--accent)",
    onMouseLeave: e => e.currentTarget.style.color = "var(--text-faint)"
  }, /*#__PURE__*/React.createElement(ArrowGlyph, null)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: "var(--text-secondary)",
      lineHeight: "var(--leading-normal)",
      margin: 0
    }
  }, description), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "6px",
      marginTop: "auto",
      paddingTop: "var(--space-3)"
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t
  }, t)))));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/app-education.jsx
try { (() => {
// Education detail page.
function EducationPage() {
  const [s, setS] = React.useState(false);
  React.useEffect(() => {
    const on = () => setS(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, {
      passive: true
    });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, {
    scrolled: s,
    active: "education.html"
  }), /*#__PURE__*/React.createElement(PageHero, {
    index: "02",
    eyebrow: "Education",
    title: "Education.",
    lead: "A Master of Engineering in AI at Duke, built on an Electronics & Communications foundation \u2014 the theory behind the systems I ship."
  }), /*#__PURE__*/React.createElement(EducationFull, null), /*#__PURE__*/React.createElement(Contact, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(EducationPage, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/app-education.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/app-experience.jsx
try { (() => {
// Experience detail page.
function ExperiencePage() {
  const [s, setS] = React.useState(false);
  React.useEffect(() => {
    const on = () => setS(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, {
      passive: true
    });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, {
    scrolled: s,
    active: "experience.html"
  }), /*#__PURE__*/React.createElement(PageHero, {
    index: "03",
    eyebrow: "Experience",
    title: "Experience.",
    lead: "From SIEM operations to production LLM pipelines \u2014 roles where I turned ambiguous data problems into measurable, shipped results."
  }), /*#__PURE__*/React.createElement(ExperienceFull, null), /*#__PURE__*/React.createElement(Contact, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(ExperiencePage, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/app-experience.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/app-home.jsx
try { (() => {
// Home page composition.
function useScrolled() {
  const [s, setS] = React.useState(false);
  React.useEffect(() => {
    const on = () => setS(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, {
      passive: true
    });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return s;
}
function Home() {
  const scrolled = useScrolled();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, {
    scrolled: scrolled
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(EducationPreview, null), /*#__PURE__*/React.createElement(ExperiencePreview, null), /*#__PURE__*/React.createElement(ProjectsPreview, null), /*#__PURE__*/React.createElement(SkillsSection, null), /*#__PURE__*/React.createElement(Contact, null));
}
window.useScrolled = useScrolled;
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(Home, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/app-home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/app-projects.jsx
try { (() => {
// Projects detail page.
function ProjectsPage() {
  const [s, setS] = React.useState(false);
  React.useEffect(() => {
    const on = () => setS(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, {
      passive: true
    });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, {
    scrolled: s,
    active: "projects.html"
  }), /*#__PURE__*/React.createElement(PageHero, {
    index: "04",
    eyebrow: "Projects",
    title: "Projects.",
    lead: "Agentic systems, RAG pipelines, fine-tuning, and from-scratch ML \u2014 most are deployed and demoable. Filter by focus area."
  }), /*#__PURE__*/React.createElement(ProjectsFull, null), /*#__PURE__*/React.createElement(Contact, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(ProjectsPage, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/app-projects.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/data.js
try { (() => {
// Portfolio content — lifted from the source repo's CONTENT.md / ProjectsSection.
window.PORTFOLIO = {
  identity: {
    initials: "AP",
    name: "Aaditey Pillai",
    rotating: ["AI", "ML", "LLM", "SYSTEMS"],
    tagline: "MEng in AI @ Duke University",
    blurb: "AI engineer building reliable, production LLM systems. Focused on evaluation, agentic pipelines, and AI that's useful, scalable, and quietly dependable.",
    resumeUrl: "https://drive.google.com/file/d/1R3x5vcte2e9DqQlIo0EvBhloSTJUWFwu/view",
    github: "https://github.com/aaditey932",
    linkedin: "https://linkedin.com",
    email: "aaditey.pillai@duke.edu"
  },
  about: "An inquisitive engineer pursuing a Master of Engineering (MEng) in Artificial Intelligence at Duke University, actively seeking Co-Op and full-time opportunities in AI for Spring 2026. Currently an AI Engineer Intern at PRGX Global, working on contract entity extraction and risk-scoring systems. Most motivated by turning messy, real-world data into reliable ML systems — better entity extraction, clearer model decisions, and pipelines that actually ship to production.",
  skills: [{
    title: "ML & Deep Learning",
    items: ["Scikit-learn", "PyTorch", "TensorFlow"]
  }, {
    title: "NLP",
    items: ["Transformers", "RAG", "LangChain", "OpenAI GPT", "LangGraph", "Groq", "Pydantic", "Ollama"]
  }, {
    title: "Large Language Models",
    items: ["Fine-tuning", "Pretraining", "vLLM", "Mistral", "LoRA"]
  }, {
    title: "Retrieval-Augmented Generation",
    items: ["Pinecone", "FAISS", "Vector DBs"]
  }, {
    title: "Cloud & DevOps",
    items: ["AWS", "GCP TPUs/GPUs", "Docker", "Kubernetes", "Azure Blob", "Apache Kafka"]
  }, {
    title: "Software Engineering",
    items: ["Python", "C++", "Java", "Git", "FastAPI", "Flask"]
  }],
  education: [{
    school: "Duke University",
    degree: "M.Eng, Artificial Intelligence",
    meta: "GPA 4.00 / 4.00 · Aug 2024 — May 2026",
    courses: "Reinforcement Learning, LLMs, AI in the Physical World, Deep Learning Applications"
  }, {
    school: "SRM Institute of Science & Technology",
    degree: "B.Tech, Electronics & Communications Engineering",
    meta: "GPA 9.34 / 10.00 · Jun 2019 — May 2023",
    courses: "Python, C, Computer Communication Networks"
  }],
  experience: [{
    company: "PRGX Global",
    role: "AI Engineer Intern",
    period: "2025 — Present",
    logo: "../../assets/logos/prgx-mark.png",
    summary: "Contract entity extraction & risk-scoring on a production LLM stack.",
    bullets: ["Optimized a contract entity-extraction pipeline by benchmarking GPT-OSS 20B against a vLLM-deployed fine-tuned Mistral 7B with structured few-shot multi-turn prompting — 0.90 F1 on contract-number extraction over 242 contracts, productionized on Apache Kafka.", "Designed a risk-scoring engine that extracts risk clauses with GPT-4o-mini and learns clause-category weights via an OOP architecture of nested dataclasses (contract, document, supplier).", "Trained the scoring model with a Bradley–Terry pairwise logistic-regression pipeline — 0.82 weighted Spearman rank correlation against SME rankings."],
    tags: ["vLLM", "Mistral 7B", "GPT-4o-mini", "Flask", "Apache Kafka", "Azure Blob"]
  }, {
    company: "Celusion Technologies",
    role: "Machine Learning Intern",
    period: "2022 — 2023",
    summary: "Large-scale tabular ML pipelines from raw data to deployed models.",
    bullets: ["Pre-processed 100,000+ records with feature selection and duplicate removal using Pandas, NumPy, and Scikit-Learn.", "Engineered features (location frequency, season counts, zip-code encoding) to lift model accuracy.", "Built a voting-classifier ensemble (random forest, gradient boosting, logistic regression) reaching 0.96 AUC via hyperparameter tuning."],
    tags: ["Pandas", "NumPy", "Scikit-Learn", "Ensemble"]
  }, {
    company: "BSE Technologies",
    role: "Cybersecurity Intern",
    period: "2021 — 2022",
    summary: "SIEM operations and incident response on IBM QRadar.",
    bullets: ["Maintained 95% system uptime configuring and tuning an IBM QRadar SIEM — data sources, rules, and detections.", "Investigated 50+ incidents at an average 4-hour resolution time.", "Integrated QRadar with two new security technologies to improve threat detection and cross-team workflows."],
    tags: ["IBM QRadar", "SIEM", "Threat Detection"]
  }],
  projects: [{
    title: "MedGraph Scheduler",
    blurb: "Multi-agent doctor-appointment scheduler on AWS EC2 — a LangGraph supervisor/worker graph turning a spreadsheet into one conversational interface, with ReAct Groq/OpenAI agents validated by Pydantic schemas.",
    image: "../../assets/projects/duke-advisor.png",
    tags: ["AI", "Web"],
    stack: ["LangGraph", "FastAPI", "Groq", "Pydantic", "AWS EC2"],
    gitUrl: "https://github.com/aaditey932",
    liveUrl: ""
  }, {
    title: "TubeGist AI",
    blurb: "RAG chatbot that extracts and chunks YouTube transcripts, embeds with text-embedding-3-small, retrieves via FAISS, and answers with GPT-4o-mini — sub-second retrieval, no video download.",
    image: "../../assets/projects/nutrition-rag.png",
    tags: ["AI", "Web", "NLP"],
    stack: ["LangChain", "FAISS", "GPT-4o-mini"],
    gitUrl: "https://github.com/aaditey932/tubegist-ai",
    liveUrl: "http://3.95.152.42:8501"
  }, {
    title: "Duke Student Advisor",
    blurb: "Agentic chatbot for Duke programs, courses, professors, and events — multiple specialized tools and databases behind a Streamlit interface, backed by the OpenAI API.",
    image: "../../assets/projects/duke-advisor.png",
    tags: ["AI", "Web"],
    stack: ["OpenAI", "Streamlit", "Agents"],
    gitUrl: "https://github.com/aaditey932/Duke-Student-Advisor-Chatbot",
    liveUrl: "http://13.218.146.34:8503"
  }, {
    title: "DeepSeek-Uncensored",
    blurb: "LoRA fine-tuning that removes censorship/bias from DeepSeek-R1, with a Streamlit base-vs-tuned comparison UI and automated evaluation via Google Gemini on accuracy, completeness, and bias.",
    image: "../../assets/projects/deepseek-uncensored.png",
    tags: ["AI", "NLP"],
    stack: ["LoRA", "DeepSeek-R1", "Gemini eval"],
    gitUrl: "https://deepseek-censorship-removal.streamlit.app",
    liveUrl: ""
  }, {
    title: "Nutrition RAG Assistant",
    blurb: "RAG system over human-nutrition research papers — Pinecone retrieval + GPT-4o generation behind Streamlit, making scientific knowledge searchable in plain language.",
    image: "../../assets/projects/nutrition-rag.png",
    tags: ["AI", "Web"],
    stack: ["Pinecone", "GPT-4o", "Streamlit"],
    gitUrl: "https://github.com/aaditey932/rag-app",
    liveUrl: ""
  }, {
    title: "LlaMa Resume Optimizer",
    blurb: "Optimizes resumes against a job description with keyword matching, similarity scoring, and LLaMA 3 (LoRA fine-tuned) — ATS-friendly edits and a downloadable result via Streamlit.",
    image: "../../assets/projects/llama-optimizer.png",
    tags: ["AI", "Web", "NLP"],
    stack: ["LLaMA 3", "LoRA", "Streamlit"],
    gitUrl: "https://github.com/aaditey932/llm-resume-optimizer",
    liveUrl: ""
  }, {
    title: "Frame-Finder",
    blurb: "Art-recognition app that identifies paintings from photos using CLIP embeddings and Pinecone vector search, then explains the match with an LLM. Built with Streamlit.",
    image: "../../assets/projects/frame-finder.png",
    tags: ["AI", "Web"],
    stack: ["CLIP", "Pinecone", "Streamlit"],
    gitUrl: "https://github.com/aaditey932/frame-finder",
    liveUrl: ""
  }, {
    title: "Transformer From Scratch",
    blurb: "A from-scratch Transformer in pure NumPy — multi-head self-attention, positional encoding, feed-forward networks, and masking — implementing 'Attention is All You Need' without any DL framework.",
    image: "../../assets/projects/transformer.png",
    tags: ["NLP"],
    stack: ["NumPy", "Transformers"],
    gitUrl: "https://github.com/aaditey932/transformer-from-scratch",
    liveUrl: ""
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/data.js", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/icons.jsx
try { (() => {
// Shared inline SVG glyphs for the portfolio UI kit.
const S = p => ({
  width: "100%",
  height: "100%",
  display: "block",
  ...p
});
function IconGithub() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    style: S()
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z"
  }));
}
function IconLinkedin() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    style: S()
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"
  }));
}
function IconMail() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: S()
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 7l-10 6L2 7"
  }));
}
function IconCode() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: S()
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "16 18 22 12 16 6"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "8 6 2 12 8 18"
  }));
}
function IconArrowUpRight() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: S()
  }, /*#__PURE__*/React.createElement("line", {
    x1: "7",
    y1: "17",
    x2: "17",
    y2: "7"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "7 7 17 7 17 17"
  }));
}
function IconArrowRight() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: S()
  }, /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "13 5 20 12 13 19"
  }));
}
Object.assign(window, {
  IconGithub,
  IconLinkedin,
  IconMail,
  IconCode,
  IconArrowUpRight,
  IconArrowRight
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/sections.jsx
try { (() => {
// Portfolio content sections (full + compact preview variants). No auto-mount —
// each page (app-*.jsx) composes the pieces it needs and renders the tree.
const DD = window.PORTFOLIO;

/* =============================== About ================================= */
function About() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "about"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "320px minmax(0,1fr)",
      gap: "var(--space-10)",
      alignItems: "center"
    },
    className: "about-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-portrait"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      border: "1px solid var(--border-default)",
      boxShadow: "var(--shadow-card)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/portrait.jpg",
    alt: "Portrait of Aaditey Pillai",
    style: {
      width: "100%",
      display: "block",
      aspectRatio: "4/5",
      objectFit: "cover",
      filter: "grayscale(0.35) contrast(1.02)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top, rgba(5,6,8,0.5), transparent 45%)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14,
      bottom: 12,
      fontFamily: "var(--font-mono)",
      fontSize: "0.6875rem",
      letterSpacing: "var(--tracking-mono)",
      color: "var(--text-body)"
    }
  }, "Durham, NC"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "01"
  }, "About"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(1.75rem,3vw,2.5rem)",
      letterSpacing: "var(--tracking-tight)",
      color: "var(--text-heading)",
      margin: "0 0 var(--space-5)",
      lineHeight: 1.1
    }
  }, "Turning messy data into systems that ship."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "1.0625rem",
      color: "var(--text-secondary)",
      lineHeight: 1.7,
      margin: 0
    }
  }, DD.about), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 10,
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Pill, null, "Applied AI / ML"), /*#__PURE__*/React.createElement(Pill, null, "Production LLM systems"), /*#__PURE__*/React.createElement(Pill, null, "Agentic pipelines"), /*#__PURE__*/React.createElement(Pill, null, "RAG & evaluation")))));
}

/* ============================== Education ============================== */
function EduCard({
  e,
  full
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: "var(--surface-card)",
      border: "1px solid " + (h ? "var(--line-accent)" : "var(--border-subtle)"),
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-card)",
      padding: "var(--space-5)",
      transition: "border-color var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "1.25rem",
      color: "var(--text-heading)",
      margin: 0
    }
  }, e.school), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "0.6875rem",
      color: "var(--text-meta)",
      letterSpacing: "var(--tracking-mono)"
    }
  }, e.meta)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.9375rem",
      color: "var(--accent)",
      margin: "6px 0 0"
    }
  }, e.degree), full ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.875rem",
      color: "var(--text-secondary)",
      lineHeight: 1.55,
      margin: "12px 0 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)"
    }
  }, "Relevant coursework \u2014 "), e.courses) : null);
}
function EducationPreview() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "education"
  }, /*#__PURE__*/React.createElement(PreviewHeader, {
    index: "02",
    eyebrow: "Education",
    title: "Studying AI at Duke.",
    more: "education.html",
    moreLabel: "All education"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-5)"
    },
    className: "two-col"
  }, DD.education.map(e => /*#__PURE__*/React.createElement(EduCard, {
    key: e.school,
    e: e
  }))));
}
function EducationFull() {
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, DD.education.map(e => /*#__PURE__*/React.createElement(EduCard, {
    key: e.school,
    e: e,
    full: true
  }))));
}

/* ============================= Experience ============================== */
function CompanyMark({
  name,
  logo
}) {
  if (logo) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        flex: "none",
        width: 48,
        height: 48,
        borderRadius: "var(--radius-md)",
        background: "#fff",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 7,
        border: "1px solid var(--border-default)",
        boxShadow: "var(--shadow-sm)"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: logo,
      alt: name + " logo",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
        display: "block"
      }
    }));
  }
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      width: 48,
      height: 48,
      borderRadius: "var(--radius-md)",
      background: "var(--accent-tint)",
      border: "1px solid var(--line-accent)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-mono)",
      fontWeight: 600,
      fontSize: "0.9375rem",
      color: "var(--accent)"
    }
  }, initials);
}
function ExpHeader({
  x
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(CompanyMark, {
    name: x.company,
    logo: x.logo
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "1.5rem",
      color: "var(--text-heading)",
      margin: 0,
      lineHeight: 1.15
    }
  }, x.company), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "1rem",
      color: "var(--accent)",
      margin: "4px 0 0"
    }
  }, x.role))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "0.75rem",
      letterSpacing: "var(--tracking-mono)",
      color: "var(--text-meta)",
      whiteSpace: "nowrap"
    }
  }, x.period));
}
function ExpCard({
  x,
  defaultOpen
}) {
  const [open, setOpen] = React.useState(!!defaultOpen);
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: "var(--surface-card)",
      border: "1px solid " + (h ? "var(--line-accent)" : "var(--border-subtle)"),
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-card)",
      padding: "var(--space-6)",
      transition: "border-color var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement(ExpHeader, {
    x: x
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.9375rem",
      color: "var(--text-secondary)",
      lineHeight: 1.55,
      margin: "var(--space-4) 0 0"
    }
  }, x.summary), /*#__PURE__*/React.createElement("div", {
    style: {
      display: open ? "block" : "none"
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: "var(--space-4) 0 0",
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, x.bullets.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: 12,
      fontFamily: "var(--font-sans)",
      fontSize: "0.875rem",
      color: "var(--text-body)",
      lineHeight: 1.55
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)",
      fontFamily: "var(--font-mono)",
      flex: "none",
      marginTop: 1
    },
    "aria-hidden": true
  }, "\u203A"), /*#__PURE__*/React.createElement("span", null, b))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6,
      marginTop: "var(--space-5)",
      paddingTop: "var(--space-4)",
      borderTop: "1px solid var(--border-subtle)",
      alignItems: "center"
    }
  }, x.tags.map(t => /*#__PURE__*/React.createElement(Pill, {
    key: t,
    neutral: true
  }, t)), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    style: {
      marginLeft: "auto",
      appearance: "none",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-mono)",
      fontSize: "0.75rem",
      letterSpacing: "var(--tracking-mono)",
      textTransform: "uppercase",
      color: "var(--text-secondary)",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, open ? "Show less" : "Show more", /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      transform: open ? "rotate(180deg)" : "none",
      transition: "transform var(--dur-base)"
    }
  }, "\u25BE"))));
}
// Compact row for the home preview — header + summary only, links to the page
function ExpRow({
  x
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "experience.html",
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "block",
      textDecoration: "none",
      background: "var(--surface-card)",
      border: "1px solid " + (h ? "var(--line-accent)" : "var(--border-subtle)"),
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-5)",
      transition: "border-color var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement(ExpHeader, {
    x: x
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.9375rem",
      color: "var(--text-secondary)",
      lineHeight: 1.55,
      margin: "var(--space-4) 0 0"
    }
  }, x.summary));
}
function ExperiencePreview() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "experience"
  }, /*#__PURE__*/React.createElement(PreviewHeader, {
    index: "03",
    eyebrow: "Experience",
    title: "Where I've shipped.",
    more: "experience.html",
    moreLabel: "All experience"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, DD.experience.slice(0, 2).map(x => /*#__PURE__*/React.createElement(ExpRow, {
    key: x.company,
    x: x
  }))));
}
function ExperienceFull() {
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, DD.experience.map((x, i) => /*#__PURE__*/React.createElement(ExpCard, {
    key: x.company,
    x: x,
    defaultOpen: i === 0
  }))));
}

/* ============================== Projects =============================== */
function ProjCard({
  p
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-card)",
      border: "1px solid " + (h ? "var(--line-accent)" : "var(--border-subtle)"),
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      boxShadow: h ? "var(--shadow-lg)" : "var(--shadow-card)",
      transform: h ? "translateY(-4px)" : "none",
      transition: "all var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "16/10",
      background: "url(" + p.image + ") center/cover no-repeat",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: h ? "rgba(5,6,8,0.35)" : "rgba(5,6,8,0.15)",
      transition: "background var(--dur-base)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-5)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "1.25rem",
      color: "var(--text-heading)",
      margin: 0,
      lineHeight: 1.2
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flex: "none"
    }
  }, p.gitUrl ? /*#__PURE__*/React.createElement(ProjIcon, {
    href: p.gitUrl,
    label: "Source"
  }, /*#__PURE__*/React.createElement(IconCode, null)) : null, p.liveUrl ? /*#__PURE__*/React.createElement(ProjIcon, {
    href: p.liveUrl,
    label: "Live demo"
  }, /*#__PURE__*/React.createElement(IconArrowUpRight, null)) : null)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.875rem",
      color: "var(--text-secondary)",
      lineHeight: 1.55,
      margin: 0
    }
  }, p.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6,
      marginTop: "auto",
      paddingTop: 12
    }
  }, p.stack.map(t => /*#__PURE__*/React.createElement(Pill, {
    key: t
  }, t)))));
}
function ProjIcon({
  href,
  label,
  children
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    "aria-label": label,
    target: "_blank",
    rel: "noopener noreferrer",
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: 18,
      height: 18,
      color: h ? "var(--accent)" : "var(--text-faint)",
      transition: "color var(--dur-base)"
    }
  }, children);
}
function ProjGrid({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
      gap: "var(--space-6)"
    }
  }, items.map(p => /*#__PURE__*/React.createElement(ProjCard, {
    key: p.title,
    p: p
  })));
}
function ProjectsPreview() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "projects"
  }, /*#__PURE__*/React.createElement(PreviewHeader, {
    index: "04",
    eyebrow: "Projects",
    title: "Selected work.",
    more: "projects.html",
    moreLabel: "All projects"
  }), /*#__PURE__*/React.createElement(ProjGrid, {
    items: DD.projects.slice(0, 3)
  }));
}
function ProjectsFull() {
  const filters = ["All", "AI", "NLP", "Web"];
  const [f, setF] = React.useState("All");
  const list = f === "All" ? DD.projects : DD.projects.filter(p => p.tags.includes(f));
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: "var(--space-6)"
    }
  }, filters.map(x => /*#__PURE__*/React.createElement(Pill, {
    key: x,
    interactive: true,
    active: f === x,
    onClick: () => setF(x)
  }, x))), /*#__PURE__*/React.createElement(ProjGrid, {
    items: list
  }));
}

/* =============================== Skills ================================ */
function SkillsSection() {
  const [sel, setSel] = React.useState(DD.skills[1].title);
  const skill = DD.skills.find(s => s.title === sel);
  return /*#__PURE__*/React.createElement(Section, {
    id: "skills"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "05"
  }, "Skills"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(1.75rem,3vw,2.5rem)",
      letterSpacing: "var(--tracking-tight)",
      color: "var(--text-heading)",
      margin: "0 0 var(--space-6)"
    }
  }, "The stack I build with."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,1.1fr)",
      gap: "var(--space-8)",
      alignItems: "start"
    },
    className: "two-col"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, DD.skills.map(s => /*#__PURE__*/React.createElement(Pill, {
    key: s.title,
    interactive: true,
    active: sel === s.title,
    onClick: () => setSel(s.title)
  }, s.title))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-6)",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      minHeight: 160
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "0.6875rem",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      margin: "0 0 14px"
    }
  }, skill.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, skill.items.map(it => /*#__PURE__*/React.createElement(Pill, {
    key: it,
    neutral: true
  }, it))))));
}

/* ============================ Preview header =========================== */
function PreviewHeader({
  index,
  eyebrow,
  title,
  more,
  moreLabel
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 16,
      marginBottom: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    index: index
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(1.75rem,3vw,2.5rem)",
      letterSpacing: "var(--tracking-tight)",
      color: "var(--text-heading)",
      margin: 0
    }
  }, title)), /*#__PURE__*/React.createElement(MoreLink, {
    href: more
  }, moreLabel));
}

/* =============================== Contact =============================== */
function Contact() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "contact",
    style: {
      paddingBottom: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "var(--radius-xl)",
      border: "1px solid var(--line-accent)",
      background: "linear-gradient(160deg, var(--ink-900), var(--ink-950))",
      padding: "clamp(2rem, 6vw, 5rem)",
      overflow: "hidden",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(var(--line) 1px,transparent 1px),linear-gradient(90deg,var(--line) 1px,transparent 1px)",
      backgroundSize: "48px 48px",
      maskImage: "radial-gradient(ellipse 60% 80% at 50% 0%, #000, transparent 70%)",
      WebkitMaskImage: "radial-gradient(ellipse 60% 80% at 50% 0%, #000, transparent 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    center: true
  }, "Contact"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(2rem,5vw,3.5rem)",
      letterSpacing: "var(--tracking-tight)",
      color: "var(--text-heading)",
      margin: "0 0 16px",
      lineHeight: 1.05
    }
  }, "Let's build something dependable."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "1.0625rem",
      color: "var(--text-secondary)",
      maxWidth: "46ch",
      margin: "0 auto var(--space-6)",
      lineHeight: 1.6
    }
  }, "Open to Co-Op and full-time Applied AI / ML roles for Spring 2026. The fastest way to reach me is email."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 14,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    href: "mailto:" + DD.identity.email,
    iconRight: /*#__PURE__*/React.createElement(IconArrowUpRight, null)
  }, DD.identity.email), /*#__PURE__*/React.createElement(Btn, {
    variant: "secondary",
    href: DD.identity.resumeUrl
  }, "View Resume")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      justifyContent: "center",
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(IconChip, {
    href: DD.identity.github,
    label: "GitHub"
  }, /*#__PURE__*/React.createElement(IconGithub, null)), /*#__PURE__*/React.createElement(IconChip, {
    href: DD.identity.linkedin,
    label: "LinkedIn"
  }, /*#__PURE__*/React.createElement(IconLinkedin, null)), /*#__PURE__*/React.createElement(IconChip, {
    href: "mailto:" + DD.identity.email,
    label: "Email"
  }, /*#__PURE__*/React.createElement(IconMail, null))))), /*#__PURE__*/React.createElement("footer", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: 12,
      marginTop: "var(--space-8)",
      fontFamily: "var(--font-mono)",
      fontSize: "0.6875rem",
      letterSpacing: "var(--tracking-mono)",
      color: "var(--text-meta)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 ", DD.identity.name), /*#__PURE__*/React.createElement("span", null, "Built & deployed on Vercel")));
}
Object.assign(window, {
  About,
  EducationPreview,
  EducationFull,
  ExperiencePreview,
  ExperienceFull,
  ProjectsPreview,
  ProjectsFull,
  SkillsSection,
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/shell.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Portfolio UI kit — shell: nav, footer, primitives, page scaffolding.
// Multi-page: nav links route to education.html / experience.html / projects.html.

const D = window.PORTFOLIO;
const NAV = [["Education", "education.html"], ["Experience", "experience.html"], ["Projects", "projects.html"]];

/* ----------------------------- primitives ------------------------------ */
function Eyebrow({
  index,
  children,
  center
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: center ? "center" : "flex-start",
      gap: 10,
      fontFamily: "var(--font-mono)",
      fontSize: "0.75rem",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--accent)",
      margin: "0 0 16px"
    }
  }, index ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)"
    }
  }, index) : null, index ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 1,
      background: "var(--line-accent)"
    }
  }) : null, children);
}
function Pill({
  children,
  neutral,
  interactive,
  active,
  onClick
}) {
  const base = {
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
    transition: "all var(--dur-base) var(--ease-out)"
  };
  const tone = active ? {
    color: "var(--on-accent)",
    background: "var(--accent)",
    borderColor: "var(--accent)"
  } : neutral ? {
    color: "var(--text-secondary)",
    background: "var(--overlay-hover)",
    borderColor: "var(--border-subtle)"
  } : {
    color: "var(--accent)",
    background: "var(--accent-tint)",
    borderColor: "var(--line-accent)"
  };
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      ...base,
      ...tone
    }
  }, children);
}
function Btn({
  children,
  variant = "primary",
  href,
  size = "md",
  iconRight,
  onClick
}) {
  const [h, setH] = React.useState(false);
  const sizes = {
    sm: "8px 16px",
    md: "13px 26px",
    lg: "15px 30px"
  };
  const styles = {
    primary: {
      background: h ? "var(--accent-hover)" : "var(--accent)",
      color: "var(--on-accent)",
      border: "1px solid transparent"
    },
    secondary: {
      background: h ? "var(--overlay-press)" : "var(--overlay-hover)",
      color: "var(--text-strong)",
      border: "1px solid " + (h ? "var(--line-accent)" : "var(--line-strong)")
    },
    ghost: {
      background: "transparent",
      color: h ? "var(--text-strong)" : "var(--text-secondary)",
      border: "1px solid transparent"
    }
  };
  const ext = href && !href.startsWith("#") && !href.endsWith(".html") && !href.startsWith("mailto");
  const props = {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: "0.875rem",
      lineHeight: 1,
      padding: sizes[size],
      borderRadius: "var(--radius-pill)",
      textDecoration: "none",
      cursor: "pointer",
      whiteSpace: "nowrap",
      transition: "all var(--dur-base) var(--ease-out)",
      ...styles[variant]
    }
  };
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: "1em",
      height: "1em",
      display: "inline-flex"
    }
  }, iconRight) : null);
  return href ? /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    target: ext ? "_blank" : undefined,
    rel: "noopener noreferrer"
  }, props), inner) : /*#__PURE__*/React.createElement("button", props, inner);
}
function IconChip({
  children,
  href,
  label
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    "aria-label": label,
    target: "_blank",
    rel: "noopener noreferrer",
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      borderRadius: "var(--radius-md)",
      background: "var(--overlay-hover)",
      border: "1px solid " + (h ? "var(--line-accent)" : "var(--border-default)"),
      color: h ? "var(--accent)" : "var(--text-secondary)",
      transition: "all var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      display: "inline-flex"
    }
  }, children));
}
// "View all →" link used in preview-section headers
function MoreLink({
  href,
  children
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-mono)",
      fontSize: "0.8125rem",
      letterSpacing: "var(--tracking-mono)",
      textTransform: "uppercase",
      color: h ? "var(--accent-hover)" : "var(--accent)",
      textDecoration: "none",
      whiteSpace: "nowrap",
      transition: "color var(--dur-base)"
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 15,
      height: 15,
      display: "inline-flex",
      transform: h ? "translateX(3px)" : "none",
      transition: "transform var(--dur-base)"
    }
  }, /*#__PURE__*/React.createElement(IconArrowRight, null)));
}

/* -------------------------------- Nav ---------------------------------- */
function Nav({
  scrolled,
  active
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 40,
      borderBottom: "1px solid " + (scrolled ? "var(--line)" : "transparent"),
      background: scrolled ? "var(--scrim)" : "transparent",
      backdropFilter: scrolled ? "blur(10px)" : "none",
      transition: "all var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      height: "var(--nav-height)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "1.5rem",
      color: "var(--text-strong)",
      textDecoration: "none",
      letterSpacing: "-0.02em"
    }
  }, D.identity.initials, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 36
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "flex",
      gap: 32,
      listStyle: "none",
      margin: 0,
      padding: 0
    },
    className: "nav-ul"
  }, NAV.map(([t, h]) => /*#__PURE__*/React.createElement("li", {
    key: t
  }, /*#__PURE__*/React.createElement(NavLink, {
    href: h,
    on: active === h
  }, t)))), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 22,
      background: "var(--line-strong)"
    },
    className: "nav-div"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    },
    className: "nav-social"
  }, /*#__PURE__*/React.createElement(IconChip, {
    href: D.identity.github,
    label: "GitHub"
  }, /*#__PURE__*/React.createElement(IconGithub, null)), /*#__PURE__*/React.createElement(IconChip, {
    href: D.identity.linkedin,
    label: "LinkedIn"
  }, /*#__PURE__*/React.createElement(IconLinkedin, null))))));
}
function NavLink({
  href,
  children,
  on
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "0.8125rem",
      letterSpacing: "var(--tracking-mono)",
      color: on ? "var(--accent)" : h ? "var(--text-strong)" : "var(--text-secondary)",
      textDecoration: "none",
      transition: "color var(--dur-base)"
    }
  }, children);
}

/* ------------------------------- layout -------------------------------- */
function Section({
  id,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "var(--space-12) var(--gutter)",
      scrollMarginTop: "var(--nav-height)",
      ...style
    }
  }, children);
}
// Header for a detail page (Education / Experience / Projects)
function PageHero({
  index,
  eyebrow,
  title,
  lead
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "relative",
      paddingTop: "var(--nav-height)",
      overflow: "hidden",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(var(--line) 1px,transparent 1px),linear-gradient(90deg,var(--line) 1px,transparent 1px)",
      backgroundSize: "64px 64px",
      maskImage: "radial-gradient(ellipse 70% 80% at 25% 30%, #000, transparent 75%)",
      WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 25% 30%, #000, transparent 75%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "var(--space-10) var(--gutter) var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-mono)",
      fontSize: "0.75rem",
      letterSpacing: "var(--tracking-mono)",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      textDecoration: "none",
      marginBottom: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      transform: "rotate(180deg)",
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement(IconArrowRight, null)), " Home"), /*#__PURE__*/React.createElement(Eyebrow, {
    index: index
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(2.5rem,6vw,4.5rem)",
      lineHeight: 1,
      letterSpacing: "var(--tracking-tighter)",
      color: "var(--text-heading)",
      margin: 0
    }
  }, title), lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "1.125rem",
      color: "var(--text-secondary)",
      lineHeight: 1.6,
      maxWidth: "54ch",
      margin: "var(--space-5) 0 0"
    }
  }, lead) : null));
}

/* -------------------------------- Hero --------------------------------- */
function Hero() {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setI(x => (x + 1) % D.identity.rotating.length), 2000);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    id: "top",
    style: {
      position: "relative",
      minHeight: "90vh",
      display: "flex",
      alignItems: "center",
      padding: "var(--nav-height) var(--gutter) var(--space-10)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
      backgroundSize: "64px 64px",
      maskImage: "radial-gradient(ellipse 80% 70% at 30% 30%, #000 0%, transparent 75%)",
      WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 30% 30%, #000 0%, transparent 75%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container)",
      margin: "0 auto",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-geometric)",
      fontSize: "1.125rem",
      fontWeight: 600,
      color: "var(--accent)",
      margin: "0 0 22px",
      letterSpacing: "-0.01em"
    }
  }, "Hello \u2014 I'm ", D.identity.name), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(3rem, 9vw, 7rem)",
      lineHeight: 0.92,
      letterSpacing: "var(--tracking-tighter)",
      margin: 0,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-live": "polite",
    style: {
      minHeight: "1em",
      color: "var(--accent)",
      display: "inline-block"
    },
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      animation: "fadeUp 0.5s var(--ease-out)"
    }
  }, D.identity.rotating[i])), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "linear-gradient(to bottom, #fff 0%, #fff 55%, #6B7280 100%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    }
  }, "ENGINEER")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "1.125rem",
      color: "var(--text-secondary)",
      lineHeight: 1.65,
      maxWidth: "44ch",
      margin: "var(--space-6) 0 0"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-body)",
      fontWeight: 600
    }
  }, D.identity.tagline, "."), " ", D.identity.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 14,
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    href: "#contact",
    iconRight: /*#__PURE__*/React.createElement(IconArrowRight, null)
  }, "Hire Me"), /*#__PURE__*/React.createElement(Btn, {
    variant: "secondary",
    href: D.identity.resumeUrl
  }, "View Resume")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      marginTop: "var(--space-8)",
      fontFamily: "var(--font-mono)",
      fontSize: "0.75rem",
      color: "var(--text-meta)",
      letterSpacing: "var(--tracking-mono)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "var(--success)",
      boxShadow: "0 0 8px var(--success)"
    }
  }), "OPEN TO SPRING 2026 ROLES"))));
}
Object.assign(window, {
  Eyebrow,
  Pill,
  Btn,
  IconChip,
  MoreLink,
  Nav,
  Section,
  PageHero,
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ExperienceCard = __ds_scope.ExperienceCard;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconLink = __ds_scope.IconLink;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.TabButton = __ds_scope.TabButton;

__ds_ns.Tag = __ds_scope.Tag;

})();
