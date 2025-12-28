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
    <section id="about" className="py-20 md:py-32 bg-card/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left side - Content */}
          <div
            className={`transition-all duration-1000 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="mb-4">
              <p className="text-sm font-semibold text-accent uppercase tracking-widest">About Us</p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mt-2">Enterprise Security Reimagined</h2>
            </div>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 mt-8">
              At Burgess Consulting, we specialize in delivering enterprise-grade cybersecurity solutions integrated
              with advanced AI engineering and quantum computing capabilities. Our approach combines rigorous security
              protocols with cutting-edge technological innovation.
            </p>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              With over a decade of experience protecting Fortune 500 companies, we understand that security excellence
              requires both technical precision and strategic foresight. Our team of certified security architects, AI
              researchers, and quantum computing specialists work seamlessly to architect solutions that anticipate
              threats before they materialize.
            </p>

            <div className="grid grid-cols-2 gap-4 md:gap-6 pt-4">
              {[
                { number: "50+", label: "Enterprise Clients" },
                { number: "99.99%", label: "Security Uptime" },
                { number: "500+", label: "Threats Prevented" },
                { number: "24/7", label: "Support" },
              ].map((stat, i) => (
                <div key={i} className="border border-accent/20 rounded-lg p-4 md:p-6 bg-background/50">
                  <p className="text-xl md:text-2xl font-bold text-accent">{stat.number}</p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Visual */}
          <div
            className={`transition-all duration-1000 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl border border-accent/20 overflow-hidden group">
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity"
                style={{
                  backgroundImage:
                    "linear-gradient(0deg, transparent 24%, rgba(51, 255, 200, 0.05) 25%, rgba(51, 255, 200, 0.05) 26%, transparent 27%, transparent 74%, rgba(51, 255, 200, 0.05) 75%, rgba(51, 255, 200, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(51, 255, 200, 0.05) 25%, rgba(51, 255, 200, 0.05) 26%, transparent 27%, transparent 74%, rgba(51, 255, 200, 0.05) 75%, rgba(51, 255, 200, 0.05) 76%, transparent 77%, transparent)",
                  backgroundSize: "50px 50px",
                }}
              ></div>

              {/* Animated elements */}
              <div className="absolute top-1/4 left-1/4 w-20 h-20 border border-accent/40 rounded-lg animate-pulse"></div>
              <div
                className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-accent/20 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute top-1/2 right-1/3 w-24 h-24 border border-accent/30 rounded-lg animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* Center text overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-accent font-mono text-sm opacity-80">{"< security />"}</p>
                  <p className="text-foreground font-bold text-lg mt-2">AI-Powered</p>
                  <p className="text-foreground font-bold text-lg">Quantum-Ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
