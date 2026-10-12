import Section from "./Section"
import Reveal from "./Reveal"
import { handleGlow } from "../lib/glow"
import { education } from "../data/site"

function Education() {
  return (
    <Section
      id="education"
      index="05"
      label="Education"
      title="Academic background."
    >
      <Reveal delay={0.05}>
        <div
          onMouseMove={handleGlow}
          className="glass-card glow-card max-w-3xl rounded-2xl p-7 md:p-8"
        >
          <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <h3 className="ff-display text-xl font-semibold text-ink">
                {education.degree}
              </h3>
              <p className="text-soft mt-2">{education.college}</p>
              <p className="text-sm text-muted mt-1">{education.place}</p>
            </div>

            <div className="md:text-right">
              <p className="ff-mono text-xs tracking-[0.2em] text-muted">
                CURRENT CGPA
              </p>
              <p className="ff-display text-3xl font-semibold text-accent mt-1">
                {education.cgpa}
                <span className="text-base font-normal text-muted">/10</span>
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

export default Education
