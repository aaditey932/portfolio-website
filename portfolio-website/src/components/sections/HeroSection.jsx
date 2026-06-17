"use client";

import { useEffect, useState } from "react";
import portfolio from "@/data/portfolio";
import Button from "@/components/ds/Button";
import Badge from "@/components/ds/Badge";
import { ArrowRight } from "./icons";

const ROTATE_MS = 2000;

export default function HeroSection() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => {
      setI((x) => (x + 1) % portfolio.identity.rotating.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <header id="top" className="hero">
      <div className="wrap" style={{ width: "100%" }}>
        <p className="greet">
          <span className="slash">{"//"}</span>
          Hello — I&apos;m {portfolio.identity.name}
        </p>
        <h1>
          <span className="rot" key={i} aria-live="polite" aria-atomic="true">
            <span style={{ display: "inline-block", animation: "fadeUp 0.5s var(--ease-out)" }}>
              {portfolio.identity.rotating[i]}
            </span>
          </span>
          <span className="clip">ENGINEER</span>
        </h1>
        <p className="lead">
          <strong>{portfolio.identity.tagline}.</strong> {portfolio.identity.blurb}
        </p>
        <div className="ctarow">
          <Button variant="primary" href="#contact" iconRight={<ArrowRight />}>
            Hire Me
          </Button>
          <Button variant="secondary" href={portfolio.identity.resumeUrl}>
            View Resume
          </Button>
          <Badge tone="success" dot>
            Open to Spring 2026
          </Badge>
        </div>
      </div>
      <div className="scrollhint" aria-hidden>
        <span>SCROLL</span>
        <span className="arrow">↓</span>
      </div>
    </header>
  );
}
