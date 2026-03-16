import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-temple text-white px-8 py-4 flex items-center justify-between sticky top-0 z-50 shadow-md">

      {/* Logo + Brand */}
      <div className="relative flex items-center">

        <img 
          src="/images/KRR.png"
          alt="Kashi Ride Rentals"
          className="h-20 object-contain"
        />

        <h1 className="absolute right-0 font-bold text-xl">
          Kashi Ride Rentals
        </h1>

      </div>

      {/* Navigation */}
      <div className="flex gap-8 font-medium">

        <Link 
          href="/" 
          className="hover:text-orange-300 transition-colors duration-200"
        >
          Home
        </Link>

        <Link 
          href="/bikes" 
          className="hover:text-orange-300 transition-colors duration-200"
        >
          Bikes
        </Link>

        <Link 
          href="/booking" 
          className="hover:text-orange-300 transition-colors duration-200"
        >
          Booking
        </Link>

        <Link 
          href="/admin" 
          className="hover:text-orange-300 transition-colors duration-200"
        >
          Admin
        </Link>

      </div>

    </nav>
  )
}