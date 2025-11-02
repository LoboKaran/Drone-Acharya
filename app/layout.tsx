import type React from "react"
import type { Metadata } from "next"
import {
  Geist,
  Geist_Mono,
  Noto_Sans_Devanagari,
  Noto_Sans_Bengali,
  Noto_Sans_Tamil,
  Noto_Sans_Telugu,
  Noto_Sans_Kannada,
  Noto_Sans_Gujarati,
  Noto_Sans_Gurmukhi,
} from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const _notoDevanagari = Noto_Sans_Devanagari({ subsets: ["latin", "devanagari"], weight: ["400", "700"] })
const _notoBengali = Noto_Sans_Bengali({ subsets: ["latin", "bengali"], weight: ["400", "700"] })
const _notoTamil = Noto_Sans_Tamil({ subsets: ["latin", "tamil"], weight: ["400", "700"] })
const _notoTelugu = Noto_Sans_Telugu({ subsets: ["latin", "telugu"], weight: ["400", "700"] })
const _notoKannada = Noto_Sans_Kannada({ subsets: ["latin", "kannada"], weight: ["400", "700"] })
const _notoGujarati = Noto_Sans_Gujarati({ subsets: ["latin", "gujarati"], weight: ["400", "700"] })
const _notoGurmukhi = Noto_Sans_Gurmukhi({ subsets: ["latin", "gurmukhi"], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: "Drone Acharya - AI-Powered Precision Agriculture",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                  pageLanguage: 'en',
                  includedLanguages: 'en,hi,mr,bn,ta,te,kn,gu,pa',
                  autoDisplay: false
                }, 'google_translate_element');
              }
            `,
          }}
        ></script>
        <script async src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
