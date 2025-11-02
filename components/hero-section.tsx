"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Play } from "lucide-react"

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-background via-blue-50/30 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                AI-Powered Precision for Every <span className="text-primary">Kisan</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                Transforming Indian agriculture with smart drones and artificial intelligence. Maximize yields, minimize
                waste, and cultivate sustainability.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-base rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Get Started Today
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setIsVideoOpen(true)}
                className="flex items-center gap-2 px-8 py-6 text-base rounded-lg hover:bg-muted transition-all"
              >
                <Play size={20} />
                Watch Demo
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="space-y-1">
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Farms Supported</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-primary">40%</p>
                <p className="text-sm text-muted-foreground">Avg Yield Increase</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-primary">₹2.5Cr+</p>
                <p className="text-sm text-muted-foreground">Cost Savings</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-primary">24/7</p>
                <p className="text-sm text-muted-foreground">Support Available</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 lg:h-full rounded-2xl overflow-hidden shadow-2xl hover:shadow-2xl transition-shadow duration-300 group">
            <img
              src="/precision-agriculture-drone-flying-over-indian-far.jpg"
              alt="Advanced drone flying over vibrant Indian farmland"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <ChevronDown className="text-primary" size={32} />
        </div>
      </div>

      {/* Video modal placeholder */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div className="bg-white rounded-xl p-2 max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <Play size={64} className="mx-auto mb-4 opacity-50" />
                <p>Demo Video Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
