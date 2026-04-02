import { Outfit } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ToastProvider from "@/providers/ToastProvider"
import "./globals.css"

const outfit = Outfit({ subsets: ["latin"] })

export const metadata = {
  title: "Kashi Ride Rentals",
  description: "Premium Bike rental service in Varanasi",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen bg-bgSubtle text-gray-900 ${outfit.className}`}>
        <ToastProvider>

          <Navbar />

          <main className="flex-grow">
            {children}
          </main>

          <Footer />
          
        </ToastProvider>

      </body>
    </html>
  )
}