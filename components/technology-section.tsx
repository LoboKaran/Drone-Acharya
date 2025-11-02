"use client"

import { TrendingUp, Zap, Shield, Smartphone } from "lucide-react"

export default function TechnologySection() {
  const technologies = [
    {
      icon: TrendingUp,
      title: "Advanced AI Engine",
      description:
        "Machine learning models trained on 1M+ farm datasets for accurate predictions and anomaly detection.",
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Edge computing on drones for instant analysis without cloud latency or connectivity issues.",
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Bank-level encryption and compliance with Indian agricultural data protection regulations.",
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Works offline with auto-sync. Supports all Indian regional languages for universal accessibility.",
    },
  ]

  return (
    <section className="py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">Technology Stack</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Built on Cutting-Edge Technology</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade infrastructure designed for Indian farming
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all group cursor-pointer bg-gradient-to-br from-white to-gray-50/50"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{tech.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{tech.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
