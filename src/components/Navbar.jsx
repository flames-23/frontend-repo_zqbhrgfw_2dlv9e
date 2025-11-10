import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diagnóstico', href: '#diagnostico' },
    { label: 'Linha do Tempo', href: '#timeline' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-[#042938]/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#96D4FF] to-[#4db7ff]" />
          <span className="text-white/90 font-semibold tracking-wide">Medup</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-white/70 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contato" className="ml-2 inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#96D4FF] text-[#042938] font-semibold hover:shadow-[0_0_0_3px_rgba(150,212,255,0.35)] transition-all">
            Agendar Diagnóstico
          </a>
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Abrir menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 grid gap-2 border-t border-white/10">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-white/80 py-2">
              {item.label}
            </a>
          ))}
          <a href="#contato" onClick={() => setOpen(false)} className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#96D4FF] text-[#042938] font-semibold">
            Agendar Diagnóstico
          </a>
        </div>
      )}
    </header>
  )
}
