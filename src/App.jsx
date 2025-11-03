import React from 'react'
import Hero3D from './components/Hero3D'
import ParallaxShowcase from './components/ParallaxShowcase'
import PinnedSteps from './components/PinnedSteps'
import GlassFeatures from './components/GlassFeatures'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero3D />
      <ParallaxShowcase />
      <PinnedSteps />
      <GlassFeatures />
      <footer className="bg-black/80 py-10 text-center text-white/60 backdrop-blur">
        Built with Spline + GSAP + glassmorphism
      </footer>
    </div>
  )
}

export default App
