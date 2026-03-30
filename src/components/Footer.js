"use client"

import Link from "next/link"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-temple to-orange-500 text-white">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Kashi Ride</h2>
          <p className="text-gray-400">
            Explore the beautiful streets and ghats of Varanasi with
            affordable bike rentals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/" className="hover:text-orange-500">Home</Link>
            </li>

            <li>
              <Link href="/bikes" className="hover:text-orange-500">Bikes</Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-orange-500">About</Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-orange-500">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>

          <ul className="space-y-2 text-gray-400">
            <li>Varanasi, India</li>
            <li>+91 98765 43210</li>
            <li>support@kashiride.com</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>

          <div className="flex gap-4 text-xl">

            <a href="#" className="hover:text-orange-500">
              <FaFacebook />
            </a>

            <a href="#" className="hover:text-orange-500">
              <FaInstagram />
            </a>

            <a href="#" className="hover:text-orange-500">
              <FaTwitter />
            </a>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white-800 text-center py-4 text-white-400 text-sm">
        © {new Date().getFullYear()} Kashi Ride Rentals. All rights reserved.
      </div>

    </footer>
  )
}