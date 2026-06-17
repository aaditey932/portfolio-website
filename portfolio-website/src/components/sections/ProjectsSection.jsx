"use client";

import { useState } from "react";
import portfolio from "@/data/portfolio";
import SectionHeading from "@/components/ds/SectionHeading";
import TabButton from "@/components/ds/TabButton";
import ProjectCard from "@/components/ds/ProjectCard";

const FILTERS = ["All", "AI", "NLP", "Web"];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const list =
    filter === "All"
      ? portfolio.projects
      : portfolio.projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="block">
      <div className="wrap">
        <SectionHeading index="04" eyebrow="Projects" title="Selected work." />
        <div className="filterrow">
          {FILTERS.map((f) => (
            <TabButton key={f} active={filter === f} onClick={() => setFilter(f)}>
              {f}
            </TabButton>
          ))}
        </div>
        <div className="grid3">
          {list.map((p) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              description={p.blurb}
              image={p.image}
              tags={p.stack}
              gitUrl={p.gitUrl}
              liveUrl={p.liveUrl || undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
