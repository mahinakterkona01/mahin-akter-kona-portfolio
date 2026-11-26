import { Code2, Trophy, LineChart, ExternalLink } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { GithubIcon } from './brand-icons'

const profiles = [
  { name: 'LeetCode', handle: 'Personal profile link pending', href: null as string | null, Icon: Code2 },
  { name: 'Kaggle', handle: 'Personal profile link pending', href: null as string | null, Icon: LineChart },
  { name: 'Codeforces', handle: 'Personal profile link pending', href: null as string | null, Icon: Trophy },
  { name: 'GitHub', handle: '@mahinakterkona01', href: 'https://github.com/mahinakterkona01', Icon: GithubIcon },
]

export function CodingProfiles() {
  return (
    <section id="coding" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading index="07 / Profiles" title="Coding Profiles" subtitle="Problem-solving and data-science platforms. Only confirmed personal profile URLs are clickable." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {profiles.map(({ name, handle, href, Icon }) => {
          const content = <><span className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-muted text-cyan"><Icon size={22} /></span><div><h3 className="flex items-center gap-2 font-semibold">{name}{href && <ExternalLink size={13} className="text-muted-foreground" />}</h3><p className="mt-1 font-mono text-xs text-muted-foreground">{handle}</p></div></>
          return href ? <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-start gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-cyan/40">{content}</a> : <div key={name} className="flex flex-col items-start gap-4 rounded-xl border border-border bg-card p-6">{content}</div>
        })}
      </div>
    </section>
  )
}
