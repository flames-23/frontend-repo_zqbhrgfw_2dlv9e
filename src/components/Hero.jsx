import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden snap-start">
      <div className="absolute inset-0 bg-[#042938]" />

      {/* Parallax background accents */}
      <motion.div
        className="absolute -top-24 -right-24 w-[42rem] h-[42rem] rounded-full bg-[#96D4FF]/20 blur-3xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-[36rem] h-[36rem] rounded-full bg-[#96D4FF]/10 blur-3xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Você cuida de vidas. A Medup cuida de você.
        </motion.h1>
        <motion.p
          className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
        >
          Escritório de contabilidade premium para médicos. Comodidade, precisão e serviço de alta qualidade — tecnologia de ponta com toque humano.
        </motion.p>
        <motion.div
          className="mt-10 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a href="#diagnostico" className="px-6 py-3 rounded-full bg-[#96D4FF] text-[#042938] font-semibold shadow-lg shadow-[#96D4FF]/20 hover:shadow-[#96D4FF]/40 transition-all">
            Agendar Diagnóstico
          </a>
          <a href="#servicos" className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors">
            Conheça os serviços
          </a>
        </motion.div>

        {/* Motion UI note */}
        <motion.div
          className="mt-16 text-white/70 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <strong className="text-white">Motion UI</strong>: transições fluidas, microinterações e elegância em cada detalhe.
        </motion.div>
      </div>
    </section>
  )
}
