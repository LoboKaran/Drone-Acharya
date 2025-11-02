"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { TranslationProvider } from "@/components/translation-provider"
import { Card } from "@/components/ui/card"
import { Users, Target, Lightbulb, Heart } from "lucide-react"

function AboutContent() {
  const team = [
    { name: "Dr.Kanak Bhatkal", role: "Founder & CEO", expertise: "AI & Agriculture Tech" },
    { name: "Sara Mandlecha", role: "CTO", expertise: "Machine Learning & Drones" },
    { name: " Venya Pruthi", role: "COO", expertise: "Farm Operations & Supply Chain" },
    { name: "Mrunmayi Palande", role: "VP Product", expertise: "Agricultural Solutions" },
  ]

  const values = [
    {
      icon: Heart,
      title: "Farmer First",
      description: "Everything we build is designed with the farmer's needs at the center.",
    },
    {
      icon: Target,
      title: "Sustainable Impact",
      description: "We're committed to reducing chemical usage and environmental impact.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuous innovation in AI, drone technology, and agricultural science.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive community of farmers leveraging technology.",
    },
  ]

  return (
    <main className="bg-background">
      <Header />
      <div className="pt-24">
        {/* Hero */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4">About Drone Acharya</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering Indian farmers with AI and drone technology to increase yields, reduce costs, and build a
              sustainable future.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-lg text-foreground leading-relaxed">
                To revolutionize Indian agriculture by making cutting-edge AI and drone technology accessible and
                affordable for every farmer, enabling them to maximize yields, minimize environmental impact, and
                improve their livelihoods.
              </p>
            </Card>
            <Card className="p-8 bg-gradient-to-br from-accent/10 to-primary/10">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-lg text-foreground leading-relaxed">
                A future where every farmer in India has access to world-class agricultural technology, resulting in
                higher yields, lower costs, better quality produce, and sustainable farming practices that benefit both
                farmers and the environment.
              </p>
            </Card>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <Card key={i} className="p-6 text-center hover:shadow-lg transition-all">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Story */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-foreground leading-relaxed">
              <p>
                Drone Acharya was born from a simple observation: Indian farmers, despite their hard work and
                expertise, were losing significant portions of their crops to preventable diseases, pests, and
                inefficient farming practices.
              </p>
              <p>
                Our founder, Dr. Amit Sharma, spent years working with farmers across Maharashtra, Karnataka, and
                Punjab. He saw firsthand how a small investment in technology could transform their yields and
                livelihoods. This inspired him to build a solution specifically designed for Indian farmers.
              </p>
              <p>
                Today, Drone Acharya combines cutting-edge AI, drone technology, and deep agricultural expertise to
                help farmers make better decisions. Our platform analyzes crop health in real-time, detects diseases
                early, and enables precision farming—all at a price point that makes sense for Indian agriculture.
              </p>
              <p>
                We're not just building software; we're building the future of Indian farming. Every farmer we help
                becomes more productive, more profitable, and more sustainable.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <Card key={i} className="p-6 text-center hover:shadow-lg transition-all">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                <p className="font-semibold text-primary">{member.role}</p>
                <p className="text-sm text-muted-foreground mt-2">{member.expertise}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Milestones */}
        <section className="py-16 px-6 max-w-7xl mx-auto bg-primary/5 rounded-lg">
          <h2 className="text-4xl font-bold text-center mb-12">Key Milestones</h2>
          <div className="space-y-8 max-w-2xl mx-auto">
            {[
              { year: "2020", milestone: "Drone Acharya founded with focus on AI crop analysis" },
              { year: "2021", milestone: "Launched drone-based precision spraying service" },
              { year: "2022", milestone: "Reached 1,000 farmers across 3 states" },
              { year: "2023", milestone: "Expanded to 10 states, 2,500+ farmers" },
              { year: "2024", milestone: "Launched multi-language support for regional accessibility" },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white font-bold">
                    {item.year}
                  </div>
                </div>
                <div className="pt-2">
                  <p className="text-lg font-semibold text-foreground">{item.milestone}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}

export default function AboutPage() {
  return (
    <TranslationProvider>
      <AboutContent />
    </TranslationProvider>
  )
}
