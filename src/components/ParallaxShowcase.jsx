import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star, Sparkles } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function ParallaxShowcase() {
  const sectionRef = useRef(null)
  const slowRef = useRef(null)
  const midRef = useRef(null)
  const fastRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(slowRef.current, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
      gsap.to(midRef.current, {
        yPercent: -35,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
      gsap.to(fastRef.current, {
        yPercent: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 to-black py-24">
      <div className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="pointer-events-none absolute top-32 left-8 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10 backdrop-blur">
            <Sparkles className="h-4 w-4 text-yellow-300" />
            <span className="text-sm text-white/80">Parallax motion layers</span>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">Depth that reacts to your scroll</h2>
          <p className="mt-3 text-white/70">Layered elements drift at different speeds, creating a premium feel without sacrificing performance.</p>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div ref={slowRef} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-xl">
            <Star className="h-6 w-6 text-yellow-300" />
            <h3 className="mt-3 text-lg font-semibold">Subtle layer</h3>
            <p className="mt-2 text-white/70">Soft movement adds depth and polish.</p>
          </div>
          <div ref={midRef} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-xl">
            <Star className="h-6 w-6 text-cyan-300" />
            <h3 className="mt-3 text-lg font-semibold">Mid-intensity</h3>
            <p className="mt-2 text-white/70">Eye-catching but never overwhelming.</p>
          </div>
          <div ref={fastRef} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-xl">
            <Star className="h-6 w-6 text-fuchsia-300" />
            <h3 className="mt-3 text-lg font-semibold">Hero detail</h3>
            <p className="mt-2 text-white/70">The most dynamic layer responds boldly.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
