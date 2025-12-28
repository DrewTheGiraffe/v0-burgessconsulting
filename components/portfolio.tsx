"use client"

import { useRef, useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"

const portfolioItems = [
  {
    title: "Global Financial Network Security",
    category: "Cybersecurity",
    description: "Implemented zero-trust architecture protecting $2B+ in daily transactions across 50+ institutions.",
    tags: ["Security", "Compliance", "Enterprise"],
    image: "/secure-financial-network.jpg",
  },
  {
    title: "Predictive Threat Intelligence System",
    category: "AI Engineering",
    description:
      "ML-powered threat detection system reducing incident response time by 85% using real-time behavioral analysis.",
    tags: ["AI", "Detection", "Analytics"],
    image: "/ai-threat-detection.jpg",
  },
  {
    title: "Post-Quantum Cryptography Initiative",
    category: "Quantum Computing",
    description: "Developed quantum-resistant encryption protocols preparing enterprises for the quantum era.",
    tags: ["Quantum", "Crypto", "Future-Ready"],
    image: "/quantum-computing-concept.png",
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
    <section id="portfolio" className="py-20 md:py-32 bg-card/50 backdrop-blur-sm" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image container */}
              <div className="relative h-48 md:h-56 bg-accent/5 rounded-xl border border-accent/20 overflow-hidden mb-6 group-hover:border-accent/40 transition-all">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-4">
                  <button className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-background hover:bg-accent/90 transition-all">
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <p className="text-xs font-semibold text-accent uppercase tracking-widest">{item.category}</p>
                <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
