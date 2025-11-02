"use client"

import { Star } from "lucide-react"
import { useState, useEffect } from "react"

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Farmer, Maharashtra",
      image: "/indian-farmer.jpg",
      text: "Krishi Sahayak has transformed how I manage my sugarcane fields. The AI analysis helped me increase yield by 45% while reducing water usage by 30%.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Cooperative Head, Gujarat",
      image: "/woman-farmer.jpg",
      text: "The precision spraying feature alone saved our cooperative ₹50 lakhs in pesticide costs this season. Absolutely game-changing.",
      rating: 5,
    },
    {
      name: "Amit Singh",
      role: "Progressive Farmer, Punjab",
      image: "/punjabi-farmer.jpg",
      text: "Real-time alerts about pest infestations have helped us take action before major damage occurs. The 24/7 support team is incredibly responsive.",
      rating: 5,
    },
    {
      name: "Deepa Nair",
      role: "Farm Manager, Karnataka",
      image: "/farm-manager.jpg",
      text: "The multi-language interface makes it easy for all my farm workers to understand. Integration with our existing systems was seamless.",
      rating: 5,
    },
  ]

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [autoPlay, testimonials.length])

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50/50 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">Success Stories</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">Trusted by 500+ Farmers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Real results from real farmers across India</p>
        </div>

        <div className="relative">
          {/* Testimonials Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={16} className="fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                    <p className="text-foreground leading-relaxed italic">"{testimonial.text}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setAutoPlay(false)
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-gray-300 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
