"use client"

import { useState, useRef, useEffect } from "react"
import { showError, showSuccess } from "@/utils/toast"

export default function OtpVerification({ email }) {

  const [otp, setOtp] = useState(new Array(6).fill(""))
  const [loading, setLoading] = useState(false)
  const [timer, setTimer] = useState(30)
  const [shake, setShake] = useState(false)

  const inputs = useRef([])

  // ⏱️ Timer countdown
  useEffect(() => {
    if (timer === 0) return

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [timer])

  // 🔢 Handle Input
  const handleChange = (value, index) => {

    if (!/^[0-9]?$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // move forward
    if (value && index < 5) {
      inputs.current[index + 1].focus()
    }

    // auto verify
    if (newOtp.join("").length === 6) {
      verifyOtp(newOtp.join(""))
    }
  }

  // ⬅️ Backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus()
    }
  }

  // 📋 Paste OTP
  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData("text").slice(0, 6)

    if (!/^\d+$/.test(pasteData)) return

    const newOtp = pasteData.split("")
    setOtp(newOtp)

    inputs.current[5].focus()

    verifyOtp(pasteData)
  }

  // ✅ Verify OTP
  const verifyOtp = async (code) => {

    setLoading(true)

    try {

    //   const res = await fetch("/api/verify-otp", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({ email, otp: code })
    //   })

    //   const data = await res.json()

    //   if (data.success) {
    //     showSuccess("Ride booked successfully 🚀")
    //   } else {
    //     showError("Invalid OTP")
    //     triggerShake()
    //     setOtp(new Array(6).fill(""))
    //     inputs.current[0].focus()
    //   }
      showSuccess("Ride booked successfully")
    } catch {
      showError("Verification failed")
    }

    setLoading(false)
  }

  // 💥 Shake animation
  const triggerShake = () => {
    setShake(true)
    setTimeout(() => setShake(false), 400)
  }

  // 🔁 Resend OTP
  const resendOtp = async () => {

    await fetch("/api/send-email-otp", {
      method: "POST",
      body: JSON.stringify({ email })
    })

    showSuccess("OTP resent successfully")
    setTimer(30)
  }

  return (

    <div className="flex flex-col items-center justify-center min-h-[70vh]">

      <h2 className="text-3xl font-bold text-black mb-2">
        Verify OTP
      </h2>

      <p className="text-gray-500 mb-6 text-center">
        Enter the OTP sent to {email}
      </p>

      {/* OTP Boxes */}
      <div
        className={`flex gap-3 ${shake ? "animate-shake" : ""}`}
        onPaste={handlePaste}
      >

        {otp.map((digit, index) => (

          <input
            key={index}
            type="text"
            maxLength="1"
            value={digit}

            ref={(el) => (inputs.current[index] = el)}

            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}

            className="
              w-12 h-12
              text-center
              text-xl
              border
              rounded-lg
              border-gray-300
              focus:border-temple
              focus:ring-2
              focus:ring-temple/30
              outline-none
              transition
            "
          />

        ))}

      </div>

      {/* Loader */}
      {loading && (
        <div className="mt-4 w-6 h-6 border-2 border-orange-200 border-t-temple rounded-full animate-spin"></div>
      )}

      {/* Resend */}
      <div className="mt-6 text-sm text-gray-500">

        {timer > 0 ? (
          <span>Resend OTP in {timer}s</span>
        ) : (
          <button
            onClick={resendOtp}
            className="text-temple font-semibold hover:underline"
          >
            Resend OTP
          </button>
        )}

      </div>

    </div>
  )
}