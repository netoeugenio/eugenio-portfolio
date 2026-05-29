import { Github, Linkedin, Download, ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 pt-20">
      {/* Glow de fundo */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-[0.07] dark:opacity-[0.12]"
        style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto w-full">
        {/* Status */}
        <p className="section-label fade-up mb-5 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent inline-block animate-pulse" />
          disponível para oportunidades
        </p>

        {/* Título */}
        <h1 className="fade-up delay-1 text-4xl md:text-6xl font-bold leading-tight mb-6">
          Dados bem tratados,{' '}
          <br className="hidden md:block" />
          análises claras e{' '}
          <span className="text-accent">decisões melhores.</span>
        </h1>

        {/* Subtítulo */}
        <p className="fade-up delay-2 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mb-10 leading-relaxed">
          Sou <strong className="text-gray-800 dark:text-gray-100 font-semibold">José Eugênio Paiva</strong>,
          estudante de Ciência da Computação na UNIFOR, estagiário de Business Intelligence
          e ex-desenvolvedor Salesforce. Combino análise de dados, engenharia de dados
          e visão de negócio para transformar dados brutos em insights reais.
        </p>

        {/* CTAs */}
        <div className="fade-up delay-3 flex flex-wrap gap-4 items-center mb-14">
          <a
            href="/eugenio-portfolio/curriculo.pdf"
            download="Jose_Eugenio_Paiva_Neto_CV.pdf"
            className="btn-primary pulse-cta"
          >
            <Download size={17} />
            Baixar currículo
          </a>

          <a href="#projetos" className="btn-secondary">
            Ver projetos →
          </a>

          <div className="flex items-center gap-2 ml-1">
            <a
              href="https://github.com/netoeugenio"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-accent hover:text-accent dark:hover:text-accent transition-colors text-gray-500 dark:text-gray-400"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/eugenio-paiva-0786b7267/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-accent hover:text-accent dark:hover:text-accent transition-colors text-gray-500 dark:text-gray-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Métricas */}
        <div className="fade-up delay-4 flex flex-wrap gap-10 pt-8 border-t border-gray-100 dark:border-gray-800">
          {[
            { value: '2+', label: 'anos com Salesforce' },
            { value: '5º', label: 'semestre em CC' },
            { value: '4',  label: 'projetos de dados' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-2xl font-bold text-accent">{value}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-300 dark:text-gray-600 hover:text-accent transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  )
}
