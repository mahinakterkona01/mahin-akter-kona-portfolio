import { Code2, BrainCircuit, Database, Wrench, Sparkles } from 'lucide-react'
import { SectionHeading } from './section-heading'

const groups = [
  { title: 'Programming', Icon: Code2, skills: ['Python', 'C++', 'Java', 'JavaScript', 'HTML5', 'CSS3'] },
  { title: 'Machine Learning & Explainable AI', Icon: BrainCircuit, skills: ['Machine Learning', 'Scikit-learn', 'Explainable AI', 'SHAP', 'LIME'] },
  { title: 'Data Science', Icon: Database, skills: ['Data Analysis', 'Pandas', 'NumPy'] },
  { title: 'AI Technologies', Icon: Sparkles, skills: ['OpenAI'] },
  { title: 'Development Tools', Icon: Wrench, skills: ['Git', 'GitHub', 'VS Code'] },
  { title: 'Learning Interests', Icon: BrainCircuit, skills: ['Deep Learning', 'Large Language Models (LLMs)', 'Natural Language Processing (NLP)'] },
]

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading index="04 / Skills" title="Technical Skills" subtitle="A growing toolkit across programming, data, and AI technologies. Learning interests are identified separately." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ title, Icon, skills }) => (
          <article key={title} className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-cyan/30">
            <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan/25 bg-cyan/10 text-cyan"><Icon size={18} /></span><h3 className="font-semibold">{title}</h3></div>
            <div className="mt-5 flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="rounded-lg border border-border bg-muted px-3 py-1.5 text-sm text-foreground">{skill}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  )
}
