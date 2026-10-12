import { site } from "../data/site"

function Footer() {
  return (
    <footer className="divider-t py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="ff-mono text-sm text-muted">© 2026 {site.name}</p>
        <p className="ff-mono text-xs text-muted">
          Built with React · Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

export default Footer
