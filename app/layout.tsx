import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Nagananda P - Software Engineer | Data Engineer | MCA Student",
  description:
    "Professional portfolio of Nagananda P - Software Engineer, Data Engineer, and MCA Student specializing in ETL pipelines, machine learning, and full-stack development.",
  keywords: ["Software Engineer", "Data Engineer", "MCA Student", "ETL Pipeline", "Machine Learning", "Python", "Java"],
  authors: [{ name: "Nagananda P" }],
  creator: "Nagananda P",
  openGraph: {
    title: "Nagananda P - Software Engineer | Data Engineer",
    description:
      "Professional portfolio showcasing projects in data engineering, machine learning, and software development.",
    url: "https://nagananda-portfolio.vercel.app",
    siteName: "Nagananda P Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nagananda P - Software Engineer | Data Engineer",
    description:
      "Professional portfolio showcasing projects in data engineering, machine learning, and software development.",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${inter.variable} antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            {children}
            <Toaster />
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
