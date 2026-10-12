import { projects } from "../data/site"

// Compatibility helpers: project content is maintained directly in site.js.
export async function fetchProjects() {
  return projects
}

export async function fetchProject(slug) {
  return projects.find((project) => project.slug === slug) ?? null
}
