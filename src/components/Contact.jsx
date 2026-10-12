import Section from "./Section"
import Reveal from "./Reveal"
import { site } from "../data/site"

function Contact() {
  return (
    <Section id="contact" index="06" label="Contact" title="Let's build something useful."
      description="Have a project idea, an opportunity, or just want to connect?">
      <Reveal>
        <div className="glass-card max-w-3xl rounded-2xl p-7">
          <p className="text-muted mb-5">{site.location}</p>
          {site.email ? (
            <>
              <a href={`mailto:${site.email}?subject=${encodeURIComponent("Portfolio enquiry")}`} className="btn btn-primary">Email me ↗</a>
              <p className="text-soft mt-4 break-all">{site.email}</p>
              <p className="text-muted text-sm mt-2">Opens a draft in your email app.</p>
            </>
          ) : <p className="text-soft">Contact details will be added soon.</p>}
          <div className="flex flex-wrap gap-6 mt-5 ff-mono text-sm">
            {site.linkedin && <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">LinkedIn ↗</a>}
            {site.github && <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent">GitHub ↗</a>}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

export default Contact
