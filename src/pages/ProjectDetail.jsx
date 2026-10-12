import { Link, useParams } from "react-router-dom"
import Reveal from "../components/Reveal"
import { projects } from "../data/site"

const eyebrow = "ff-mono text-xs tracking-[0.22em] uppercase text-accent mb-4"
const body = "max-w-3xl text-soft leading-relaxed whitespace-pre-line"

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <main className="min-h-screen pt-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="ff-mono text-sm text-red-400 mb-6">Project not found.</p>
          <Link to="/projects" className="ff-mono text-sm text-muted hover:text-accent transition-colors">
            ← Back to projects
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <Link to="/projects" className="inline-block mb-10 ff-mono text-sm text-muted hover:text-accent transition-colors">
            ← Back to projects
          </Link>
        </Reveal>

        <Reveal>
          <div className="mb-14">
            <p className={eyebrow}>Project</p>
            <h1 className="ff-display text-4xl md:text-6xl font-semibold tracking-tight mb-6">
              {project.title}
            </h1>
            <p className="max-w-3xl text-lg text-muted leading-relaxed">{project.description}</p>
          </div>
        </Reveal>

        {project.problem && (
          <Reveal>
            <section className="mb-12">
              <p className={eyebrow}>Problem</p>
              <p className={body}>{project.problem}</p>
            </section>
          </Reveal>
        )}

        {project.solution && (
          <Reveal delay={0.05}>
            <section className="mb-12">
              <p className={eyebrow}>Solution</p>
              <p className={body}>{project.solution}</p>
            </section>
          </Reveal>
        )}

        {project.features?.length > 0 && (
          <Reveal delay={0.1}>
            <section className="mb-12">
              <p className={eyebrow}>Key features</p>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature) => (
                  <div key={feature} className="glass-card rounded-xl p-5">
                    <p className="text-soft leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
        )}

        {project.technologies?.length > 0 && (
          <Reveal delay={0.15}>
            <section className="mb-12">
              <p className={eyebrow}>Technologies</p>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </section>
          </Reveal>
        )}

        {project.challenges && (
          <Reveal delay={0.2}>
            <section className="mb-12">
              <p className={eyebrow}>Challenges</p>
              <p className={body}>{project.challenges}</p>
            </section>
          </Reveal>
        )}

        {project.learning && (
          <Reveal delay={0.25}>
            <section className="mb-12">
              <p className={eyebrow}>What I learned</p>
              <p className={body}>{project.learning}</p>
            </section>
          </Reveal>
        )}

        {(project.github || project.live) && (
          <Reveal delay={0.3}>
            <div className="pt-8 divider-t flex flex-wrap gap-4">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  View on GitHub ↗
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-glass">
                  Live demo ↗
                </a>
              )}
            </div>
          </Reveal>
        )}
      </div>
    </main>
  )
}

export default ProjectDetail
