"use client";

import { useLayoutEffect, useRef, useState } from "react";
import portfolio from "@/data/portfolio";
import SectionHeading from "@/components/ds/SectionHeading";

function useConnectors(ref) {
  const [state, setState] = useState({ d: "", dots: [] });

  useLayoutEffect(() => {
    const cont = ref.current;
    if (!cont) return;

    const compute = () => {
      if (typeof window === "undefined") return;
      // Skip connector drawing on mobile — the layout stacks vertically.
      if (window.matchMedia("(max-width: 860px)").matches) {
        setState({ d: "", dots: [] });
        return;
      }

      const cb = cont.getBoundingClientRect();
      const root = cont.querySelector('[data-role="root"]');
      const cats = Array.from(cont.querySelectorAll('[data-role="cat"]'));
      if (!root || !cats.length) return;

      const rel = (el) => {
        const b = el.getBoundingClientRect();
        return {
          left: b.left - cb.left,
          top: b.top - cb.top,
          right: b.right - cb.left,
          bottom: b.bottom - cb.top,
          cx: (b.left + b.right) / 2 - cb.left,
          cy: (b.top + b.bottom) / 2 - cb.top,
        };
      };

      const R = rel(root);
      const C = cats.map(rel);
      const segs = [];
      const dots = [];

      // Horizontal bus sits midway between root and the nearest cluster top.
      const minTop = Math.min(...C.map((c) => c.top));
      const busY = R.bottom + Math.max(28, (minTop - R.bottom) / 2);
      segs.push(`M ${R.cx} ${R.bottom} L ${R.cx} ${busY}`);

      const xs = [R.cx, ...C.map((c) => c.cx)];
      segs.push(`M ${Math.min(...xs)} ${busY} L ${Math.max(...xs)} ${busY}`);

      C.forEach((c) => {
        segs.push(`M ${c.cx} ${busY} L ${c.cx} ${c.top}`);
        dots.push([c.cx, c.top]);
      });
      dots.push([R.cx, R.bottom]);

      setState({ d: segs.join(" "), dots });
    };

    compute();

    const ro = new ResizeObserver(compute);
    ro.observe(cont);
    Array.from(cont.querySelectorAll('[data-role="cat"], [data-role="root"]')).forEach((el) =>
      ro.observe(el),
    );
    window.addEventListener("resize", compute);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, [ref]);

  return state;
}

export default function SkillsSection() {
  const mapRef = useRef(null);
  const { d, dots } = useConnectors(mapRef);
  const { root, clusters } = portfolio.skills;

  return (
    <section id="skills" className="block">
      <div className="wrap">
        <SectionHeading
          index="05"
          eyebrow="Skills"
          title="The stack I build AI systems with."
        />

        <div className="skillsMap" ref={mapRef} style={{ marginTop: "var(--space-10)" }}>
          <svg className="skillsConn" aria-hidden="true">
            <path d={d} />
            {dots.map(([x, y], i) => (
              <circle key={i} className="skillsDot" cx={x} cy={y} r="3" />
            ))}
          </svg>

          <div className="skillsRootRow">
            <span className="skillsRoot" data-role="root">
              {root}
            </span>
          </div>

          <div className="skillsClusters">
            {clusters.map((c, i) => (
              <div
                key={c.label}
                className={"skillsCluster" + (i === 1 ? " skillsCluster--mid" : "")}
                data-role="cat"
              >
                <p className="skillsClusterCap">{c.label}</p>
                <div className="skillsPills">
                  {c.items.map((it) => (
                    <span key={it} className="skillPill">
                      {it.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
