"use client"

import { useState, useEffect } from "react"
import { TranslationProvider } from "@/components/translation-provider"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeatureAnalysis from "@/components/feature-analysis"
import FeatureSpraying from "@/components/feature-spraying"
import TestimonialSection from "@/components/testimonial-section"
import PricingSection from "@/components/pricing-section"
import TechnologySection from "@/components/technology-section"
import CaseStudySection from "@/components/case-study-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

function PageContent() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="bg-background">
      <Header />
      <HeroSection />
      <FeatureAnalysis />
      <FeatureSpraying />
      <TechnologySection />
      <CaseStudySection />
      <TestimonialSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  )
}

export default function Home() {
  return (
    <TranslationProvider>
      <PageContent />
    </TranslationProvider>
  )
}
