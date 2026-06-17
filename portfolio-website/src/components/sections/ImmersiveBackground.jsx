"use client";

import { useEffect, useRef } from "react";

const REVEAL_LINGER = { dist: 1.6, scale: 0.04, drift: 0.06 };

export default function ImmersiveBackground({ src = "/images/hero/heroImage.jpg" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let ticking = false;

    const update = () => {
      const h = window.innerHeight;
      const t = Math.min(1, window.scrollY / (h * REVEAL_LINGER.dist));
      const eased = t * t * (3 - 2 * t);
      el.style.opacity = String(1 - eased);
      if (!reduce) {
        let tf = `scale(${1 + eased * REVEAL_LINGER.scale})`;
        if (REVEAL_LINGER.drift) {
          tf += ` translateY(${window.scrollY * REVEAL_LINGER.drift}px)`;
        }
        el.style.transform = tf;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} className="bg-immersive" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="photo" src={src} alt="" aria-hidden="true" />
      <div className="tint" />
      <div className="grid" />
      <div className="film-h" />
      <div className="film-v" />
    </div>
  );
}
