import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import {
  ToastProvider,
  ToastViewport,
} from "@/components/ui/toaster" // ✅ Fix import

import { ThemeProvider } from "@/components/theme-provider" // See issue #2

export const metadata: Metadata = {
  title: "Teacher Dashboard",
  description: "Teacher Dashboard for managing classes and tests",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <>
        <ThemeProvider attribute="class" defaultTheme="light">
          <ToastProvider>
            {children}
            <ToastViewport />
          </ToastProvider>
        </ThemeProvider>
      </>
    </>
  )
}
