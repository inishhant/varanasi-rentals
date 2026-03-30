export async function POST(req) {

  const body = await req.json()

  console.log("Booking:", body)

  return Response.json({
    success: true,
    message: "Booking request received!"
  })
}