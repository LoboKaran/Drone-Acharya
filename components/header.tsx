"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/components/translation-provider"

const languages = [
  { code: "en", name: "English", native: "English" },
  { code: "hi", name: "Hindi", native: "हिंदी" },
  { code: "mr", name: "Marathi", native: "मराठी" },
  { code: "bn", name: "Bengali", native: "বাঙ্গালি" },
  { code: "ta", name: "Tamil", native: "தமிழ்" },
  { code: "te", name: "Telugu", native: "తెలుగు" },
  { code: "kn", name: "Kannada", native: "ಕನ್ನಡ" },
  { code: "gu", name: "Gujarati", native: "ગુજરાતી" },
  { code: "pa", name: "Punjabi", native: "ਪੰਜਾਬੀ" },
]

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { currentLanguage, setCurrentLanguage } = useTranslation()
  const [selectedLanguage, setSelectedLanguage] = useState(
    languages.find((l) => l.code === currentLanguage) || languages[0],
  )
  const [isTranslating, setIsTranslating] = useState(false)

  const navItems = ["Features", "Pricing", "Case Studies", "About", "Contact"]

  const handleLanguageChange = (lang: any) => {
    setSelectedLanguage(lang)
    setCurrentLanguage(lang.code)
    setIsDropdownOpen(false)
    setIsTranslating(true)

    // Use Google Translate to change language
    const googleTranslateCombo = document.querySelector(".goog-te-combo") as HTMLSelectElement
    if (googleTranslateCombo) {
      googleTranslateCombo.value = lang.code
      googleTranslateCombo.dispatchEvent(new Event("change"))

      setTimeout(() => {
        setIsTranslating(false)
      }, 500)
    }
  }

  useEffect(() => {
    const lang = languages.find((l) => l.code === currentLanguage) || languages[0]
    setSelectedLanguage(lang)
  }, [currentLanguage])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
            <span className="text-white font-bold text-lg">🌾</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground tracking-tight">Drone Acharya</h1>
            <p className="text-xs text-muted-foreground">Farmer Assistant</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const href = `/${item.toLowerCase().replace(/\s+/g, "-")}`
            return (
              <a
                key={item}
                href={href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            )
          })}
        </nav>

        {/* Right section */}
        <div className="flex items-center gap-4">
          {/* Language Toggle Dropdown with Translation Status */}
          <div className="relative hidden sm:block">
            <Button
              variant="outline"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              disabled={isTranslating}
              className={`flex items-center gap-2 bg-background border-gray-200 hover:bg-muted transition-all ${
                isTranslating ? "opacity-60 cursor-wait" : ""
              }`}
            >
              <span className="text-sm font-medium">{selectedLanguage.native}</span>
              <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
              {isTranslating && (
                <span className="ml-1 inline-block h-3 w-3 bg-primary rounded-full animate-pulse"></span>
              )}
            </Button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden animate-in fade-in slide-in-from-top-2">
                <div className="p-3 bg-muted border-b border-gray-100">
                  <p className="text-xs font-semibold text-muted-foreground uppercase">Select Language</p>
                  <p className="text-xs text-muted-foreground mt-1">Auto-detected: {selectedLanguage.native}</p>
                </div>
                <div className="grid grid-cols-2 gap-1 p-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang)}
                      disabled={isTranslating}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-all hover:scale-105 disabled:opacity-50 ${
                        selectedLanguage.code === lang.code
                          ? "bg-primary text-white"
                          : "bg-background hover:bg-muted text-foreground"
                      }`}
                    >
                      <div className="font-semibold">{lang.native}</div>
                      <div className="text-xs opacity-75">{lang.name}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white animate-in fade-in slide-in-from-top-2">
          <nav className="p-4 space-y-3">
            {navItems.map((item) => {
              const href = `/${item.toLowerCase().replace(/\s+/g, "-")}`
              return (
                <a
                  key={item}
                  href={href}
                  className="block text-sm font-medium text-foreground hover:text-primary transition-colors p-2"
                >
                  {item}
                </a>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
