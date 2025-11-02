"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { TranslationProvider } from "@/components/translation-provider"
import FeatureAnalysis from "@/components/feature-analysis"
import FeatureSpraying from "@/components/feature-spraying"
import TechnologySection from "@/components/technology-section"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Zap, Shield, TrendingUp, Leaf, Smartphone } from "lucide-react"

function FeaturesContent() {
  const [selectedCategory, setSelectedCategory] = useState("ai-analysis")

  const features = {
    "ai-analysis": {
      title: "AI-Powered Crop Analysis",
      description: "Advanced machine learning models analyze crop health in real-time",
      benefits: [
        "Real-time disease detection with 99% accuracy",
        "Pest identification and early warning systems",
        "Nutrient deficiency detection",
        "Weather-adaptive recommendations",
      ],
    },
    "precision-spraying": {
      title: "Precision Spraying Technology",
      description: "Drone-based precision agriculture for optimal chemical application",
      benefits: [
        "70% reduction in chemical usage",
        "Uniform coverage with advanced sensors",
        "No manual labor for large fields",
        "Reduced environmental impact",
      ],
    },
    monitoring: {
      title: "Continuous Field Monitoring",
      description: "24/7 monitoring of your crops with real-time alerts",
      benefits: [
        "Early warning for crop diseases",
        "Soil moisture and pH monitoring",
        "Automated irrigation recommendations",
        "Historical data analytics",
      ],
    },
  }

  const categories = Object.keys(features)
  const currentFeature = features[selectedCategory as keyof typeof features]

  const coreCapabilities = [
    {
      icon: Zap,
      title: "Lightning-Fast Processing",
      description: "AI models process drone images in minutes, not hours",
    },
    {
      icon: Shield,
      title: "Data Privacy & Security",
      description: "Military-grade encryption protects your farm data",
    },
    {
      icon: TrendingUp,
      title: "Yield Improvement",
      description: "Average 25-40% increase in crop yield with our system",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Reduce chemical usage and minimize environmental impact",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Easy-to-use mobile app for farmers on-the-go",
    },
    {
      icon: TrendingUp,
      title: "Cost Savings",
      description: "ROI achieved within 2-3 seasons",
    },
  ]

  return (
    <main className="bg-background">
      <Header />
      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4">Features</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI-powered agricultural solutions designed for modern farming
            </p>
          </div>
        </section>

        {/* Feature Categories */}
        <section className="py-12 px-6 max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-foreground hover:bg-primary/10"
                }`}
              >
                {features[category as keyof typeof features].title}
              </button>
            ))}
          </div>

          {/* Selected Feature Details */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">{currentFeature.title}</h2>
              <p className="text-lg text-muted-foreground mb-8">{currentFeature.description}</p>
              <ul className="space-y-4">
                {currentFeature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-16 h-16 text-primary" />
                </div>
                <p className="text-muted-foreground">{currentFeature.title}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities Grid */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Core Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreCapabilities.map((capability, i) => {
              const Icon = capability.icon
              return (
                <Card key={i} className="p-8 hover:shadow-lg transition-all hover:scale-105">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{capability.title}</h3>
                  <p className="text-muted-foreground">{capability.description}</p>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Existing Sections */}
        <FeatureAnalysis />
        <FeatureSpraying />
        <TechnologySection />
      </div>
      <Footer />
    </main>
  )
}

export default function FeaturesPage() {
  return (
    <TranslationProvider>
      <FeaturesContent />
    </TranslationProvider>
  )
}
