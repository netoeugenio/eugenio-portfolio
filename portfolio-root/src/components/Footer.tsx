export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400 dark:text-gray-500">
          © {new Date().getFullYear()} José Eugênio Paiva · Fortaleza, CE
        </p>
        <a
          href="#inicio"
          className="text-sm text-accent hover:underline font-mono"
        >
          ↑ Voltar ao topo
        </a>
      </div>
    </footer>
  )
}
