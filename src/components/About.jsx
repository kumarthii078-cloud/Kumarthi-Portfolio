import { motion } from "framer-motion"
import Section from "./Section"
import Reveal from "./Reveal"
import { handleGlow } from "../lib/glow"

const focus = [
  {
    sym: "</>",
    title: "Full-stack development",
    desc: "Building complete web applications, front to back.",
  },
  {
    sym: "{ }",
    title: "Java · Spring Boot",
    desc: "Backend services, REST APIs and MVC architecture.",
  },
  {
    sym: "⚡",
    title: "DSA & problem solving",
    desc: "Turning problems into clean, efficient code.",
  },
]

function About() {
  return (
    <Section
      id="about"
      index="01"
      label="About"
      title="Building software with a problem-solving mindset."
      description="Computer Science and Engineering student with hands-on experience in Java, Spring Boot, React and SQL — focused on full-stack web development."
    >
      <div className="grid lg:grid-cols-[1.25fr_0.9fr] gap-10 lg:gap-14 items-start">
        <Reveal delay={0.05}>
          <div className="space-y-5 text-lg leading-relaxed text-soft">
            <p>
              I'm V Kumarthi, a Java full stack web developer. I have a strong
              grounding in Data Structures &amp; Algorithms, Object-Oriented
              Programming and database design — and I enjoy turning that into
              software people actually use.
            </p>
            <p>
              I'm building a software developer's problem-solving mindset, one
              project at a time, and I'm looking to contribute to scalable,
              efficient and user-focused applications.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              {["Java", "Spring Boot", "React", "MySQL", "REST APIs"].map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            onMouseMove={handleGlow}
            className="glass-card glow-card rounded-2xl p-7"
          >
            <div className="relative z-10">
              <p className="ff-mono text-xs uppercase tracking-[0.2em] text-muted mb-6">
                Current focus
              </p>

              <div className="space-y-5">
                {focus.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ff-mono text-sm border border-accent/30 bg-accent/10 text-accent">
                      {item.sym}
                    </div>
                    <div>
                      <h3 className="font-medium text-ink">{item.title}</h3>
                      <p className="text-sm text-muted mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 pt-5 divider-t flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="ff-mono text-xs text-muted">
                  Currently learning &amp; building
                </span>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </Section>
  )
}

export default About
