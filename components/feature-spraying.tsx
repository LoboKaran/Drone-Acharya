"use client"

import { useState } from "react"
import { Droplets, Zap, Leaf, TrendingUp } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FeatureSpraying() {
  const [selectedDrone, setSelectedDrone] = useState(0)
  const [showComparison, setShowComparison] = useState(false)

  const drones = [
    {
      name: "KS-500",
      capacity: "5L",
      coverage: "15 acres/day",
      battery: "45 mins",
      accuracy: "±5cm",
      price: "₹4.5L",
      features: ["Ideal for small farms", "Easy maintenance", "Low cost of operation"],
    },
    {
      name: "KS-1000",
      capacity: "10L",
      coverage: "30 acres/day",
      battery: "55 mins",
      accuracy: "±3cm",
      price: "₹7.5L",
      features: ["Most popular model", "Balanced performance", "Excellent ROI"],
      popular: true,
    },
    {
      name: "KS-2000",
      capacity: "20L",
      coverage: "50 acres/day",
      battery: "65 mins",
      accuracy: "±2cm",
      price: "₹12L",
      features: ["Enterprise solution", "Maximum coverage", "Highest precision"],
    },
  ]

  const benefits = [
    {
      icon: Droplets,
      title: "60% Less Waste",
      description: "Precision targeting reduces chemical usage significantly",
    },
    {
      icon: TrendingUp,
      title: "30% Higher Yield",
      description: "Optimal nutrient distribution increases crop productivity",
    },
    {
      icon: Zap,
      title: "5x Faster",
      description: "Cover 50 acres in a single day vs weeks manually",
    },
    {
      icon: Leaf,
      title: "100% Eco-Friendly",
      description: "Reduces environmental contamination and soil damage",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">Autonomous Delivery</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">Precision Spraying Drones</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl">
            Autonomous drones deliver exact amounts of water, fertilizer, or pesticide where needed most. Save money,
            boost yields, and protect the environment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-foreground">Targeted Application, Sustainable Impact</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our advanced drone fleet combines AI-powered flight planning with precision nozzles to deliver
                treatments exactly where needed. Reduce waste by up to 60%, boost yields sustainably, and save money
                while protecting the environment.
              </p>
            </div>

            <ul className="space-y-3">
              {[
                "Precision water and chemical delivery systems",
                "AI-powered autonomous flight planning",
                "Real-time dosage optimization per field zone",
                "Environmental monitoring and compliance tracking",
                "Weather-adaptive spray scheduling",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 p-3 rounded hover:bg-white/50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all"
                  >
                    <Icon size={20} className="text-primary mb-2" />
                    <p className="font-semibold text-sm text-foreground">{benefit.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl group hover:shadow-3xl transition-all">
            <img
              src="/advanced-precision-spraying-drone-releasing-mist-o.jpg"
              alt="Autonomous spraying drone delivering precise mist over agricultural crops"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent" />

            {/* Interactive badge */}
            <div className="absolute bottom-4 left-4 bg-white/95 rounded-lg px-4 py-2 backdrop-blur-sm shadow-lg">
              <p className="text-xs font-semibold text-primary">Peak Efficiency Zone</p>
              <p className="text-xs text-foreground">±2cm accuracy spraying</p>
            </div>
          </div>
        </div>

        {/* Drone Models Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Choose Your Drone Model</h3>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {drones.map((drone, index) => (
              <div
                key={index}
                onClick={() => setSelectedDrone(index)}
                className={`cursor-pointer rounded-xl border-2 transition-all p-6 ${
                  selectedDrone === index
                    ? "border-primary bg-primary/5 shadow-lg"
                    : "border-gray-200 bg-white hover:border-primary/50 hover:shadow-md"
                } ${drone.popular ? "relative" : ""}`}
              >
                {drone.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Best Seller
                  </div>
                )}

                <h4 className="text-xl font-bold text-foreground mb-4">{drone.name}</h4>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Tank Capacity:</span>
                    <span className="font-semibold text-foreground">{drone.capacity}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Daily Coverage:</span>
                    <span className="font-semibold text-foreground">{drone.coverage}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Battery Life:</span>
                    <span className="font-semibold text-foreground">{drone.battery}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Accuracy:</span>
                    <span className="font-semibold text-foreground">{drone.accuracy}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-t border-gray-200 pt-3">
                    <span className="text-muted-foreground">Investment:</span>
                    <span className="font-bold text-accent">{drone.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Drone Details */}
          {selectedDrone !== null && (
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/20 animate-in fade-in slide-in-from-top-2">
              <h4 className="text-xl font-bold text-foreground mb-4">{drones[selectedDrone].name} - Key Features</h4>
              <div className="grid md:grid-cols-3 gap-4">
                {drones[selectedDrone].features.map((feature, i) => (
                  <div key={i} className="bg-white rounded-lg p-4 border border-gray-100">
                    <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <span className="text-primary font-bold">→</span>
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Comparison Section */}
        <div>
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Manual vs Krishi Sahayak Drones</h3>

          <Tabs defaultValue="efficiency" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="efficiency">Efficiency</TabsTrigger>
              <TabsTrigger value="cost">Cost Analysis</TabsTrigger>
              <TabsTrigger value="environmental">Environmental</TabsTrigger>
            </TabsList>

            <TabsContent value="efficiency" className="space-y-4">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-foreground">Manual Spraying</span>
                      <span className="text-sm text-muted-foreground">2 acres/day</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-400 h-2 rounded-full" style={{ width: "15%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-foreground">KS Drone System</span>
                      <span className="text-sm text-muted-foreground">50 acres/day</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "100%" }} />
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-6">25x faster coverage with drones</p>
              </div>
            </TabsContent>

            <TabsContent value="cost" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h4 className="font-semibold text-foreground mb-4">Manual Method (per season)</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Labor (₹500/day × 60 days)</span>
                      <span className="font-semibold">₹30,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Chemicals (full volume)</span>
                      <span className="font-semibold">₹45,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Equipment maintenance</span>
                      <span className="font-semibold">₹5,000</span>
                    </li>
                    <li className="border-t border-gray-200 pt-3 flex justify-between">
                      <span className="font-bold text-foreground">Total Cost</span>
                      <span className="font-bold text-accent text-lg">₹80,000</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-4">Drone System (per season)</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Drone rental/subscription</span>
                      <span className="font-semibold">₹12,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Chemicals (40% less)</span>
                      <span className="font-semibold">₹27,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Operator training</span>
                      <span className="font-semibold">₹3,000</span>
                    </li>
                    <li className="border-t border-gray-200 pt-3 flex justify-between">
                      <span className="font-bold text-foreground">Total Cost</span>
                      <span className="font-bold text-primary text-lg">₹42,000</span>
                    </li>
                    <li className="bg-accent/20 p-2 rounded text-primary font-bold mt-3 text-center">
                      Save ₹38,000/season
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="environmental" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-2xl">❌</span> Traditional Spraying Impact
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span className="text-foreground">60% chemical runoff into groundwater</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span className="text-foreground">Soil contamination and degradation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span className="text-foreground">Farmer health risks from exposure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span className="text-foreground">High water wastage</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-2xl">✓</span> Drone System Benefits
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span className="text-foreground">Zero runoff with precision targeting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span className="text-foreground">Preserves soil health and structure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span className="text-foreground">Zero farmer health hazards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span className="text-foreground">35% water savings with precision delivery</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
