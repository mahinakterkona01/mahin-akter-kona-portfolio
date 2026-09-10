import { Code2, BrainCircuit, Wrench } from 'lucide-react'
import { SectionHeading } from './section-heading'

const groups = [
  {
    title: 'Programming Languages',
    Icon: Code2,
    skills: ['Python', 'C++', 'Java', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'AI/ML & Data Science',
    Icon: BrainCircuit,
    skills: ['Machine Learning', 'Data Analysis', 'SHAP', 'LIME', 'Scikit-Learn', 'Pandas', 'NumPy'],
  },
  {
    title: 'Tools & Concepts',
    Icon: Wrench,
    skills: ['OOP', 'REST APIs', 'Git', 'GitHub', 'VS Code'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading index="06 / Skills" title="Technical Skills" />

      <div className="grid gap-6 md:grid-cols-3">
        {groups.map(({ title, Icon, skills }) => (
          <div
            key={title}
            className="rounded-xl border border-border bg-card p-6 transition-all hover:border-indigo/40"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-indigo/30 bg-indigo/10 text-indigo">
                <Icon size={18} />
              </span>
              <h3 className="font-semibold">{title}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="rounded-lg border border-border bg-muted px-3 py-1.5 text-sm text-foreground transition-colors hover:border-cyan/40 hover:text-cyan"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
