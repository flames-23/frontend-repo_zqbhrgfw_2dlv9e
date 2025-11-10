import { motion } from 'framer-motion'

const items = [
  { year: 'Residência', text: 'Estrutura inicial: contratos e impostos sob controle.' },
  { year: 'Especialização', text: 'Planejamento tributário sob medida e blindagem.' },
  { year: 'Carreira Sênior', text: 'Gestão de fluxo de caixa e investimentos empresariais.' },
  { year: 'Consultório Próprio', text: 'Backoffice completo e expansão sustentável.' },
]

export default function TimelineSnap() {
  return (
    <section id="timeline" className="relative h-[100svh] snap-start bg-[#031F29] overflow-x-auto overflow-y-hidden">
      <div className="h-full w-[160vw] md:w-[120vw] flex items-center snap-x snap-mandatory">
        {items.map((it, i) => (
          <motion.div
            key={it.year}
            className="snap-center shrink-0 w-[80vw] md:w-[60vw] h-full grid place-items-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
          >
            <div className="rounded-3xl p-8 bg-white/[0.04] border border-white/10 max-w-xl mx-auto">
              <h3 className="text-[#96D4FF] text-2xl font-bold">{it.year}</h3>
              <p className="text-white/80 mt-2">{it.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
