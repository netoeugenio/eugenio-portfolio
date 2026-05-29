const groups = [
  {
    title: 'Analytics',
    items: ['Python', 'SQL', 'Pandas', 'Matplotlib', 'Seaborn', 'EDA', 'Storytelling'],
  },
  {
    title: 'Data Engineering',
    items: ['PySpark', 'Databricks', 'Delta Lake', 'Unity Catalog', 'ETL', 'ELT', 'PostgreSQL', 'MySQL'],
  },
  {
    title: 'Business & Delivery',
    items: ['Power BI', 'Streamlit', 'Salesforce', 'CRM', 'Git', 'Salesforce Flows', 'Apex'],
  },
]

export default function Stack() {
  return (
    <section id="stack" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <p className="section-label mb-3">Stack</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-14">
          Ferramentas que sustentam{' '}
          <span className="text-accent">minha entrega.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {groups.map(({ title, items }) => (
            <div
              key={title}
              className="card-hover p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="tech-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
