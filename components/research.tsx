import { Brain, Eye, TrendingUp, Database, Sparkles, MessageSquareText, ScanSearch, Activity, Compass } from 'lucide-react'
import { SectionHeading } from './section-heading'

const interests = [
  { title: 'Artificial Intelligence', Icon: Sparkles },
  { title: 'Machine Learning', Icon: Brain },
  { title: 'Data Science', Icon: Database },
  { title: 'Explainable AI (XAI)', Icon: Eye },
  { title: 'SHAP and LIME', Icon: ScanSearch },
  { title: 'Predictive Modeling', Icon: TrendingUp },
  { title: 'Deep Learning', Icon: Activity },
  { title: 'Large Language Models', Icon: MessageSquareText },
  { title: 'Natural Language Processing', Icon: Compass },
]

export function Research() {
  return (
    <section id="research" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading index="05 / Exploration" title="Research Interests & Areas of Exploration" subtitle="I am interested in exploring how Artificial Intelligence, Machine Learning, and Data Science can be used to solve complex real-world problems. I aim to strengthen my research foundation through continuous learning, experimentation, and exploration of emerging AI technologies." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {interests.map(({ title, Icon }) => (
          <div key={title} className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-cyan/35">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan/25 bg-cyan/10 text-cyan"><Icon size={18} /></span>
            <h3 className="text-sm font-medium">{title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
