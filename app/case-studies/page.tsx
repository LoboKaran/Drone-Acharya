"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { TranslationProvider } from "@/components/translation-provider"
import CaseStudySection from "@/components/case-study-section"
import { Card } from "@/components/ui/card"
import { TrendingUp, Users, Award } from "lucide-react"

function CaseStudiesContent() {
  const caseStudies = [
    {
      title: "Increased Yield by 35% in Sugarcane Farms",
      location: "Maharashtra",
      farmer: "Rajesh Patil",
      challenge: "Inconsistent yields due to uneven fertilizer application and pest damage",
      solution: "Implemented Krishi Sahayak AI analysis with precision spraying",
      results: ["35% increase in sugarcane yield", "40% reduction in chemical usage", "₹2.5 lakhs saved annually"],
      image: "🌾",
    },
    {
      title: "Early Disease Detection Saved the Harvest",
      location: "Karnataka",
      farmer: "Priya Sharma",
      challenge: "Lost 60% of cotton crop to leaf spot disease",
      solution: "Real-time crop monitoring and AI-powered early warning system",
      results: ["Detected disease 10 days early", "Prevented crop loss of ₹5 lakhs", "20% improved crop quality"],
      image: "🚜",
    },
    {
      title: "Precision Spraying Reduced Labor Costs",
      location: "Punjab",
      farmer: "Harpreet Singh",
      challenge: "High labor costs for manual spraying on 50 acres",
      solution: "Drone-based precision spraying system",
      results: ["80% reduction in labor time", "₹1 lakh saved per spray cycle", "Complete field coverage in 2 hours"],
      image: "🛸",
    },
  ]

  return (
    <main className="bg-background">
      <Header />
      <div className="pt-24">
        {/* Hero */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4">Success Stories</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real farmers, real results. See how Krishi Sahayak transformed their farming operations.
            </p>
          </div>
        </section>

        {/* Featured Case Studies */}
        <CaseStudySection />

        {/* Detailed Case Studies */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Farmer Success Stories</h2>
          <div className="space-y-12">
            {caseStudies.map((study, i) => (
              <Card key={i} className="p-8 hover:shadow-lg transition-all">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-7xl text-center">{study.image}</div>
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">{study.title}</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        <span className="font-semibold text-foreground">{study.farmer}</span>
                      </div>
                      <div className="text-muted-foreground">{study.location}</div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-foreground text-sm uppercase text-muted-foreground mb-1">
                          Challenge
                        </p>
                        <p className="text-foreground">{study.challenge}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm uppercase text-muted-foreground mb-1">
                          Solution
                        </p>
                        <p className="text-foreground">{study.solution}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm uppercase text-muted-foreground mb-2">
                          Results
                        </p>
                        <ul className="space-y-2">
                          {study.results.map((result, j) => (
                            <li key={j} className="flex items-center gap-2 text-foreground">
                              <TrendingUp className="w-5 h-5 text-primary" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-16 px-6 max-w-7xl mx-auto bg-primary/5 rounded-lg">
          <h2 className="text-4xl font-bold text-center mb-12">Overall Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Farmers Using Krishi Sahayak", value: "2,500+" },
              { label: "Average Yield Increase", value: "32%" },
              { label: "Total Area Covered", value: "50,000 acres" },
              { label: "Revenue Generated for Farmers", value: "₹25 Cr+" },
            ].map((stat, i) => (
              <div key={i}>
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}

export default function CaseStudiesPage() {
  return (
    <TranslationProvider>
      <CaseStudiesContent />
    </TranslationProvider>
  )
}
