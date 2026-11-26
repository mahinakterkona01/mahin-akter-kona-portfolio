import Image from 'next/image'
import { Award, ExternalLink, Medal } from 'lucide-react'
import { SectionHeading } from './section-heading'

type Credential = {
  title: string
  issuer: string
  description: string
  Icon: typeof Award
  certificateUrl: string | null
  imageUrl: string | null
  verificationUrl: string | null
}

const credentials: Credential[] = [
  { title: 'University Activation Programme 2025', issuer: 'ICT Division · Bangladesh Computer Council · iDEA Project', description: 'Certificate of Completion · Active Participation · 2025', Icon: Award, certificateUrl: null, imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/uni%20activation%20program-VfhjFEQ0zrabuY7r08JIz6j3J8deF4.jpg', verificationUrl: null },
  { title: 'Python Certification', issuer: 'freeCodeCamp', description: '300-hour Python certification.', Icon: Award, certificateUrl: 'https://blobs.vusercontent.net/blob/freecodecamp.org_certification_mahin_akter_kona_python-v9-HhCnuLrcCSMYYg08fSW9rxF3dJSlSO.pdf', imageUrl: null, verificationUrl: 'https://freecodecamp.org/certification/mahin_akter_kona/python-v9' },
  { title: 'Introduction to Machine Learning', issuer: 'Kaggle', description: 'Introductory Machine Learning concepts and practical model-building.', Icon: Award, certificateUrl: null, imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mahin%20akter%20Kona%20-%20Intro%20to%20Machine%20Learning-d9u7dzRgBMHy4OTswk7ZoSAwzxKOCP.png', verificationUrl: null },
  { title: 'National Robotics Competition 2026', issuer: 'Hosted at IUBAT · BattleBot', description: 'Participant recognition.', Icon: Medal, certificateUrl: null, imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nrc-26-KMGycVyHsPHGuIllcPRnqnwV1fiVyJ.jpg', verificationUrl: null },
]

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading index="08 / Credentials" title="Certifications & Competitions" subtitle="Credentials and participation, with certificate and verification links shown only when supplied." />
      <div className="grid gap-5 md:grid-cols-3">
        {credentials.map(({ title, issuer, description, Icon, certificateUrl, imageUrl, verificationUrl }) => {
          const viewUrl = certificateUrl ?? imageUrl
          return (
            <article key={title} className="flex flex-col rounded-xl border border-cyan/30 bg-card p-6 shadow-lg shadow-cyan/5 transition-colors hover:border-cyan/50">
              <div className="mb-4 h-56 overflow-hidden rounded-lg border border-border bg-muted/30">
                {imageUrl ? <a href={imageUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open full ${title} certificate image in a new tab`} className="block h-full w-full"><Image src={imageUrl} alt={`${title} certificate`} width={1367} height={1824} unoptimized className="h-full w-full object-contain" /></a> : certificateUrl ? <iframe src={`${certificateUrl}#toolbar=0&navpanes=0`} title={`${title} certificate preview`} loading="lazy" className="h-full w-full border-0 bg-white" /> : <span className="flex h-full items-center justify-center text-cyan"><Icon size={28} aria-hidden="true" /></span>}
              </div>
              <h3 className="font-semibold leading-snug">{title}</h3>
              <p className="mt-1 text-sm text-cyan">{issuer}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
              <div className="mt-5 flex flex-wrap gap-3 border-t border-border pt-4 text-sm">
                {viewUrl ? <a href={viewUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-cyan/30 bg-cyan/10 px-4 py-2 font-medium text-cyan transition-colors hover:border-cyan hover:bg-cyan/15 hover:text-indigo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background">View Certificate <ExternalLink size={14} /></a> : <span className="text-muted-foreground">Certificate upload pending</span>}
                {verificationUrl && <a href={verificationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-medium text-cyan hover:text-indigo">Verify Certificate <ExternalLink size={14} /></a>}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
