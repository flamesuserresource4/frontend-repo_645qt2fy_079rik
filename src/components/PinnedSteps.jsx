import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    title: 'Design',
    desc: 'Define the vibe and glassmorphic system with clarity.',
  },
  {
    title: 'Animate',
    desc: 'Bring it to life with GSAP pinning and timelines.',
  },
  {
    title: 'Ship',
    desc: 'Deploy a premium, modern experience fast.',
  },
]

export default function PinnedSteps() {
  const containerRef = useRef(null)
  const cardRefs = useRef([])
  const iconRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top+=80',
          end: '+=2000',
          pin: true,
          scrub: true,
        },
      })

      cardRefs.current.forEach((el, i) => {
        tl.to(
          el,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
          },
          i === 0 ? 0 : ">+=0.4"
        )
        tl.to(
          iconRefs.current[i],
          {
            '--p': 1,
            color: '#22c55e',
            duration: 0.6,
            ease: 'power2.out',
          },
          '<'
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="build" ref={containerRef} className="relative bg-black py-28 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_50%_at_30%_20%,rgba(99,102,241,0.15),transparent)]" />
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Build in three crisp steps</h2>
          <p className="mt-3 text-white/70">Scroll to progress. Each card pins and completes with a checkmark.</p>
        </div>

        <div className="relative mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6">
          {steps.map((s, i) => (
            <article
              key={s.title}
              ref={(el) => (cardRefs.current[i] = el)}
              className="opacity-0 -translate-y-4 rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl ring-1 ring-white/10"
              style={{ transform: 'translateY(16px)' }}
            >
              <div className="flex items-start gap-4">
                <div
                  ref={(el) => (iconRefs.current[i] = el)}
                  className="mt-1 text-white/60"
                  style={{
                    // CSS var --p animates from 0 to 1 to reveal the check mark with a sweep
                    ['--p']: 0,
                  }}
                >
                  <CheckCircle
                    className="h-7 w-7"
                    style={{
                      filter: 'drop-shadow(0_2px_6px_rgba(34,197,94,0.35))',
                      transform: 'scale(calc(0.9 + var(--p) * 0.1))',
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="mt-1 text-white/70">{s.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
