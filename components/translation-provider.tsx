"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

interface TranslationContextType {
  currentLanguage: string
  setCurrentLanguage: (lang: string) => void
  isLoading: boolean
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguageState] = useState("en")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const initializeTranslation = async () => {
      // Check if user has a saved language preference
      const savedLanguage = typeof window !== "undefined" ? localStorage.getItem("krishi-language") : null

      let targetLanguage = "en"

      if (savedLanguage) {
        targetLanguage = savedLanguage
        console.log("[v0] Using saved language preference:", targetLanguage)
      } else {
        // Get browser language as fallback
        const browserLang = navigator.language.split("-")[0] || "en"

        // Map common languages to our supported languages
        const languageMap: Record<string, string> = {
          hi: "hi",
          mr: "mr",
          bn: "bn",
          ta: "ta",
          te: "te",
          kn: "kn",
          gu: "gu",
          pa: "pa",
          en: "en",
        }

        targetLanguage = languageMap[browserLang] || "en"
        console.log("[v0] Auto-detected browser language:", browserLang, "Mapped to:", targetLanguage)
      }

      setCurrentLanguageState(targetLanguage)

      // Wait for Google Translate to be ready
      await waitForGoogleTranslate()

      // Apply the language
      if (targetLanguage !== "en") {
        changeLanguage(targetLanguage)
      }

      setIsLoading(false)
    }

    initializeTranslation()
  }, [])

  const waitForGoogleTranslate = async (maxAttempts = 20) => {
    for (let i = 0; i < maxAttempts; i++) {
      const comboBox = document.querySelector(".goog-te-combo") as HTMLSelectElement
      if (comboBox) {
        return true
      }
      await new Promise((resolve) => setTimeout(resolve, 100))
    }
    return false
  }

  const changeLanguage = (languageCode: string) => {
    try {
      const googleTranslateCombo = document.querySelector(".goog-te-combo") as HTMLSelectElement
      if (googleTranslateCombo) {
        googleTranslateCombo.value = languageCode
        googleTranslateCombo.dispatchEvent(new Event("change"))
        localStorage.setItem("krishi-language", languageCode)
        console.log("[v0] Language changed to:", languageCode)
      }
    } catch (error) {
      console.log("[v0] Error changing language:", error)
    }
  }

  const setCurrentLanguage = (lang: string) => {
    setCurrentLanguageState(lang)
    changeLanguage(lang)
  }

  return (
    <TranslationContext.Provider value={{ currentLanguage, setCurrentLanguage, isLoading }}>
      {/* Hidden container for Google Translate */}
      <div id="google_translate_element" style={{ visibility: "hidden", height: 0 }}></div>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (!context) {
    throw new Error("useTranslation must be used within TranslationProvider")
  }
  return context
}
