import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, location, interests } = body

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create email content
    const emailContent = `
New Comfina Waitlist Signup:

Name: ${firstName} ${lastName}
Email: ${email}
Location: ${location || "Not provided"}
Interests: ${interests?.join(", ") || "None selected"}

Submitted at: ${new Date().toLocaleString()}
IP Address: ${request.headers.get("x-forwarded-for") || "Unknown"}
User Agent: ${request.headers.get("user-agent") || "Unknown"}
    `

    // In a production environment, you would:
    // 1. Save to database
    // 2. Send email via service like SendGrid, Resend, or Nodemailer
    // 3. Add to email marketing list
    // 4. Send confirmation email to user

    // For now, we'll log the submission and return success
    console.log("Waitlist submission:", {
      firstName,
      lastName,
      email,
      location,
      interests,
      timestamp: new Date().toISOString(),
    })

    // Simulate email sending to comfina.in@gmail.com
    // In production, replace this with actual email service
    console.log("Email would be sent to: comfina.in@gmail.com")
    console.log("Email content:", emailContent)

    return NextResponse.json({
      success: true,
      message: "Successfully joined the waitlist!",
    })
  } catch (error) {
    console.error("Error processing waitlist signup:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
