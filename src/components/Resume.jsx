import { Link } from "react-router-dom"
import Section from "./Section"
import Reveal from "./Reveal"

function Resume() {
  return (
    <Section id="resume" index="04" label="Resume" title="The full picture."
      description="My skills, selected projects and education — together in one place.">
      <Reveal>
        <div className="glass-card rounded-2xl p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6 max-w-3xl">
          <div>
            <h3 className="text-xl">A closer look at my background.</h3>
            <p className="text-muted mt-2">Read online or save a copy as a PDF.</p>
          </div>
          <Link to="/resume" className="btn btn-primary shrink-0">View resume ↗</Link>
        </div>
      </Reveal>
    </Section>
  )
}

export default Resume
