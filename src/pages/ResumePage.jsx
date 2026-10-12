import { useEffect } from "react"
import { Link } from "react-router-dom"
import { site, education, skillGroups, projects } from "../data/site"
import "./resume.css"

function ResumePage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = `${site.name} — Resume`
    window.scrollTo(0, 0)
    return () => { document.title = previousTitle }
  }, [])

  return (
    <main className="resume-page min-h-screen px-4 sm:px-6 pt-28 pb-20">
      <div className="resume-toolbar max-w-4xl mx-auto mb-8 flex flex-wrap items-center justify-between gap-5">
        <div>
          <Link to="/" className="ff-mono text-sm text-muted hover:text-accent">← Back to portfolio</Link>
          <p className="text-soft mt-3 text-sm">Experience, skills and selected work.</p>
        </div>
        <button type="button" onClick={() => window.print()} className="btn btn-primary">Print / Save as PDF ↗</button>
      </div>
      <article className="resume-sheet max-w-4xl mx-auto" aria-label={`${site.name}'s resume`}>
        <header className="resume-header">
          <p className="resume-kicker">RESUME</p>
          <h1>{site.name}</h1>
          <p className="resume-role">{site.role}</p>
          <div className="resume-contact">
            <span>{site.location}</span>
            {site.email && <a href={`mailto:${site.email}`}>{site.email}</a>}
            {site.github && <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
            {site.linkedin && <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>}
          </div>
        </header>
        <section className="resume-section" aria-labelledby="resume-profile">
          <h2 id="resume-profile">Profile</h2>
          <p>{site.summary}</p>
        </section>
        <section className="resume-section" aria-labelledby="resume-skills">
          <h2 id="resume-skills">Technical skills</h2>
          <dl className="resume-skills">
            {skillGroups.map((group) => (
              <div key={group.title}><dt>{group.title}</dt><dd>{group.skills.join(" · ")}</dd></div>
            ))}
          </dl>
        </section>
        <section className="resume-section" aria-labelledby="resume-projects">
          <h2 id="resume-projects">Selected projects</h2>
          {projects.map((project) => (
            <div key={project.slug} className="resume-project">
              <h3>{project.title}</h3>
              <p className="resume-tech">{project.technologies.join(" · ")}</p>
              <p>{project.description}</p>
              <ul>{project.features.slice(0, 2).map((feature) => <li key={feature}>{feature}</li>)}</ul>
              {(project.github || project.live) && (
                <div className="resume-project-links">
                  {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">Source code ↗</a>}
                  {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">Live demo ↗</a>}
                </div>
              )}
            </div>
          ))}
        </section>
        <section className="resume-section" aria-labelledby="resume-education">
          <h2 id="resume-education">Education</h2>
          <h3>{education.degree}</h3>
          <p>{education.college}</p>
          <p>{education.place} · CGPA {education.cgpa}/10</p>
        </section>
      </article>
    </main>
  )
}

export default ResumePage
