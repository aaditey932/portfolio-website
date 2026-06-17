"use client";

import Card from "./Card";
import Tag from "./Tag";

export default function ExperienceCard({ company, role, period, logo, summary, bullets = [], tags = [] }) {
  const initials = company
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const mark = logo ? (
    <span
      style={{
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
        boxShadow: "var(--shadow-sm)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo}
        alt={`${company} logo`}
        style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
      />
    </span>
  ) : (
    <span
      style={{
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
        color: "var(--accent)",
      }}
    >
      {initials}
    </span>
  );

  return (
    <Card interactive padding="var(--space-6)">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {mark}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "var(--text-2xl)",
                color: "var(--text-heading)",
                margin: 0,
                lineHeight: 1.15,
              }}
            >
              {company}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-base)",
                color: "var(--accent)",
                margin: "4px 0 0",
              }}
            >
              {role}
            </p>
          </div>
        </div>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-xs)",
            letterSpacing: "var(--tracking-mono)",
            color: "var(--text-meta)",
            whiteSpace: "nowrap",
          }}
        >
          {period}
        </span>
      </div>

      {summary && (
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-sm)",
            color: "var(--text-secondary)",
            lineHeight: "var(--leading-normal)",
            margin: "var(--space-4) 0 0",
          }}
        >
          {summary}
        </p>
      )}

      {bullets.length > 0 && (
        <ul
          style={{
            listStyle: "none",
            margin: "var(--space-4) 0 0",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {bullets.map((b, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                gap: 12,
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-sm)",
                color: "var(--text-body)",
                lineHeight: "var(--leading-normal)",
              }}
            >
              <span
                aria-hidden
                style={{
                  color: "var(--accent)",
                  fontFamily: "var(--font-mono)",
                  flex: "none",
                  marginTop: 1,
                }}
              >
                {"\u203A"}
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      {tags.length > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            marginTop: "var(--space-5)",
            paddingTop: "var(--space-4)",
            borderTop: "1px solid var(--border-subtle)",
          }}
        >
          {tags.map((t) => (
            <Tag key={t} tone="neutral">
              {t}
            </Tag>
          ))}
        </div>
      )}
    </Card>
  );
}
