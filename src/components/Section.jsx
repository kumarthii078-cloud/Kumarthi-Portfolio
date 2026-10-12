import Reveal from "./Reveal"

/**
 * Reusable section shell for the Engineered Glass layout.
 * Renders the mono eyebrow ("01 / ABOUT"), the display title,
 * an optional description, the spine node dot, and the body.
 *
 *   <Section id="about" index="01" label="About" title="…" description="…">
 *     …content…
 *   </Section>
 */
function Section({ id, index, label, title, description, children }) {
  return (
    <section id={id} className="section">
      <div className="section-inner">
        <Reveal>
          <header className="section-head">
            <p className="section-eyebrow">
              {index}
              <span className="sep">/</span>
              {label}
            </p>
            <h2 className="section-title">{title}</h2>
            {description ? <p className="section-desc">{description}</p> : null}
          </header>
        </Reveal>

        {children}
      </div>
    </section>
  )
}

export default Section
