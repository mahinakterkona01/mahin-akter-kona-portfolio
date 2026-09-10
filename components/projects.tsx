import { FolderGit2 } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { GithubIcon } from './brand-icons'

const projects = [
  {
    name: 'RESORIUM',
    subtitle: 'Research Workspace Management System',
    description:
      'A full-featured workspace management system for organizing research work, built with clean OOP architecture and a REST API backend.',
    features: [
      'Object-oriented design with modular architecture',
      'RESTful API for data operations',
      'Responsive web interface',
    ],
    tech: ['Java', 'OOP', 'REST API', 'HTML5', 'CSS3', 'JS', 'Git'],
    href: 'https://github.com/mahinakterkona01',
  },
  {
    name: 'XAI Interpretability Framework',
    subtitle: 'Explainable AI Toolkit',
    description:
      'A framework for interpreting machine learning models using SHAP and LIME to surface feature importance and local explanations.',
    features: [
      'SHAP global feature attribution',
      'LIME local explanations',
      'Scikit-Learn model integration',
    ],
    tech: ['Python', 'Scikit-Learn', 'SHAP', 'LIME', 'Pandas'],
    href: 'https://github.com/mahinakterkona01',
  },
  {
    name: 'Predictive Analytics Pipeline',
    subtitle: 'Data Analysis Workflow',
    description:
      'An end-to-end pipeline for cleaning, analyzing, and modeling datasets to generate reliable predictive insights.',
    features: [
      'Automated data cleaning & transformation',
      'Exploratory data analysis',
      'Statistical modeling & evaluation',
    ],
    tech: ['Python', 'NumPy', 'Pandas', 'Data Analysis'],
    href: 'https://github.com/mahinakterkona01',
  },
]

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        index="05 / Projects"
        title="Featured Projects"
        subtitle="Selected work spanning software engineering and applied machine learning."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.name}
            className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-cyan/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.14)]"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-muted text-cyan">
                <FolderGit2 size={20} />
              </span>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.name} on GitHub`}
                className="text-muted-foreground transition-colors hover:text-cyan"
              >
                <GithubIcon size={20} />
              </a>
            </div>

            <h3 className="mt-5 text-lg font-semibold">{p.name}</h3>
            <p className="font-mono text-xs text-indigo">{p.subtitle}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

            <ul className="mt-4 space-y-2">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2 text-xs leading-relaxed text-muted-foreground">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2 pt-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border bg-muted px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan transition-colors hover:text-indigo"
            >
              <GithubIcon size={15} />
              View on GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
