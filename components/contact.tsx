import { Mail, MapPin, GraduationCap } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { SocialLinks } from './social-links'

const emails = [
  { label: 'Personal email', address: 'mahinakterkona.01@gmail.com', Icon: Mail },
  { label: 'University email', address: 'kona_41250102723@nub.ac.bd', Icon: GraduationCap },
]

export function Contact() {
  return (
    <footer id="contact" className="relative overflow-hidden grid-bg border-t border-border">
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan/10 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-5 py-20">
        <SectionHeading index="09 / Contact" title="Let’s connect" subtitle="I welcome conversations about AI/ML learning, academic opportunities, and thoughtful collaboration." />
        <div className="grid gap-4 md:grid-cols-2">
          {emails.map(({ label, address, Icon }) => (
            <a key={address} href={`mailto:${address}`} className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-cyan/40">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-cyan/25 bg-cyan/10 text-cyan"><Icon size={21} /></span>
              <span><span className="block text-xs uppercase tracking-wide text-muted-foreground">{label}</span><span className="mt-1 block break-all font-medium transition-colors group-hover:text-cyan">{address}</span></span>
            </a>
          ))}
          <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 md:col-span-2">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-indigo/25 bg-indigo/10 text-indigo"><MapPin size={21} /></span>
            <span><span className="block text-xs uppercase tracking-wide text-muted-foreground">Location</span><span className="mt-1 block font-medium">Kanchkura, Uttar Khan, Dhaka, Bangladesh</span></span>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center gap-5">
          <a href="mailto:mahinakterkona.01@gmail.com" className="inline-flex items-center gap-2 rounded-lg bg-cyan px-6 py-3 text-sm font-semibold text-[#071712] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(83,213,181,0.25)]"><Mail size={16} />Send me an Email</a>
          <SocialLinks />
        </div>
        <div className="mt-14 border-t border-border pt-6 text-center">
          <p className="font-mono text-xs text-muted-foreground">© {new Date().getFullYear()} Mahin Akter Kona</p>
        </div>
      </div>
    </footer>
  )
}
