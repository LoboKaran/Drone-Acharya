"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-primary via-primary/90 to-primary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">Ready to Transform Your Farm?</h2>
        <p className="text-lg text-white/90 mb-10 text-balance">
          Join 500+ farmers who are already increasing yields and reducing costs with Krishi Sahayak
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 text-primary font-semibold px-8 py-6 text-base rounded-lg transition-all hover:scale-105 flex items-center gap-2"
          >
            Start Your Free Trial
            <ArrowRight size={20} />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-base rounded-lg transition-all bg-transparent"
          >
            Schedule Demo
          </Button>
        </div>

        <p className="text-white/70 text-sm mt-8">No credit card required • 14-day free trial • Cancel anytime</p>
      </div>
    </section>
  )
}
