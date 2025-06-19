import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Harshdeep Athawale - Cybersecurity Enthusiast",
  description: "Computer Engineering student passionate about cybersecurity, ethical hacking, and network security",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Suspense fallback={null}>{children}</Suspense>
      <Analytics />
    </>
  )
}
