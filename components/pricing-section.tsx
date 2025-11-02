"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useState } from "react"

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("monthly")

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small farms",
      price: billingCycle === "monthly" ? "₹999" : "₹9,990",
      period: billingCycle === "monthly" ? "/month" : "/year",
      features: [
        "Up to 10 acres coverage",
        "Weekly AI analysis reports",
        "Email support",
        "Basic mobile app",
        "5 languages",
      ],
      popular: false,
    },
    {
      name: "Professional",
      description: "Most popular for active farmers",
      price: billingCycle === "monthly" ? "₹2,999" : "₹29,990",
      period: billingCycle === "monthly" ? "/month" : "/year",
      features: [
        "Up to 50 acres coverage",
        "Daily AI analysis & alerts",
        "Priority support",
        "Advanced mobile app",
        "All 9 languages",
        "Precision spraying integration",
        "Custom recommendations",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For cooperatives & large farms",
      price: "Custom",
      period: "pricing",
      features: [
        "Unlimited acres",
        "Real-time monitoring",
        "24/7 dedicated support",
        "Custom integrations",
        "Team management",
        "Advanced analytics",
        "API access",
        "On-premise deployment option",
      ],
      popular: false,
    },
  ]

  return (
    <section className="py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">Transparent Pricing</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">Plans for Every Farm</h2>

          {/* Billing toggle */}
          <div className="flex justify-center items-center gap-4 mb-12">
            <span
              className={`text-sm font-medium ${billingCycle === "monthly" ? "text-foreground" : "text-muted-foreground"}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className="relative w-14 h-8 bg-primary rounded-full transition-colors hover:bg-primary/90 flex items-center px-1"
            >
              <div
                className={`w-6 h-6 bg-white rounded-full transition-transform ${
                  billingCycle === "yearly" ? "translate-x-6" : ""
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium ${billingCycle === "yearly" ? "text-foreground" : "text-muted-foreground"}`}
            >
              Yearly <span className="text-primary text-xs">Save 17%</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl border transition-all relative ${
                plan.popular
                  ? "border-primary shadow-xl scale-105 md:scale-100 lg:scale-105"
                  : "border-gray-200 hover:border-primary/50 hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className={`p-8 ${plan.popular ? "bg-gradient-to-br from-primary/5 to-white" : "bg-white"}`}>
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                <Button
                  className={`w-full mb-8 font-semibold py-6 transition-all hover:scale-105 ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-white"
                      : "bg-background border border-gray-200 text-foreground hover:bg-muted"
                  }`}
                >
                  Get Started
                </Button>

                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 bg-blue-50/50 rounded-xl border border-blue-100 text-center">
          <p className="text-foreground font-semibold mb-2">Need a custom solution?</p>
          <p className="text-muted-foreground">
            Contact our sales team for enterprise pricing and special arrangements for NGOs and cooperative societies.
          </p>
        </div>
      </div>
    </section>
  )
}
