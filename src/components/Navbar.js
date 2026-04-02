import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="backdrop-blur-xl bg-white/75 border-b border-primaryLight/30 text-gray-900 px-10 py-2 flex items-center justify-between sticky top-0 z-50 transition-all duration-500 shadow-sm">
      <div className="relative flex items-center w-[272px]">

        <img 
          src="/images/KRR.png"
          alt="Kashi Ride Rentals"
          className="h-16 object-contain"
        />

        <div className="flex absolute right-0">
          <h1 className="font-bold text-xl text-primaryDark">
            Kashi
          </h1>
          <h1 className="font-bold text-xl text-primary">
            RideRentals
          </h1>
        </div>

      </div>

      {/* Navigation */}
      <div className="flex gap-8 font-medium">

        <Link 
          href="/" 
          className="hover:text-primaryLight transition-colors duration-200"
        >
          Home
        </Link>

        <Link 
          href="/bikes" 
          className="hover:text-primaryLight transition-colors duration-200"
        >
          Bikes
        </Link>

        <Link 
          href="/bookMyRide" 
          className="hover:text-primaryLight transition-colors duration-200"
        >
          BookMyRide
        </Link>

        <Link 
          href="/blog" 
          className="hover:text-primaryLight transition-colors duration-200"
        >
          Blog
        </Link>

        <Link 
          href="/contact" 
          className="hover:text-primaryLight transition-colors duration-200"
        >
          Contact Us
        </Link>

        <Link 
          href="/admin" 
          className="hover:text-primaryLight transition-colors duration-200"
        >
          Admin
        </Link>

      </div>

    </nav>
  )
}