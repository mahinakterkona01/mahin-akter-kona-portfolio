'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Research Interests', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Coding Profiles', href: '#coding' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${scrolled ? 'glass border-b border-border shadow-[0_8px_30px_rgba(0,0,0,0.35)]' : 'bg-background/85 backdrop-blur-md'}`}>
      <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <a href="#home" className="shrink-0 font-mono text-base font-semibold tracking-tight"><span className="text-cyan">{'<'}</span>Mahin Akter Kona<span className="text-indigo">{' />'}</span></a>
        <ul className="hidden items-center gap-x-5 gap-y-2 xl:flex">
          {links.map((link) => <li key={link.href}><a href={link.href} className="whitespace-nowrap text-xs text-muted-foreground transition-colors hover:text-cyan">{link.label}</a></li>)}
        </ul>
        <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex items-center justify-center rounded-md border border-border p-2 text-foreground xl:hidden" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <div id="mobile-navigation" className={`overflow-hidden border-b border-border bg-background transition-[max-height] duration-300 xl:hidden ${open ? 'max-h-[min(80vh,32rem)] overflow-y-auto' : 'max-h-0'}`}>
        <ul className="grid grid-cols-2 gap-x-4 px-5 py-2 sm:grid-cols-3">
          {links.map((link) => <li key={link.href}><a href={link.href} onClick={() => setOpen(false)} className="block py-3 text-sm text-muted-foreground transition-colors hover:text-cyan">{link.label}</a></li>)}
        </ul>
      </div>
    </header>
  )
}
