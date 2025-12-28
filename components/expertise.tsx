"use client"

import { useRef, useEffect, useState } from "react"
import { Lock, Brain, Zap } from "lucide-react"

const expertiseAreas = [
  {
    icon: Lock,
    title: "Cybersecurity",
    description:
      "Enterprise-grade security infrastructure with zero-trust architecture, advanced threat detection, and real-time incident response.",
    features: ["Zero-Trust Architecture", "Threat Detection", "Incident Response", "Compliance Management"],
  },
  {
    icon: Brain,
    title: "AI Engineering",
    description:
      "Machine learning models and AI systems designed for predictive security, anomaly detection, and behavioral analysis.",
    features: ["ML Models", "Anomaly Detection", "Behavioral Analysis", "Predictive Analytics"],
  },
  {
    icon: Zap,
    title: "Quantum Computing",
    description:
      "Next-generation quantum algorithms for cryptography, optimization problems, and future-proof security protocols.",
    features: ["Quantum Encryption", "Algorithm Design", "Post-Quantum Security", "Optimization"],
  },
]

export default function Expertise() {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="expertise" className="py-20 md:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Core Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Advanced Capabilities</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three interconnected domains of expertise that work together to deliver comprehensive security and
            innovation solutions.
          </p>
        </div>

        {/* Expertise cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 transform ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Card background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/0 rounded-2xl border border-accent/20 group-hover:border-accent/40 group-hover:shadow-xl group-hover:shadow-accent/10 transition-all"></div>

                {/* Card content */}
                <div className="relative p-8 md:p-6 h-full flex flex-col">
                  {/* Icon */}
                  <div className="mb-6 inline-block">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">{area.description}</p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {area.features.map((feature, i) => (
                      <li key={i} className="text-xs font-medium text-accent/80 flex items-center gap-2">
                        <span className="w-1 h-1 bg-accent rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
