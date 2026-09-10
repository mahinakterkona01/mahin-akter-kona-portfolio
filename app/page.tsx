import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Experience } from '@/components/experience'
import { Education } from '@/components/education'
import { CodingProfiles } from '@/components/coding-profiles'
import { Research } from '@/components/research'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Experience />
      <Education />
      <CodingProfiles />
      <Research />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
