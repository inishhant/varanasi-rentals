import nodemailer from "nodemailer"

export async function POST(req) {

  const { email } = await req.json()

  const otp = Math.floor(100000 + Math.random() * 900000)

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "nishant.nk.02@gmail.com",
      pass: "aqoy pckr szmv bymc"
    }
  })

  await transporter.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject: "Your Booking OTP",
    text: `Your OTP is ${otp}`
  })

  return Response.json({ success: true })
}