import { ArrowUpRight, FolderGit2 } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { GithubIcon } from './brand-icons'

type Project = {
  name: string
  subtitle: string
  description: string
  features: string[]
  technologies: string[]
  role?: string
  status?: string
  repositoryUrl: string | null
  demoUrl?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    name: 'Credit Risk Scoring System',
    subtitle: 'Machine Learning · Streamlit',
    description: 'An independent end-to-end Machine Learning project focused on credit risk scoring and predictive modeling.',
    features: ['Credit risk scoring', 'Predictive modeling', 'Model explainability', 'Streamlit interface'],
    technologies: ['Machine Learning', 'Explainable AI', 'Streamlit'],
    role: 'Independent Project Developer',
    repositoryUrl: 'https://github.com/mahinakterkona01/credit-risk-scoring-system',
    featured: true,
  },
  {
    name: 'AI Finance Copilot (FinMatrix)',
    subtitle: 'AI-powered financial decision support for SMEs',
    description: 'A decision-support solution designed to help users understand financial information and explore cash-flow and financial decisions.',
    features: ['Financial information exploration', 'Cash-flow and financial decision support'],
    technologies: ['AI-powered decision support'],
    role: 'Team Leader',
    repositoryUrl: 'https://github.com/mahinakterkona01/FinMatrix-Copilot-SME',
    demoUrl: 'https://finmatrix-copilot-sme-fzqfjy94f6marvqjc4phwu.streamlit.app/',
    featured: true,
  },
  {
    name: 'RESORIUM',
    subtitle: 'Research Workspace Management System',
    description: 'A research-oriented system designed to bring research-related activities into one organized platform, helping users organize research projects, source code, and academic documentation.',
    features: ['Research project organization', 'Source-code organization', 'Academic documentation'],
    technologies: [],
    repositoryUrl: null,
  },
  {
    name: 'LeetCode SQL 50 Solutions',
    subtitle: 'SQL practice',
    description: 'Ongoing SQL problem-solving practice focused on SQL queries and database concepts.',
    features: ['SQL queries', 'Database concepts'],
    technologies: ['SQL'],
    status: 'In Progress',
    repositoryUrl: 'https://github.com/mahinakterkona01/leetcode-sql-50-solutions',
  },
  {
    name: 'Python Problem Solving',
    subtitle: 'Python coding practice',
    description: 'Ongoing Python coding practice focused on logical thinking and programming problem-solving.',
    features: ['Logical thinking', 'Programming problem-solving'],
    technologies: ['Python'],
    status: 'In Progress',
    repositoryUrl: 'https://github.com/mahinakterkona01/python-problem-solving',
  },
]

function ProjectAction({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-cyan/25 bg-cyan/5 px-3 py-2 text-sm font-medium text-cyan transition-colors hover:border-cyan/50 hover:bg-cyan/10">{children}<ArrowUpRight size={15} /></a>
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading index="06 / Projects" title="Featured Projects" subtitle="Selected academic, team, and personal projects. Project cards are data-driven and easy to extend." />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.name} className={`group flex flex-col rounded-xl border bg-card p-6 transition-all hover:-translate-y-1 hover:border-cyan/40 ${project.featured ? 'border-cyan/25 shadow-[0_0_25px_rgba(83,213,181,0.06)]' : 'border-border'}`}>
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-cyan/25 bg-cyan/10 text-cyan"><FolderGit2 size={20} /></span>
              {project.status && <span className="rounded-full border border-border bg-muted px-3 py-1 font-mono text-xs text-muted-foreground">{project.status}</span>}
            </div>
            <h3 className="mt-5 text-lg font-semibold">{project.name}</h3>
            <p className="mt-1 font-mono text-xs text-indigo">{project.subtitle}</p>
            {project.role && <p className="mt-3 text-xs font-medium text-cyan">Role: {project.role}</p>}
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
            <ul className="mt-4 space-y-2">{project.features.map((feature) => <li key={feature} className="flex gap-2 text-xs leading-relaxed text-muted-foreground"><span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan" />{feature}</li>)}</ul>
            {project.technologies.length > 0 && <div className="mt-5 flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="rounded-md border border-border bg-muted px-2.5 py-1 font-mono text-[11px] text-muted-foreground">{tech}</span>)}</div>}
            <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
              {project.repositoryUrl ? <ProjectAction href={project.repositoryUrl}><GithubIcon size={15} />View on GitHub</ProjectAction> : <span className="text-sm text-muted-foreground">Link coming soon</span>}
              {project.demoUrl && <ProjectAction href={project.demoUrl}>Live Demo</ProjectAction>}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
