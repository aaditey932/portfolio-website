import portfolio from "@/data/portfolio";
import SectionHeading from "@/components/ds/SectionHeading";

const EDU_MARK = {
  "Duke University": "DU",
  "SRM Institute of Science & Technology": "SRM",
};

function eduMark(s) {
  return (
    EDU_MARK[s] ||
    s
      .split(" ")
      .map((w) => w[0])
      .slice(0, 3)
      .join("")
  );
}

function parseEdu(e) {
  const [gpaRaw, dates] = e.meta.split(" · ");
  const [num, den] = gpaRaw.replace(/^GPA\s*/, "").split(" / ");
  return { num, den, dates, courses: e.courses.split(", ") };
}

function EduStatCard({ e }) {
  const p = parseEdu(e);
  return (
    <div className="scard">
      <div className="scard-top">
        <span className="mono-mark">{eduMark(e.school)}</span>
        <div>
          <h3>{e.school}</h3>
          <p className="deg">{e.degree}</p>
        </div>
      </div>
      <div className="gpa">
        <span className="num">{p.num}</span>
        <span className="den">/ {p.den}</span>
      </div>
      <span className="gpa-label">Cumulative GPA</span>
      <p className="meta-date">{p.dates}</p>
      <div className="divider" />
      <p className="cwl">Relevant coursework</p>
      <div className="courses">
        {p.courses.map((c) => (
          <span className="pill" key={c}>
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function EducationSection() {
  return (
    <section id="education" className="block">
      <div className="wrap">
        <SectionHeading index="02" eyebrow="Education" title="AI engineering at Duke." />
        <div className="grid2" style={{ marginTop: "var(--space-8)" }}>
          {portfolio.education.map((e) => (
            <EduStatCard key={e.school} e={e} />
          ))}
        </div>
      </div>
    </section>
  );
}
