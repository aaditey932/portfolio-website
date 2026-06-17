import portfolio from "@/data/portfolio";
import SectionHeading from "@/components/ds/SectionHeading";
import ExperienceCard from "@/components/ds/ExperienceCard";

export default function ExperienceSection() {
  return (
    <section id="experience" className="block">
      <div className="wrap">
        <SectionHeading index="03" eyebrow="Experience" title="Where I've shipped." />
        <div className="stack" style={{ marginTop: "var(--space-8)" }}>
          {portfolio.experience.map((x) => (
            <ExperienceCard
              key={x.company}
              company={x.company}
              role={x.role}
              period={x.period}
              logo={x.logo}
              summary={x.summary}
              bullets={x.bullets}
              tags={x.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
