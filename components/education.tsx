import { GraduationCap, Star } from 'lucide-react'
import { SectionHeading } from './section-heading'

const items = [
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    school: 'Northern University Bangladesh',
    result: 'Current CGPA: 4.00 / 4.00',
    featured: true,
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    school: 'Science Group',
    result: 'GPA: 5.00 / 5.00',
    featured: false,
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    school: 'Science Group',
    result: 'GPA: 5.00 / 5.00',
    featured: false,
  },
]

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading index="02 / Education" title="Education" />

      <div className="grid gap-5 md:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.degree}
            className={`relative flex flex-col rounded-xl border p-6 transition-all hover:-translate-y-1 ${
              it.featured
                ? 'border-cyan/40 bg-gradient-to-b from-cyan/10 to-card shadow-[0_0_30px_rgba(56,189,248,0.15)] md:row-span-1'
                : 'border-border bg-card hover:border-indigo/40'
            }`}
          >
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-lg ${
                it.featured
                  ? 'border border-cyan/40 bg-cyan/15 text-cyan'
                  : 'border border-border bg-muted text-indigo'
              }`}
            >
              <GraduationCap size={20} />
            </span>
            <h3 className="mt-4 text-balance text-base font-semibold leading-snug">{it.degree}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{it.school}</p>
            <div
              className={`mt-4 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs ${
                it.featured
                  ? 'bg-cyan/15 text-cyan'
                  : 'bg-muted text-foreground'
              }`}
            >
              {it.featured ? <Star size={12} /> : null}
              {it.result}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
