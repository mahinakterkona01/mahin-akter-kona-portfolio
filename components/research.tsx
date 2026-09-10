import { Brain, Eye, TrendingUp, Leaf } from 'lucide-react'
import { SectionHeading } from './section-heading'

const interests = [
  {
    title: 'Explainable AI (XAI)',
    desc: 'Interpreting model decisions with SHAP & LIME for transparent, trustworthy predictions.',
    Icon: Eye,
  },
  {
    title: 'Model Interpretability',
    desc: 'Understanding feature contributions and decision boundaries in complex ML systems.',
    Icon: Brain,
  },
  {
    title: 'Predictive Analytics',
    desc: 'Building data-driven models that forecast outcomes with measurable reliability.',
    Icon: TrendingUp,
  },
  {
    title: 'Sustainable Tech Solutions',
    desc: 'Applying data and AI toward responsible, sustainable technology outcomes.',
    Icon: Leaf,
  },
]

export function Research() {
  return (
    <section id="research" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        index="04 / Research"
        title="Research Focus & Interests"
        subtitle="Exploring how transparency and interpretability make machine learning models more reliable and accountable."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {interests.map(({ title, desc, Icon }) => (
          <div
            key={title}
            className="flex gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-indigo/40 hover:shadow-[0_0_28px_rgba(129,140,248,0.14)]"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-indigo/30 bg-indigo/10 text-indigo">
              <Icon size={20} />
            </span>
            <div>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
