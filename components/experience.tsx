import { UsersRound, UserRound } from 'lucide-react'
import { SectionHeading } from './section-heading'

const contributions = [
  {
    project: 'AI Finance Copilot (FinMatrix)',
    role: 'Team Leader',
    description: 'Led project-related team activities and collaboration on an AI-powered financial decision-support solution for SMEs.',
    Icon: UsersRound,
  },
  {
    project: 'Credit Risk Scoring System',
    role: 'Independent Project Developer',
    description: 'Developed an independent end-to-end machine learning project focused on credit risk scoring, predictive modeling, and model explainability.',
    Icon: UserRound,
  },
]

export function Experience() {
  return (
    <section id="leadership" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading index="03 / Contributions" title="Leadership & Project Contributions" subtitle="Project roles and contributions, rather than employment history." />
      <div className="grid gap-5 md:grid-cols-2">
        {contributions.map(({ project, role, description, Icon }) => (
          <article key={project} className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-cyan/35 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-cyan/25 bg-cyan/10 text-cyan"><Icon size={20} /></span>
              <div><p className="font-mono text-xs text-cyan">{role}</p><h3 className="mt-1 text-lg font-semibold">{project}</h3></div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
