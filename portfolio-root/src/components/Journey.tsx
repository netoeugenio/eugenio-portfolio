const steps = [
  {
    num: '01',
    title: 'Comecei com Salesforce',
    desc: 'Criei soluções com Salesforce Flows, Apex, Triggers, Power Apps e automações. Base sólida em lógica, banco de dados e processos de negócio.',
  },
  {
    num: '02',
    title: 'Entrei no universo de BI',
    desc: 'SQL, Power BI e análise de indicadores para aproximar dados do negócio. Criação e manutenção de dashboards e relatórios gerenciais.',
  },
  {
    num: '03',
    title: 'Analytics Engineering & Data Eng.',
    desc: 'Hoje evoluo para pipelines ELT, Lakehouse com Databricks, PySpark e Python. Foco em dados confiáveis que chegam ao insight com qualidade.',
  },
]

export default function Journey() {
  return (
    <section id="trajetoria" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <p className="section-label mb-3">Trajetória</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Da lógica de sistemas para{' '}
          <span className="text-accent">pipelines e produtos de dados.</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mb-14">
          Minha trajetória começou como desenvolvedor Salesforce. Hoje estou direcionando
          minha carreira para Análise de Dados, BI e Engenharia de Dados, buscando
          oportunidades como Analista de Dados, BI Analyst ou Junior Data Engineer.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map(({ num, title, desc }) => (
            <div
              key={num}
              className="card-hover p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
            >
              <p className="text-5xl font-bold text-gray-100 dark:text-gray-800 mb-4 font-mono">{num}</p>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
