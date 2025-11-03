import React from 'react'
import Spline from '@splinetool/react-spline'
import { Rocket, Sparkles } from 'lucide-react'

export default function Hero3D() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-md ring-1 ring-white/20">
          <Sparkles className="h-4 w-4 text-yellow-300" />
          <span className="text-sm/none tracking-wide text-white/90">Glassmorphic 3D experience</span>
        </div>
        <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-6xl">
          Craft Animated, Futuristic UIs
        </h1>
        <p className="mt-4 max-w-2xl text-white/80">
          Smooth parallax, GSAP-driven scroll magic, and a floating 3D scene that feels alive.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <a href="#build" className="inline-flex items-center gap-2 rounded-xl bg-white/20 px-6 py-3 font-semibold backdrop-blur-xl ring-1 ring-white/30 transition hover:bg-white/30">
            <Rocket className="h-5 w-5" />
            Start Building
          </a>
          <a href="#learn" className="rounded-xl bg-white/10 px-6 py-3 font-semibold backdrop-blur-xl ring-1 ring-white/20 transition hover:bg-white/20">
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
