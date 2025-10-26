export default function DesignSystems(){
  return (
    <main className="container">
      <h1>Design systems for small teams</h1>
      <p className="meta">Published Oct 2025 — Practical guidance</p>

      <p>Design systems bring consistency and speed, but they also introduce maintenance overhead. For small teams the question isn't whether a design system is valuable — it's whether the team can sustain it.</p>

      <h3>Start small</h3>
      <p>Begin with a short inventory: the few components that appear everywhere (buttons, inputs, colors, spacing scale). Standardize those first. Ship a lightweight package or component library that developers can opt into.</p>

      <h3>Protect developer time</h3>
      <p>Assign a single owner or rotate ownership on a predictable cadence. Keep PRs small and reviewable. Automate releases where possible and document upgrade paths.</p>

      <h3>Measure value</h3>
      <p>Track metrics like time to implement common UI, number of visual regressions, and the fraction of UI changes that require cross-team coordination. Use those signals to prioritize where the system should grow.</p>

      <p>These are pragmatic steps that help teams get the benefits of a design system without creating an ongoing drain on product velocity.</p>
    </main>
  )
}
