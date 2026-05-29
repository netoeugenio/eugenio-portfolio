import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: '01',
    category: 'Projeto principal • Data Engineering',
    title: 'Bitcoin Near Real-Time ELT Pipeline',
    desc: 'Pipeline ELT em tempo quase real para capturar preços do Bitcoin via API, processar com PySpark e armazenar em arquitetura Lakehouse. Demonstra domínio de pipeline, Delta Lake e pensamento escalável.',
    problem: 'Transformar dados externos em base analítica confiável.',
    delivery: 'Ingestão, transformação, organização e consulta para analytics.',
    value: 'Domínio de pipeline, Lakehouse e pensamento escalável.',
    tags: ['Databricks', 'PySpark', 'Delta Lake', 'Unity Catalog', 'Python', 'SQL'],
    link: 'https://github.com/netoeugenio/ETL_Bitcoin',
    video: '/eugenio-portfolio/pipeline-bitcoin.mp4',
    featured: true,
  },
  {
    id: '02',
    category: 'Data quality • ETL',
    title: 'Campaign Data Validator',
    desc: 'Aplicação para validar campanhas de marketing com regras de negócio, tipagem forte e interface para upload de CSV. Reduz inconsistências antes da análise.',
    problem: 'Confiar nos dados antes de usá-los.',
    delivery: 'Validação robusta com Pydantic + interface Streamlit.',
    value: 'Dados limpos, menos erros na tomada de decisão.',
    tags: ['Python', 'Pandas', 'Pydantic', 'Streamlit', 'ETL'],
    link: 'https://github.com/netoeugenio/etl_excel',
    video: null,
    featured: false,
  },
  {
    id: '03',
    category: 'BI • Analytics app',
    title: 'Interactive Sales Analytics Dashboard',
    desc: 'Aplicação de analytics para vendas com KPIs, consultas SQL e visualizações em interface Streamlit. Traduz dados em leitura executiva.',
    problem: 'Tornar dados de vendas acessíveis para decisão gerencial.',
    delivery: 'KPIs, exploração orientada a decisão e visualizações interativas.',
    value: 'Visão executiva de vendas sem depender de BI pesado.',
    tags: ['Python', 'SQL', 'Streamlit', 'SQLite', 'BI'],
    link: 'https://github.com/netoeugenio/Data-App-Para-Dashboard-Interativo-de-Sales-Analytics',
    video: null,
    featured: false,
  },
  {
    id: '04',
    category: 'EDA • Insight',
    title: 'Exploratory Data Analysis Projects',
    desc: 'Coleção de análises exploratórias: limpeza, estatística descritiva, visualização e interpretação. Do dado bruto à leitura útil.',
    problem: 'Extrair padrões e insights de bases brutas.',
    delivery: 'Tratamento, visualização e raciocínio analítico documentado.',
    value: 'Fundamentos sólidos de análise de dados.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Analytics'],
    link: 'https://github.com/netoeugenio/Mine_Projeto_Analise_de_Dados',
    video: null,
    featured: false,
  },
]

function ProjectCard({ p }: { p: typeof projects[0] }) {
  return (
    <div
      className={`card-hover rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden flex flex-col ${
        p.featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Vídeo autoplay — só no Bitcoin */}
      {p.video && (
        <div className="relative bg-black w-full">
          <video
            src={p.video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full object-cover max-h-52"
          />
          <span className="absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full cert-done font-mono font-medium">
            ◉ pipeline ao vivo
          </span>
        </div>
      )}

      <div className="p-6 md:p-8 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <span className="section-label block mb-1">{p.category}</span>
            <span className="text-5xl font-bold text-gray-100 dark:text-gray-800 select-none font-mono">
              {p.id}
            </span>
          </div>
          <div className="flex gap-2 mt-1">
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-accent hover:text-accent transition-colors text-gray-500"
              aria-label="Ver no GitHub"
            >
              <Github size={17} />
            </a>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-accent hover:text-accent transition-colors text-gray-500"
              aria-label="Abrir projeto"
            >
              <ExternalLink size={17} />
            </a>
          </div>
        </div>

        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{p.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5 flex-1">{p.desc}</p>

        {/* Problema / Entrega / Valor */}
        <div className={`grid gap-3 mb-5 ${p.featured ? 'sm:grid-cols-3' : 'grid-cols-1'}`}>
          {[
            { label: 'Problema', value: p.problem },
            { label: 'Entrega',  value: p.delivery },
            { label: 'Valor',    value: p.value },
          ].map(({ label, value }) => (
            <div key={label} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
              <p className="text-xs font-semibold text-accent mb-1">{label}</p>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{value}</p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {p.tags.map((tag) => (
            <span key={tag} className="tech-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projetos" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="section-label mb-3">Projetos</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Cases que mostram dados virando{' '}
          <span className="text-accent">produto, controle e decisão.</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mb-14">
          Cada projeto evidencia uma competência diferente: ingestão, validação, transformação,
          análise, visualização e entrega para o negócio.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
