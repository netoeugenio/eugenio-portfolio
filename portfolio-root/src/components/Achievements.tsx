import { ExternalLink } from 'lucide-react'

const timeline = [
  {
    period: 'Atual',
    org: 'Empresa atual',
    role: 'Estagiário de Business Intelligence',
    desc: 'Indicadores, análise, dashboards e apoio à decisão.',
  },
  {
    period: '2023 – 2027',
    org: 'UNIFOR',
    role: 'Ciência da Computação · 5º semestre',
    desc: 'Base acadêmica em programação, sistemas, lógica e fundamentos de computação.',
  },
  {
    period: 'ago/2023 – jan/2026',
    org: 'Moldsoft',
    role: 'Desenvolvedor Salesforce Jr',
    desc: 'Extração e análise de dados, dashboards, automação com Flows, Apex e Triggers. Análise de KPIs de vendas e atendimento.',
  },
]

const certs = [
  {
    title: 'Data Analytics',
    issuer: 'Digital College',
    detail: '1 ano presencial · 2025',
    status: 'done',
  },
  {
    title: 'Fundamentos de Engenharia de Dados',
    issuer: 'Data Science Academy',
    detail: '24h · dez/2025',
    status: 'done',
  },
  {
    title: 'Python para IA — Parte 1',
    issuer: 'Data Science Academy',
    detail: '64h · nov/2025',
    status: 'done',
  },
  {
    title: 'Python para IA — Parte 2',
    issuer: 'Data Science Academy',
    detail: '96h · nov/2025',
    status: 'done',
  },
  {
    title: 'Databricks Lakehouse Fundamentals',
    issuer: 'Databricks Academy',
    detail: 'Em andamento',
    status: 'progress',
  },
]

export default function Achievements() {
  return (
    <section id="conquistas" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="section-label mb-3">Conquistas</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-14">
          Formação, experiência e{' '}
          <span className="text-accent">evolução contínua.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-14">
          {/* Timeline */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-8">Trajetória profissional</h3>
            <div className="relative">
              <div className="absolute left-0 top-2 bottom-2 w-px border-l-2 border-dashed border-accent opacity-20" />
              <div className="flex flex-col gap-8">
                {timeline.map((item, i) => (
                  <div key={i} className="pl-8 relative">
                    <div className="timeline-dot absolute left-[-5px] top-1.5 w-3 h-3 rounded-full" />
                    <p className="section-label mb-0.5">{item.period}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mb-1">{item.org}</p>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">{item.role}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certificações */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-semibold text-gray-900 dark:text-white">Cursos & certificações</h3>
              <a
                href="https://www.linkedin.com/in/eugenio-paiva-0786b7267/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-accent flex items-center gap-1 hover:underline"
              >
                LinkedIn <ExternalLink size={11} />
              </a>
            </div>
            <div className="flex flex-col gap-3">
              {certs.map((cert, i) => (
                <div
                  key={i}
                  className="card-hover p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 dark:text-white text-sm mb-0.5 truncate">
                        {cert.title}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">
                        {cert.issuer} · {cert.detail}
                      </p>
                    </div>
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full font-medium shrink-0 ${
                        cert.status === 'done' ? 'cert-done' : 'cert-progress'
                      }`}
                    >
                      {cert.status === 'done' ? '✓ Concluído' : '◌ Em progresso'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
