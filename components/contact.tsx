import { Mail, MapPin } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { SocialLinks } from './social-links'

export function Contact() {
  return (
    <footer id="contact" className="relative overflow-hidden grid-bg border-t border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          index="07 / Contact"
          title="Let's Connect"
          subtitle="Open to research collaborations, machine learning opportunities, and interesting conversations."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="mailto:mahinakterkona.01@gmail.com"
            className="group flex items-center gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-cyan/40 hover:shadow-[0_0_28px_rgba(56,189,248,0.14)]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-cyan/30 bg-cyan/10 text-cyan">
              <Mail size={22} />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Email</p>
              <p className="font-medium transition-colors group-hover:text-cyan">
                mahinakterkona.01@gmail.com
              </p>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-6">
            <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-indigo/30 bg-indigo/10 text-indigo">
              <MapPin size={22} />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Location</p>
              <p className="font-medium">Kanchkura, Uttarkhan, Dhaka-1230, Bangladesh</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-6">
          <a
            href="mailto:mahinakterkona.01@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg bg-cyan px-6 py-3 text-sm font-semibold text-[#04121d] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(56,189,248,0.4)]"
          >
            <Mail size={16} />
            Send me an Email
          </a>
          <SocialLinks />
        </div>

        <div className="mt-16 border-t border-border pt-8 text-center">
          <p className="font-mono text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mahin Akter Kona. Built with Next.js &amp; deployed on Vercel.
          </p>
        </div>
      </div>
    </footer>
  )
}
