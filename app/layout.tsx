import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import "./globals.css"
import type React from "react"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Harshdeep Athawale - Cybersecurity Enthusiast",
  description: "Computer Engineering student passionate about cybersecurity, ethical hacking, and network security",
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
