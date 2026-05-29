import { useState, useEffect } from 'react'
import { Sun, Moon, Mail } from 'lucide-react'

const links = [
  { href: '#sobre',     label: 'Quem sou eu' },
  { href: '#projetos',  label: 'Projetos' },
  { href: '#stack',     label: 'Stack' },
  { href: '#conquistas',label: 'Conquistas' },
  { href: '#contato',   label: 'Contato' },
]

interface Props { dark: boolean; onToggleDark: () => void }

export default function Navbar({ dark, onToggleDark }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 font-bold text-sm">
          <span className="w-8 h-8 rounded-lg bg-accent text-white flex items-center justify-center text-xs font-bold">
            JE
          </span>
          <span className="hidden sm:block dark:text-white">José Eugênio</span>
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Ações */}
        <div className="flex items-center gap-2">
          <a
            href="mailto:eugeniopaiva67@gmail.com"
            className="hidden sm:flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-accent transition-colors"
          >
            <Mail size={15} />
            Email
          </a>

          <button
            onClick={onToggleDark}
            className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-accent hover:text-accent transition-colors"
            aria-label="Alternar tema"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Menu mobile */}
          <button
            className="md:hidden p-2 rounded-lg border border-gray-200 dark:border-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <div className="w-4 h-3 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Menu mobile aberto */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 px-6 pb-4">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 text-sm text-gray-600 dark:text-gray-300 hover:text-accent transition-colors border-b border-gray-50 dark:border-gray-800 last:border-0"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
