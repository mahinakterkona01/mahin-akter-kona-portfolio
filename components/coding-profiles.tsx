import { Code2, Trophy, LineChart, ExternalLink } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { GithubIcon } from './brand-icons'

const profiles = [
  {
    name: 'LeetCode',
    handle: 'Problem Solving',
    href: '#',
    Icon: Code2,
  },
  {
    name: 'Kaggle',
    handle: 'Data Science',
    href: '#',
    Icon: LineChart,
  },
  {
    name: 'Codeforces',
    handle: 'Competitive',
    href: '#',
    Icon: Trophy,
  },
  {
    name: 'GitHub',
    handle: '@mahinakterkona01',
    href: 'https://github.com/mahinakterkona01',
    Icon: GithubIcon,
  },
]

export function CodingProfiles() {
  return (
    <section id="coding" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        index="03 / Coding Profiles"
        title="Coding Profiles & Problem Solving"
        subtitle="Sharpening algorithmic thinking and data science skills across competitive and collaborative platforms."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {profiles.map(({ name, handle, href, Icon }) => (
          <a
            key={name}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="group flex flex-col items-start gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-cyan/40 hover:shadow-[0_0_28px_rgba(56,189,248,0.14)]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-muted text-cyan transition-colors group-hover:border-cyan/40">
              <Icon size={22} />
            </span>
            <div>
              <h3 className="flex items-center gap-1.5 font-semibold">
                {name}
                <ExternalLink size={13} className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </h3>
              <p className="mt-0.5 font-mono text-xs text-muted-foreground">{handle}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
