import { GithubIcon, LinkedinIcon } from './brand-icons'

const socials = [
  { label: 'GitHub', href: 'https://github.com/mahinakterkona01', Icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mahin-akter-kona/', Icon: LinkedinIcon },
]

export function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map(({ label, href, Icon }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className="group flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-cyan/50 hover:text-cyan">
          <Icon size={18} />
        </a>
      ))}
    </div>
  )
}
