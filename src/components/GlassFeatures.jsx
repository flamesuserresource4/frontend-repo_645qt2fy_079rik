import React from 'react'
import { Cpu, Palette, Layers } from 'lucide-react'

const items = [
  {
    icon: Cpu,
    title: 'Performance-first',
    desc: 'Optimized rendering and motion for a buttery-smooth feel.',
  },
  {
    icon: Palette,
    title: 'Glassmorphism',
    desc: 'Frosted layers with tasteful blur, borders and glow.',
  },
  {
    icon: Layers,
    title: 'Modular',
    desc: 'Clean, composable sections that are easy to extend.',
  },
]

export default function GlassFeatures() {
  return (
    <section id="learn" className="relative overflow-hidden bg-gradient-to-b from-black to-slate-950 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_60%_at_70%_10%,rgba(168,85,247,0.18),transparent)]" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Polished details out of the box</h2>
          <p className="mt-3 text-white/70">Tasteful motion, depth and clarity — crafted for modern brands.</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/10 p-6 text-white backdrop-blur-xl ring-1 ring-white/10"
            >
              <Icon className="h-6 w-6 text-cyan-300" />
              <h3 className="mt-3 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
