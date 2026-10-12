// Sets --mx / --my on the hovered card so `.glow-card::before`
// can render a soft yellow light that follows the cursor.
export function handleGlow(event) {
  const el = event.currentTarget
  const rect = el.getBoundingClientRect()
  el.style.setProperty("--mx", `${event.clientX - rect.left}px`)
  el.style.setProperty("--my", `${event.clientY - rect.top}px`)
}
