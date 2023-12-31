import "./globals.css"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import Header from "@/components/layout/header"

const manrope = Manrope({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MSK",
  description: "Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
