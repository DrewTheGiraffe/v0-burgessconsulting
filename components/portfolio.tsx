"use client"

import { useRef, useEffect, useState } from "react"

const portfolioItems = [
  {
    title: "Global Financial Network Security",
    category: "Cybersecurity",
    description: "Zero-trust architecture protecting $2B+ in daily transactions.",
  },
  {
    title: "Predictive Threat Intelligence",
    category: "AI Engineering",
    description: "ML-powered detection reducing incident response time by 85%.",
  },
  {
    title: "Post-Quantum Cryptography",
    category: "Quantum Computing",
    description: "Quantum-resistant encryption protocols for the quantum era.",
  },
]

export default function Portfolio() {
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
    <section id="portfolio" className="py-24 md:py-32 bg-background border-t border-border" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="p-8 border border-border rounded-lg hover:border-accent/30 transition-all duration-200 group cursor-pointer h-full flex flex-col">
                <p className="text-xs font-medium text-accent uppercase tracking-wider mb-3">{item.category}</p>
                <h3 className="text-lg font-semibold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed flex-grow">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
