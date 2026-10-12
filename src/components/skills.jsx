import Section from "./Section"
import Reveal from "./Reveal"
import { handleGlow } from "../lib/glow"
import { skillGroups } from "../data/site"

function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      label="Skills"
      title="Technologies I work with."
      description="The tools and concepts I reach for when building full-stack applications."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.08}>
            <div
              onMouseMove={handleGlow}
              className="glass-card glow-card h-full rounded-2xl p-6"
            >
              <div className="relative z-10">
                <h3 className="ff-display text-lg font-semibold text-ink mb-5">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export default Skills
