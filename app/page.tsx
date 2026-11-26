import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Education } from '@/components/education'
import { Skills } from '@/components/skills'
import { Research } from '@/components/research'
import { Projects } from '@/components/projects'
import { CodingProfiles } from '@/components/coding-profiles'
import { Certifications } from '@/components/certifications'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Research />
      <Projects />
      <CodingProfiles />
      <Certifications />
      <Contact />
    </main>
  )
}
