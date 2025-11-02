"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { TranslationProvider } from "@/components/translation-provider"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

function ContactContent() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    { icon: Mail, label: "Email", value: "support@krishisahayak.com" },
    { icon: Phone, label: "Phone", value: "+91-8877-556644" },
    { icon: MapPin, label: "Address", value: "Pune, Maharashtra, India" },
    { icon: Clock, label: "Support Hours", value: "9 AM - 6 PM IST" },
  ]

  return (
    <main className="bg-background">
      <Header />
      <div className="pt-24">
        {/* Hero */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Reach out to our team anytime.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, i) => {
              const Icon = info.icon
              return (
                <Card key={i} className="p-6 text-center hover:shadow-lg transition-all">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground mb-2">{info.label}</p>
                  <p className="font-semibold text-foreground">{info.value}</p>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your message..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
                {submitted && <p className="text-green-600 text-center font-semibold">Message sent successfully!</p>}
              </form>
            </Card>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Why Contact Us?</h2>
                <ul className="space-y-3 text-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span>Get a personalized demo of Krishi Sahayak</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span>Discuss pricing and plans for your farm</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span>Schedule training and onboarding</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span>Report technical issues</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span>Provide feedback and suggestions</span>
                  </li>
                </ul>
              </div>

              <Card className="p-6 bg-primary/10">
                <h3 className="font-bold text-foreground mb-2">Quick Response</h3>
                <p className="text-foreground">
                  We typically respond to inquiries within 2 hours during business hours. For urgent issues, call us
                  directly.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Common Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "How quickly can I get started?",
                a: "You can sign up and start using Krishi Sahayak within 24 hours. We'll help with setup and initial configuration.",
              },
              {
                q: "Do you offer free trials?",
                a: "Yes! We offer a 14-day free trial of our Professional plan with no credit card required.",
              },
              {
                q: "What's your customer support like?",
                a: "We offer email, phone, and WhatsApp support during business hours. Premium plans include priority support.",
              },
              {
                q: "Can you help with drone operations?",
                a: "Yes, we can connect you with our partner drone operators for precision spraying services.",
              },
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

export default function ContactPage() {
  return (
    <TranslationProvider>
      <ContactContent />
    </TranslationProvider>
  )
}
