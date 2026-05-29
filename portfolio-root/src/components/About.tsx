const cards = [
  { label: 'Idade',  value: '21 anos' },
  { label: 'Cidade', value: 'Fortaleza, CE' },
  { label: 'Área',   value: 'Analytics & Data Eng.' },
  { label: 'Hobby',  value: 'Futebol' },
]

export default function About() {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <div>
            <p className="section-label mb-3">Quem sou eu</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Além dos dados, uma pessoa movida por{' '}
              <span className="text-accent">curiosidade e evolução.</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
              Meu nome é Eugenio Neto, tenho 21 anos e moro em Fortaleza, Ceará.
              Sou apaixonado por tecnologia, dados e por transformar problemas em
              soluções práticas. Venho crescendo na área de dados com uma mentalidade
              muito clara: aprender rápido, construir com consistência e entregar valor.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
              Tenho energia jovem, mas encaro minha carreira com seriedade.
              Sou motivado, curioso e disciplinado. Gosto de futebol, valorizo
              aprendizado contínuo e tenho interesse especial em Engenharia de Dados,
              Analytics e Inteligência Artificial.
            </p>

            {/* Foco */}
            <div className="p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
              <p className="section-label mb-1">Foco atual</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                Construir soluções de dados confiáveis, bem modeladas e úteis para decisões reais.
              </p>
            </div>
          </div>

          {/* Cards + foto */}
          <div className="flex flex-col items-center gap-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-accent/30 flex items-center justify-center overflow-hidden">
                <img
                  src="/Portifolio/profile.png"
                  alt="Foto de José Eugênio Paiva"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement
                    target.style.display = 'none'
                    const parent = target.parentElement!
                    parent.innerHTML = '<span style="font-size:4rem;font-weight:700;color:var(--accent)">JE</span>'
                  }}
                />
              </div>
              {/* Badge flutuante */}
              <div className="absolute -bottom-3 -right-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-1.5 shadow-sm">
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">Data Analyst</p>
                <p className="text-xs text-accent font-mono">ELT / Analytics</p>
              </div>
            </div>

            {/* Cards de info */}
            <div className="grid grid-cols-2 gap-3 w-full">
              {cards.map(({ label, value }) => (
                <div
                  key={label}
                  className="p-3 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 text-center"
                >
                  <p className="text-xs text-gray-400 dark:text-gray-500 mb-0.5">{label}</p>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
