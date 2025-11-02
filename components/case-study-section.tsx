"use client"

import { TrendingUp } from "lucide-react"

export default function CaseStudySection() {
  const caseStudies = [
    {
      location: "Satara District, Maharashtra",
      crop: "Sugarcane",
      challenge: "Water scarcity and inconsistent yield",
      solution: "AI-powered irrigation scheduling + real-time monitoring",
      results: ["Water usage reduced by 35%", "Yield increased by 42%", "Cost savings: ₹12 lakhs/season"],
    },
    {
      location: "Saurashtra Region, Gujarat",
      crop: "Cotton",
      challenge: "High pesticide costs and environmental impact",
      solution: "Precision spraying drones + pest detection AI",
      results: [
        "Pesticide usage reduced by 60%",
        "Yield maintained, quality improved",
        "Cost savings: ₹8 lakhs/season",
      ],
    },
    {
      location: "Malwa Plateau, Madhya Pradesh",
      crop: "Soybean",
      challenge: "Nutrient deficiencies causing low yields",
      solution: "Spectral imaging analysis + targeted fertilization",
      results: ["Yield increased by 38%", "Fertilizer cost reduced by 25%", "Healthier soil sustainability"],
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background to-blue-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">Real Impact</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Case Studies from Across India</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary hover:shadow-xl transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide">{study.crop}</p>
                  <h3 className="text-lg font-bold text-foreground">{study.location}</h3>
                </div>
                <TrendingUp className="text-accent group-hover:scale-110 transition-transform" size={24} />
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold mb-1">Challenge</p>
                  <p className="text-sm text-foreground">{study.challenge}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold mb-1">Solution</p>
                  <p className="text-sm text-foreground">{study.solution}</p>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <p className="text-xs text-muted-foreground uppercase font-semibold mb-3">Results</p>
                <ul className="space-y-2">
                  {study.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="text-primary font-bold mt-0.5">✓</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
