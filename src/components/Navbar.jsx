import { Link } from "react-router-dom"
import { useState } from "react"
import { site } from "../data/site"

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Resume", href: "/resume" },
  { name: "Education", href: "/#education" },
  { name: "Contact", href: "/#contact" },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass divider-b">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-accent text-accent-ink ff-display font-bold shadow-[0_6px_16px_rgba(250,204,21,0.3)]">
            {site.initial}
          </span>
          <span className="ff-mono text-sm text-soft">
            {site.shortName}
            <span className="text-accent">.dev</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-6 ff-mono text-sm text-muted">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a href="/#contact" className="btn btn-primary btn-sm">Let's talk</a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl text-soft"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden glass divider-t">
          <div className="px-6 py-5 flex flex-col gap-4 ff-mono text-sm text-soft">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="btn btn-primary mt-1"
            >
              Let's talk
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
