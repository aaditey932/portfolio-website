"use client";

import Card from "./Card";
import Tag from "./Tag";

const CodeGlyph = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: "100%", height: "100%" }}
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const ArrowGlyph = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: "100%", height: "100%" }}
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export default function ProjectCard({ title, description, image, tags = [], gitUrl, liveUrl }) {
  return (
    <Card
      interactive
      padding="0"
      style={{ overflow: "hidden", display: "flex", flexDirection: "column", height: "100%" }}
    >
      <div
        style={{
          position: "relative",
          aspectRatio: "16 / 10",
          background: image
            ? `url(${image}) center / cover no-repeat`
            : "linear-gradient(135deg, var(--ink-800), var(--ink-900))",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        {!image && (
          <span
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "var(--tracking-caps)",
              textTransform: "uppercase",
              color: "var(--text-faint)",
            }}
          >
            {"</>"}&nbsp; no preview
          </span>
        )}
      </div>
      <div
        style={{
          padding: "var(--space-5)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-3)",
          flex: 1,
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "var(--text-xl)",
              color: "var(--text-heading)",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            {title}
          </h3>
          <div style={{ display: "flex", gap: 10, flex: "none", color: "var(--text-faint)" }}>
            {gitUrl && (
              <a
                href={gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Source on GitHub"
                style={{ width: 18, height: 18, color: "inherit", transition: "color var(--dur-base)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-faint)";
                }}
              >
                <CodeGlyph />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live demo"
                style={{ width: 18, height: 18, color: "inherit", transition: "color var(--dur-base)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-faint)";
                }}
              >
                <ArrowGlyph />
              </a>
            )}
          </div>
        </div>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-sm)",
            color: "var(--text-secondary)",
            lineHeight: "var(--leading-normal)",
            margin: 0,
          }}
        >
          {description}
        </p>
        {tags.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
              marginTop: "auto",
              paddingTop: "var(--space-3)",
            }}
          >
            {tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
