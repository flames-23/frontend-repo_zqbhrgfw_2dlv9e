import { motion } from 'framer-motion'
import { Shield, Calculator, FileBarChart2, BriefcaseMedical } from 'lucide-react'
import LottieIcon from './LottieIcon'
import shieldAnim from '../lottie/shield.json'
import chartAnim from '../lottie/chart.json'
import billingAnim from '../lottie/billing.json'

const services = [
  {
    icon: Shield,
    lottie: shieldAnim,
    title: 'Compliance e Proteção',
    desc: 'Blindagem fiscal e regulatória para sua carreira médica, com monitoramento contínuo.'
  },
  {
    icon: Calculator,
    lottie: chartAnim,
    title: 'Planejamento Tributário',
    desc: 'Estratégias CLT vs PJ, otimização de regime e economia com segurança jurídica.'
  },
  {
    icon: FileBarChart2,
    lottie: chartAnim,
    title: 'Relatórios Premium',
    desc: 'Painéis e relatórios com visual executivo – KPI’s claros e acionáveis.'
  },
  {
    icon: BriefcaseMedical,
    lottie: billingAnim,
    title: 'Backoffice Médico',
    desc: 'Faturamento, notas, pró-labore e folha – tudo resolvido com comodidade máxima.'
  }
]

export default function Services() {
  return (
    <section id="servicos" className="relative min-h-[100svh] snap-start bg-[#031F29] py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-5xl font-bold text-white"
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Serviços que combinam precisão e cuidado
        </motion.h2>
        <motion.p
          className="mt-4 text-white/70 max-w-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Nada exagerado — apenas tecnologia premium e fluidez para você focar no que importa.
        </motion.p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, lottie, title, desc }, i) => (
            <motion.div
              key={title}
              className="group rounded-2xl p-6 bg-white/[0.03] border border-white/10 hover:border-[#96D4FF]/40 transition-colors"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <div className="w-12 h-12 rounded-xl grid place-items-center bg-[#96D4FF]/15 text-[#96D4FF] mb-4 group-hover:scale-105 transition-transform">
                {lottie ? (
                  <LottieIcon data={lottie} className="w-12 h-12" />
                ) : (
                  <Icon />
                )}
              </div>
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <p className="text-white/70 text-sm mt-2">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
