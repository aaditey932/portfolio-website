import portfolio from "@/data/portfolio";
import SectionHeading from "@/components/ds/SectionHeading";
import Card from "@/components/ds/Card";
import Button from "@/components/ds/Button";
import { ArrowRight } from "./icons";

export default function ContactSection() {
  return (
    <section id="contact" className="block" style={{ paddingBottom: 128 }}>
      <div className="wrap">
        <Card style={{ padding: "clamp(2rem, 6vw, 5rem)", textAlign: "center", borderColor: "var(--line-accent)" }}>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something dependable."
            align="center"
          />
          <p
            className="lead-body"
            style={{ margin: "var(--space-5) auto 0", textAlign: "center" }}
          >
            {portfolio.identity.availabilityDetail}
          </p>
          <div className="ctarow" style={{ justifyContent: "center" }}>
            <Button
              variant="primary"
              href={`mailto:${portfolio.identity.email}`}
              iconRight={<ArrowRight />}
            >
              {portfolio.identity.email}
            </Button>
            <Button variant="secondary" href={portfolio.identity.resumeUrl}>
              View Resume
            </Button>
          </div>
        </Card>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 12,
            marginTop: "var(--space-8)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.6875rem",
            letterSpacing: "var(--tracking-mono)",
            color: "var(--text-meta)",
          }}
        >
          <span>© 2026 {portfolio.identity.name}</span>
          <span>Built with Next.js</span>
        </div>
      </div>
    </section>
  );
}
