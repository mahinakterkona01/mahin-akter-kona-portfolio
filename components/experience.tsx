import { Briefcase } from 'lucide-react'
import { SectionHeading } from './section-heading'

const bullets = [
  'Developed and trained machine learning models in Python for real-world prediction tasks.',
  'Built data preprocessing pipelines for cleaning, transforming, and normalizing datasets.',
  'Performed feature engineering to improve model accuracy and generalization.',
  'Evaluated models using precision, recall, F1-score, and cross-validation metrics.',
]

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading index="01 / Experience" title="Experience" />

      <div className="relative rounded-xl border border-border bg-card p-6 transition-all hover:border-cyan/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.12)] sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-cyan/30 bg-cyan/10 text-cyan">
              <Briefcase size={20} />
            </span>
            <div>
              <h3 className="text-lg font-semibold">Machine Learning Intern</h3>
              <p className="text-cyan">CodeAlpha</p>
            </div>
          </div>
          <span className="rounded-full border border-border bg-muted px-3 py-1 font-mono text-xs text-muted-foreground">
            Sep 2026 – Oct 2026
          </span>
        </div>

        <ul className="mt-6 space-y-3">
          {bullets.map((b) => (
            <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
