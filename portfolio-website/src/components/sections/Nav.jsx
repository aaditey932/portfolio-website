"use client";

import { useEffect, useState } from "react";
import portfolio from "@/data/portfolio";
import IconLink from "@/components/ds/IconLink";
import { GithubGlyph, LinkedinGlyph, MenuGlyph, CloseGlyph } from "./icons";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`topnav${scrolled ? " scrolled" : ""}`}>
      <div className="inner">
        <a href="#top" className="brand">
          {portfolio.identity.initials}
          <span style={{ color: "var(--accent)" }}>.</span>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <ul className="navlinks">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
          <span
            className="nav-divider"
            style={{ width: 1, height: 22, background: "var(--line-strong)", display: "inline-block" }}
            aria-hidden
          />
          <div style={{ display: "flex", gap: 12 }}>
            <IconLink href={portfolio.identity.github} label="GitHub">
              <GithubGlyph />
            </IconLink>
            <IconLink href={portfolio.identity.linkedin} label="LinkedIn">
              <LinkedinGlyph />
            </IconLink>
          </div>
        </div>

        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseGlyph /> : <MenuGlyph />}
        </button>
      </div>

      <div className={`nav-mobile-panel${open ? " open" : ""}`} role="menu">
        <ul>
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
