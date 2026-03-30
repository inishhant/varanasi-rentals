import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-temple to-orange-500 text-white px-8 flex items-center justify-between sticky top-0 z-50 shadow-md">

      {/* Logo + Brand */}
      <div className="relative flex items-center w-[272px]">

        <img 
          src="/images/KRR.png"
          alt="Kashi Ride Rentals"
          className="h-16 object-contain"
        />

        <div className="flex absolute right-0">
          <h1 className="font-bold text-xl text-orange">
            Kashi
          </h1>
          <h1 className="font-bold text-xl text-ganga">
            RideRentals
          </h1>
        </div>

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
          href="/bookMyRide" 
          className="hover:text-orange-300 transition-colors duration-200"
        >
          BookMyRide
        </Link>

        <Link 
          href="/blog" 
          className="hover:text-orange-300 transition-colors duration-200"
        >
          Blog
        </Link>

        <Link 
          href="/contact" 
          className="hover:text-orange-300 transition-colors duration-200"
        >
          Contact Us
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