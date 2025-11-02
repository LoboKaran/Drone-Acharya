"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { TranslationProvider } from "@/components/translation-provider"
import PricingSection from "@/components/pricing-section"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

function PricingContent() {
  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small farms up to 5 acres",
      price: "₹5,000",
      period: "per month",
      features: [
        "Up to 5 acres monitoring",
        "Weekly crop analysis",
        "Mobile app access",
        "Email support",
        "Basic weather alerts",
        "Monthly insights report",
      ],
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for medium farms 5-25 acres",
      price: "₹15,000",
      period: "per month",
      features: [
        "Up to 25 acres monitoring",
        "Daily crop analysis",
        "Drone spraying coordination",
        "Priority phone support",
        "Advanced weather forecasting",
        "Weekly insights & recommendations",
        "Custom alerts & thresholds",
        "API access",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large-scale commercial operations",
      price: "Custom",
      period: "contact sales",
      features: [
        "Unlimited acreage",
        "Real-time analysis",
        "Dedicated drone team",
        "24/7 premium support",
        "Custom AI model training",
        "Daily reports & analytics",
        "Integration with farm management systems",
        "White-label solutions",
      ],
      popular: false,
    },
  ]

  const addOns = [
    { name: "Drone Spraying Service", price: "₹500/acre/visit" },
    { name: "Soil Testing Kit", price: "₹2,000/kit" },
    { name: "Premium Analytics", price: "₹3,000/month" },
    { name: "Consulting Service", price: "₹5,000/session" },
  ]

  return (
    <main className="bg-background">
      <Header />
      <div className="pt-24">
        {/* Hero */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your farm size and needs. Scale as you grow.
            </p>
          </div>
        </section>

        {/* Main Pricing Section */}
        <PricingSection />

        {/* Detailed Pricing Table */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Plan Comparison</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, i) => (
              <Card
                key={i}
                className={`p-8 relative transition-all hover:shadow-xl ${
                  plan.popular ? "ring-2 ring-primary lg:scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-foreground">{plan.price}</div>
                  <div className="text-sm text-muted-foreground">{plan.period}</div>
                </div>
                <Button
                  className={`w-full mb-8 ${
                    plan.popular ? "bg-primary hover:bg-primary/90" : "border border-primary text-primary"
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Get Started
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Add-ons & Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, i) => (
              <Card key={i} className="p-6 text-center hover:shadow-lg transition-all">
                <h3 className="font-semibold text-foreground mb-2">{addon.name}</h3>
                <p className="text-lg font-bold text-primary">{addon.price}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                q: "Can I switch plans anytime?",
                a: "Yes, you can upgrade or downgrade your plan monthly with no penalty.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, UPI, and bank transfers.",
              },
              {
                q: "Is there a free trial?",
                a: "Yes, we offer a 14-day free trial of our Professional plan for new users.",
              },
              { q: "Do you offer discounts for annual billing?", a: "Yes, get 20% off when you pay annually." },
            ].map((item, i) => (
              <Card key={i} className="p-6">
                <h3 className="font-bold text-foreground mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}

export default function PricingPage() {
  return (
    <TranslationProvider>
      <PricingContent />
    </TranslationProvider>
  )
}
