"use client"

import { useRef, useEffect, useState } from "react"
import { Lock, Brain, Zap } from "lucide-react"
import { useParallax } from "@/hooks/use-scroll-animation"

const expertiseAreas = [
  {
    icon: Lock,
    title: "Cybersecurity",
    description:
      "Enterprise-grade security infrastructure with zero-trust architecture, advanced threat detection, and real-time incident response.",
  },
  {
    icon: Brain,
    title: "AI Engineering",
    description:
      "Machine learning models designed for predictive security, anomaly detection, and behavioral analysis at scale.",
  },
  {
    icon: Zap,
    title: "Quantum Computing",
    description:
      "Next-generation quantum algorithms for cryptography, optimization, and future-proof security protocols.",
  },
]

export default function Expertise() {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const { offset } = useParallax(0.25)

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
    <section id="expertise" className="py-24 md:py-32 bg-card border-t border-border overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground">Our Expertise</h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
            Three interconnected domains working together to deliver comprehensive security and innovation solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={index}
                className={`transition-all duration-700 transform scroll-animate ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  transform: `translateY(${offset * (0.3 - index * 0.05)}px)`,
                }}
              >
                <div className="p-8 border border-border rounded-lg group hover:border-accent/30 transition-all duration-200 h-full">
                  {/* Icon */}
                  <div className="mb-6">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-4">{area.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-base leading-relaxed">{area.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
