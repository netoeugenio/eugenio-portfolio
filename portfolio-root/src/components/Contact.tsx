import { Mail, Github, Linkedin, Phone } from 'lucide-react'

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'eugeniopaiva67@gmail.com',
    href: 'mailto:eugeniopaiva67@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@netoeugenio',
    href: 'https://github.com/netoeugenio',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Eugênio Paiva',
    href: 'https://www.linkedin.com/in/eugenio-paiva-0786b7267/',
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: '+55 85 98797-3982',
    href: 'tel:+5585987973982',
  },
]

export default function Contact() {
  return (
    <section id="contato" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <p className="section-label mb-3">Contato</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Aberto a oportunidades em{' '}
          <span className="text-accent">Análise de Dados, BI e Engenharia de Dados.</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-xl mb-14">
          Se você tem uma vaga ou projeto que se encaixa no meu perfil, adoraria conversar.
          Pode me chamar por qualquer um dos canais abaixo.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {contacts.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="card-hover p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                <Icon size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-xs text-gray-400 dark:text-gray-500 mb-0.5">{label}</p>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 break-all">{value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA currículo */}
        <a
          href="/eugenio-portfolio/curriculo.pdf"
          download="Jose_Eugenio_Paiva_Neto_CV.pdf"
          className="btn-primary inline-flex"
        >
          Baixar currículo completo →
        </a>
      </div>
    </section>
  )
}
