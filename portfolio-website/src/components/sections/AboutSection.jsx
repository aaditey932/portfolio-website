import portfolio from "@/data/portfolio";
import SectionHeading from "@/components/ds/SectionHeading";
import Tag from "@/components/ds/Tag";

const ABOUT_TAGS = ["Applied AI / ML", "Production LLM systems", "Agentic pipelines", "RAG & evaluation"];

export default function AboutSection() {
  return (
    <section id="about" className="block">
      <div className="wrap">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Turning messy data into systems that ship."
        />
        <p className="lead-body">{portfolio.about}</p>
        <div className="tagrow">
          {ABOUT_TAGS.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </section>
  );
}
