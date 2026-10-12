import { Link } from "react-router-dom"
import Section from "./Section"
import Reveal from "./Reveal"
import { handleGlow } from "../lib/glow"
import { projects } from "../data/site"

function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      label="Projects"
      title="Things I've built."
      description="A selection of full-stack projects — each one a chance to learn something new."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.1}>
            <Link
              to={`/projects/${project.slug}`}
              onMouseMove={handleGlow}
              className="glass-card glow-card group block h-full rounded-2xl p-6"
            >
              <div className="relative z-10 flex h-full flex-col">
                <h3 className="ff-display text-xl font-semibold text-ink mb-3">
                  {project.title}
                </h3>

                <p className="text-muted leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="tag">
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-auto ff-mono text-sm text-accent">
                  View project →
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export default Projects
