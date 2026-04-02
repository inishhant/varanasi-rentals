"use client"

import Link from "next/link"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primaryDark to-primary text-gray-900">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Kashi Ride</h2>
          <p className="text-gray-800">
            Explore the beautiful streets and ghats of Varanasi with
            affordable bike rentals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-gray-800">
            <li>
              <Link href="/" className="hover:text-bgSubtle">Home</Link>
            </li>

            <li>
              <Link href="/bikes" className="hover:text-bgSubtle">Bikes</Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-bgSubtle">About</Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-bgSubtle">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>

          <ul className="space-y-2 text-gray-800">
            <li>Varanasi, India</li>
            <li>+91 98765 43210</li>
            <li>support@kashiride.com</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>

          <div className="flex gap-4 text-xl">

            <a href="#" className="hover:text-bgSubtle">
              <FaFacebook />
            </a>

            <a href="#" className="hover:text-bgSubtle">
              <FaInstagram />
            </a>

            <a href="#" className="hover:text-bgSubtle">
              <FaTwitter />
            </a>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-900/10 text-center py-4 text-gray-800 text-sm">
        © {new Date().getFullYear()} Kashi Ride Rentals. All rights reserved.
      </div>

    </footer>
  )
}