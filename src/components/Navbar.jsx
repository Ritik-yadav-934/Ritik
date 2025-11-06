import { useState } from 'react'

export default function Navbar({ onToggleTheme, theme }) {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ]
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/60 bg-white/70 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/70">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#home" className="font-semibold tracking-tight">
          Ritik Yadav
        </a>
        <nav className="hidden gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-neutral-600 transition hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle theme"
            onClick={() => onToggleTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-md border border-neutral-200 p-2 text-neutral-600 hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
          <a href="#projects" className="hidden rounded-md bg-primary px-3 py-2 text-sm font-medium text-white shadow-soft hover:opacity-90 md:block">
            View Projects
          </a>
          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center rounded-md border border-neutral-200 p-2 text-neutral-700 hover:bg-neutral-100 md:hidden dark:border-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-900"
          >
            ☰
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden">
          <nav className="mx-auto w-full max-w-6xl px-4 pb-3">
            <div className="flex flex-col gap-2 rounded-lg border border-neutral-200 p-3 dark:border-neutral-800">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900"
                >
                  {l.label}
                </a>
              ))}
              <a href="#projects" onClick={() => setOpen(false)} className="rounded-md bg-primary px-3 py-2 text-center text-sm font-medium text-white">
                View Projects
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

