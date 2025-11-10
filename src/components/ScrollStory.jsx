import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

export default function ScrollStory() {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.4, margin: '-20% 0px' })
  const ctrls = useAnimation()

  useEffect(() => {
    if (inView) ctrls.start('visible')
  }, [inView, ctrls])

  const steps = [
    { title: 'Diagnóstico Inicial', content: 'CLT vs PJ – analisamos sua jornada e contexto.' },
    { title: 'Custos e Impostos', content: 'Mapeamos despesas, tributos e oportunidades.' },
    { title: 'Economia com Medup', content: 'Estratégias de redução com segurança e transparência.' },
  ]

  return (
    <section id="diagnostico" className="relative min-h-[100svh] snap-start bg-[#042938] py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-5xl font-bold text-white"
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          Scrollytelling: do diagnóstico à economia
        </motion.h2>
        <p className="mt-4 text-white/70 max-w-2xl">Ao rolar, veja a história se revelar com clareza e impacto.</p>

        <div ref={ref} className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={ctrls}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-2xl p-6 bg-white/[0.03] border border-white/10"
            >
              <h3 className="text-white font-semibold text-lg">{s.title}</h3>
              <p className="text-white/70 text-sm mt-2">{s.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
