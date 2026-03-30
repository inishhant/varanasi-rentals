"use client"

import { useState, useEffect } from "react"
import BikeDetails from "@/components/BikeDetails"
import {bikes} from "@/data/bikes"
import { useRouter, useSearchParams } from "next/navigation"
import { showError, showSuccess } from "@/utils/toast"
import Loader from "@/components/Loader"
import OtpVerification from "@/components/OtpVerification"


export default function Booking() {

  const searchParams = useSearchParams()
  const router = useRouter()

  const bikeId = searchParams.get("bike")

  const [loading, setLoading] = useState(false)
  const [showOtp, setShowOtp] = useState(false)
  const [bike, setBike] = useState(null)
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    bike: "",
    pickupDate: "",
    returnDate: "",
    location: "",
    idType: "",
    idNumber: "",
    helmet: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    })
  }

  useEffect(()=>{
    const foundBike = bikes.find((b) => b.id === form.bike)
    setBike(foundBike)
  },[form.bike])

  useEffect(()=>{
    if(bikeId){
      const foundBike = bikes.find((b) => b.id === bikeId)
      setBike(foundBike)
  
      // remove query param
      router.replace("/bookMyRide")
    }
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // const res = await fetch("/api/booking", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(form)
    // })

    // const data = await res.json()
    await sendEmailOtp()
    setShowOtp(true)
    setLoading(false)
    
  }

  const sendEmailOtp = async () => {
    if(!form?.email){
      showError("Please enter email")
      return;
    }
    const res = await fetch("/api/send-email-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: form.email
      })
    })

    const data = await res.json()

    if (data.success) {
      showSuccess("OTP sent to your email")
    } else {
      showError("Failed to send OTP")
    }

  }

  return (

    (!loading && !showOtp? 
      <div className="p-10">
            <h1 className="text-3xl font-bold mb-6 text-center">
              Book Your Ride
            </h1>
        <div className="flex">
          <div className="flex flex-col w-1/2">

            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-lg rounded-xl p-8 flex flex-col gap-4"
            >

              <select
                name="bike"
                className="border p-3 rounded-lg hover:border-temple"
                onChange={handleChange}
                value={bike?.id}
              >
                <option value="">Select Bike</option>
                {bikes.map((bike, i) => (
                  <option value={bike.id} key={i}>{bike.name}</option>
                ))}
              </select>

              <input
                name="name"
                placeholder="Full Name"
                required
                onChange={handleChange}
                className="border p-3 rounded-lg hover:border-temple"
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                onChange={handleChange}
                className="border p-3 rounded-lg hover:border-temple"
              />

              <input
                name="phone"
                placeholder="Phone Number"
                required
                onChange={handleChange}
                className="border p-3 rounded-lg hover:border-temple"
              />

              <div className="grid grid-cols-2 gap-4">

                <input
                  type="date"
                  name="pickupDate"
                  required
                  onChange={handleChange}
                  className="border p-3 rounded-lg hover:border-temple"
                />

                <input
                  type="date"
                  name="returnDate"
                  required
                  onChange={handleChange}
                  className="border p-3 rounded-lg hover:border-temple"
                />

              </div>

              <select
                name="location"
                required
                onChange={handleChange}
                className="border p-3 rounded-lg hover:border-temple"
              >
                <option value="">Pickup Location</option>
                <option>Assi Ghat</option>
                <option>Varanasi Junction</option>
                <option>Godowlia</option>
              </select>

              <select
                name="idType"
                required
                onChange={handleChange}
                className="border p-3 rounded-lg hover:border-temple"
              >
                <option value="">ID Proof</option>
                <option>Aadhar Card</option>
                <option>Driving License</option>
                <option>Passport</option>
              </select>

              <input
                name="idNumber"
                placeholder="ID Number"
                required
                onChange={handleChange}
                className="border p-3 rounded-lg hover:border-temple"
              />

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="helmet"
                  onChange={handleChange}
                />
                Need Helmet
              </label>

              <button
                className="bg-temple text-white p-3 rounded-lg hover:bg-orange-600"
              >
                Confirm Booking
              </button>

            </form>

          </div>

          {bike && Object.keys(bike).length>0 && <div className="w-1/2"><BikeDetails bike={bike} bookButton={false}/></div>}
        </div>

      </div> : !loading && showOtp? <OtpVerification/>: <Loader/>)
  )
}