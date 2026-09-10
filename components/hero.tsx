import Image from 'next/image'
import { ArrowRight, Mail } from 'lucide-react'
import { SocialLinks } from './social-links'

export function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden grid-bg pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 right-10 h-64 w-64 rounded-full bg-indigo/20 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/5 px-4 py-1.5 text-xs font-medium text-cyan">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
            CSE Undergraduate · Northern University Bangladesh
          </span>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-cyan glow-text">Mahin Akter Kona</span>
          </h1>

          <p className="mt-4 font-mono text-lg text-indigo">
            Machine Learning Researcher &amp; Python Developer
          </p>

          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Focused on Machine Learning, Data Science, and Explainable AI (SHAP, LIME).
            Passionate about leveraging data and sustainable technology to build transparent,
            reliable AI models.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan px-5 py-3 text-sm font-semibold text-[#04121d] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(56,189,248,0.4)]"
            >
              <Mail size={16} />
              Get in Touch
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-indigo/50 hover:text-indigo"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
          </div>

          <SocialLinks className="mt-8" />
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 -rotate-3 rounded-2xl bg-gradient-to-br from-cyan/30 to-indigo/30 blur-xl" />
          <div className="glass relative rounded-2xl border border-cyan/20 p-3 shadow-[0_0_40px_rgba(56,189,248,0.15)]">
            <div className="overflow-hidden rounded-xl border border-border">
              <Image
                src="/kona.jpg"
                alt="Portrait of Mahin Akter Kona"
                width={480}
                height={560}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
