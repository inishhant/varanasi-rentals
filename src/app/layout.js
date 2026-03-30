import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ToastProvider from "@/providers/ToastProvider"
import "./globals.css"

export const metadata = {
  title: "Kashi Ride Rentals",
  description: "Bike rental service in Varanasi",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
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