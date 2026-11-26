import { Compass, Lightbulb, Target } from 'lucide-react'
import { SectionHeading } from './section-heading'

const highlights = [
  { title: 'Academic foundation', text: 'CSE undergraduate at Northern University Bangladesh.', Icon: Compass },
  { title: 'Areas of interest', text: 'Artificial Intelligence, Machine Learning, Data Science, and Explainable AI.', Icon: Lightbulb },
  { title: 'Career direction', text: 'Aspiring to become an AI/ML Researcher and Machine Learning Engineer.', Icon: Target },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading index="01 / About" title="Curious about intelligent technology" subtitle="I am interested in predictive modeling, Explainable AI, and data-driven problem solving. I am also keen to explore emerging areas such as Deep Learning, LLMs, and NLP as I continue to build my academic foundation." />
      <div className="grid gap-5 md:grid-cols-3">
        {highlights.map(({ title, text, Icon }) => (
          <article key={title} className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-cyan/35">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyan/25 bg-cyan/10 text-cyan"><Icon size={20} /></span>
            <h3 className="mt-4 font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
