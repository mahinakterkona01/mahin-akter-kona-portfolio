import { GraduationCap, Star } from 'lucide-react'
import { SectionHeading } from './section-heading'

const items = [
  { degree: 'BSc in Computer Science & Engineering', school: 'Northern University Bangladesh', dates: '2025 – Present', result: 'CGPA: 4.00 / 4.00', status: 'Undergraduate', featured: true },
  { degree: 'Higher Secondary Certificate (HSC)', school: 'শরদার সূর্যমান মহিলা ডিগ্রি কলেজ', dates: 'Completed 2024', result: 'GPA: 5.00 / 5.00', featured: false },
  { degree: 'Secondary School Certificate (SSC)', school: 'কাজীপুরা হাই স্কুল', dates: 'Completed 2022', result: 'GPA: 5.00 / 5.00', featured: false },
]

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading index="02 / Education" title="Education" subtitle="Academic milestones and verified results." />
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <article key={item.degree} className={`flex flex-col rounded-xl border p-6 transition-all hover:-translate-y-1 ${item.featured ? 'border-cyan/40 bg-gradient-to-b from-cyan/10 to-card' : 'border-border bg-card hover:border-cyan/30'}`}>
            <span className={`flex h-11 w-11 items-center justify-center rounded-lg ${item.featured ? 'border border-cyan/40 bg-cyan/15 text-cyan' : 'border border-border bg-muted text-indigo'}`}><GraduationCap size={20} /></span>
            <h3 className="mt-4 text-balance text-base font-semibold leading-snug">{item.degree}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{item.school}</p>
            <p className="mt-4 font-mono text-xs text-muted-foreground">{item.dates}</p>
            <div className={`mt-3 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs ${item.featured ? 'bg-cyan/15 text-cyan' : 'bg-muted text-foreground'}`}>
              {item.featured && <Star size={12} />}{item.result}
            </div>
            {item.status && <p className="mt-3 text-xs text-muted-foreground">Status: {item.status}</p>}
          </article>
        ))}
      </div>
    </section>
  )
}
