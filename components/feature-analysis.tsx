"use client"

import { useState } from "react"

export default function FeatureAnalysis() {
  const [hoveredZone, setHoveredZone] = useState(null)

  const zones = [
    { label: "Severe Deficiency", color: "rgb(220, 38, 38)", opacity: 0.8 },
    { label: "Moderate Deficiency", color: "rgb(245, 158, 11)", opacity: 0.6 },
    { label: "Optimal Health", color: "rgb(46, 139, 87)", opacity: 0.9 },
  ]

  return (
    <section className="py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">Intelligent Analysis</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">Pinpoint Precision Analysis</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Visual */}
          <div className="order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              {/* Satellite Map Grid */}
              <div className="space-y-4">
                <div className="text-sm font-semibold text-foreground mb-6">Field Analysis Map (Hover for details)</div>
                <div className="grid grid-cols-4 gap-2 mb-6">
                  {[...Array(16)].map((_, i) => {
                    const colors = ["rgb(220, 38, 38)", "rgb(245, 158, 11)", "rgb(46, 139, 87)"]
                    const randomColor = colors[Math.floor(Math.random() * colors.length)]
                    return (
                      <div
                        key={i}
                        className="aspect-square rounded-lg transition-all hover:scale-110 shadow-md cursor-pointer"
                        style={{ backgroundColor: randomColor, opacity: 0.8 }}
                        onMouseEnter={() => setHoveredZone(i)}
                        onMouseLeave={() => setHoveredZone(null)}
                        title={`Zone ${i + 1} - Click for details`}
                      >
                        {hoveredZone === i && (
                          <div className="w-full h-full flex items-center justify-center bg-black/20 rounded-lg">
                            <span className="text-white text-xs font-bold">{i + 1}</span>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>

                {/* Legend */}
                <div className="space-y-3 pt-4 border-t border-gray-200">
                  {zones.map((zone) => (
                    <div
                      key={zone.label}
                      className="flex items-center gap-3 p-2 rounded hover:bg-gray-200/50 transition-colors cursor-pointer"
                    >
                      <div
                        className="w-4 h-4 rounded transition-transform hover:scale-125"
                        style={{
                          backgroundColor: zone.color,
                          opacity: zone.opacity,
                        }}
                      />
                      <span className="text-sm text-muted-foreground">{zone.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-foreground">Real-Time Field Intelligence</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our advanced AI analyzes drone imagery to detect water stress, nutrient deficiencies, and pest
                infestations across every inch of your field in real-time. Get actionable insights that drive better
                decisions.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "Drone-based multi-spectral imaging",
                "AI-powered anomaly detection",
                "Real-time field health monitoring",
                "Automated alerts and recommendations",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 p-3 rounded hover:bg-blue-50/50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
