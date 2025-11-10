import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setTimeout(() => setSent(true), 500)
  }

  return (
    <section id="contato" className="relative min-h-[100svh] snap-start bg-[#042938] py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h2
            className="text-3xl sm:text-5xl font-bold text-white"
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            Agende seu diagnóstico premium
          </motion.h2>
          <p className="mt-4 text-white/70">Microinterações elegantes garantem uma experiência fluida e precisa.</p>

          <ul className="mt-8 space-y-3 text-white/80 text-sm">
            <li>• Botão de agendamento com pulso suave ao passar o mouse.</li>
            <li>• Confirmação com check animado após enviar.</li>
            <li>• Ícones com leve movimento ao hover.</li>
          </ul>
        </div>

        <div>
          <form onSubmit={onSubmit} className="rounded-2xl p-6 bg-white/[0.03] border border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input required placeholder="Seu nome" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40" />
              <input required type="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40" />
              <input placeholder="CRM (opcional)" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 sm:col-span-2" />
              <textarea required placeholder="Conte-nos seu momento de carreira" rows="4" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 sm:col-span-2" />
            </div>
            <button type="submit" className="mt-6 w-full px-6 py-3 rounded-full bg-[#96D4FF] text-[#042938] font-semibold shadow-lg shadow-[#96D4FF]/20 hover:shadow-[#96D4FF]/40 transition-all hover:animate-pulse">
              Agendar diagnóstico
            </button>
          </form>

          <AnimatePresence>
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="mt-4 flex items-center gap-2 text-[#96D4FF]"
              >
                <CheckCircle2 className="shrink-0" />
                <p>Recebemos seus dados. Em breve, nossa equipe entrará em contato.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
