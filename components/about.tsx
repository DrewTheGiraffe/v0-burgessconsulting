"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)

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
    <section id="about" className="py-24 md:py-32 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left side - Content */}
          <div
            className={`transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-8 text-foreground">
              Precision Security Meets Innovation
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              Burgess Consulting brings together expertise in cybersecurity, artificial intelligence, and quantum
              computing. We protect enterprises by combining rigorous security protocols with technological foresight.
            </p>

            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Our approach is rooted in understanding that true security requires both technical excellence and
              strategic vision. We anticipate threats before they materialize.
            </p>
          </div>

          <div
            className={`transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="space-y-8">
              {[
                { number: "50+", label: "Enterprise Clients" },
                { number: "99.99%", label: "Security Uptime" },
                { number: "500+", label: "Threats Prevented" },
                { number: "24/7", label: "Support" },
              ].map((stat, i) => (
                <div key={i} className="border-b border-border pb-6">
                  <p className="text-3xl md:text-4xl font-semibold text-accent mb-2">{stat.number}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
