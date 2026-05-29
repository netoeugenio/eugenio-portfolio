import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Journey from './components/Journey'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  )

  // Barra de progresso de leitura
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleDark = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Barra de progresso */}
      <div
        className="fixed top-0 left-0 h-0.5 z-50 transition-all duration-100"
        style={{ width: `${progress}%`, background: 'var(--accent)' }}
      />

      <Navbar dark={dark} onToggleDark={toggleDark} />

      <main>
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Stack />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
