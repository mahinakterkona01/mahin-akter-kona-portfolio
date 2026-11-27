import Image from 'next/image'
import { ArrowRight, Download, Mail } from 'lucide-react'
import { SocialLinks } from './social-links'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden grid-bg pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan/15 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute top-40 right-10 h-64 w-64 rounded-full bg-indigo/15 blur-[120px]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/5 px-4 py-1.5 text-xs font-medium text-cyan">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
            CSE Undergraduate at Northern University Bangladesh
          </span>
          <h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Mahin Akter <span className="text-cyan glow-text">Kona</span>
          </h1>
          <p className="mt-4 text-xl font-semibold text-foreground">AI/ML &amp; Data Science Enthusiast</p>
          <p className="mt-1 font-mono text-base text-indigo">Aspiring Researcher</p>
          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            I am a Computer Science and Engineering undergraduate interested in Artificial Intelligence, Machine Learning, and Data Science. I enjoy exploring intelligent technologies, developing practical solutions, and strengthening my foundation for a future career in AI/ML research and engineering.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-cyan px-5 py-3 text-sm font-semibold text-[#071712] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(83,213,181,0.25)]">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="https://blobs.vusercontent.net/blob/Kona_CV-iu9m0vkJg4C0OWEt7ZKZDRtgy8fmz5.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-cyan/50 hover:text-cyan">
              <Download size={16} /> View CV
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-cyan/50 hover:text-cyan">
              <Mail size={16} /> Get in Touch
            </a>
          </div>
          <SocialLinks className="mt-8" />
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div aria-hidden="true" className="absolute inset-0 -rotate-3 rounded-2xl bg-gradient-to-br from-cyan/25 to-indigo/25 blur-xl" />
          <div className="glass relative rounded-2xl border border-cyan/20 p-3 shadow-[0_0_40px_rgba(83,213,181,0.12)]">
            <div className="overflow-hidden rounded-xl border border-border">
              <Image src="/kona.jpeg" alt="Portrait of Mahin Akter Kona" width={480} height={560} priority className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
