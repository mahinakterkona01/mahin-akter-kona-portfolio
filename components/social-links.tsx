import { Code2, Trophy, LineChart } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './brand-icons'

export const socials = [
  { label: 'GitHub', href: 'https://github.com/mahinakterkona01', Icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mahin-akter-kona', Icon: LinkedinIcon },
  { label: 'Kaggle', href: '#', Icon: LineChart },
  { label: 'LeetCode', href: '#', Icon: Code2 },
  { label: 'Codeforces', href: '#', Icon: Trophy },
]

export function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel="noopener noreferrer"
          aria-label={label}
          className="group flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-cyan/50 hover:text-cyan hover:shadow-[0_0_18px_rgba(56,189,248,0.25)]"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  )
}
