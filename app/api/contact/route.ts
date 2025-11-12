import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, company, message, source, sendTo } = await req.json()

    // For lead widget submissions, only name and phone are required
    if (source === "chat-widget") {
      if (!firstName || !phone) {
        return NextResponse.json({ error: "Name and phone number are required" }, { status: 400 })
      }
    } else {
      // For regular contact form submissions
      if (!firstName || !lastName || !email || !message) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
      }
    }

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      service: "gmail", // Using Gmail service
      auth: {
        user: "chemparks.in@gmail.com", // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail app password (should be set in environment variables)
      },
    })

    // Determine email subject and content based on source
    const isLeadWidget = source === "chat-widget"
    const emailSubject = isLeadWidget
      ? `🚀 New Lead from Chat Widget - ${firstName}`
      : `New Contact Form Submission from ${firstName} ${lastName}`

    // Email content for admin team
    const adminEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #912F9F; border-bottom: 2px solid #FFD046; padding-bottom: 10px;">
          ${isLeadWidget ? '🚀 New Lead from Chat Widget' : 'New Contact Form Submission'} - ChemParks India
        </h2>

        <div style="background-color: ${isLeadWidget ? '#fff3cd' : '#f8f9fa'}; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid ${isLeadWidget ? '#ffc107' : '#912F9F'};">
          <h3 style="color: #333; margin-top: 0;">${isLeadWidget ? 'Lead Details:' : 'Contact Details:'}</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #912F9F; width: 150px;">Name:</td>
              <td style="padding: 8px;">${firstName} ${lastName || ''}</td>
            </tr>
            ${email ? `
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #912F9F;">Email:</td>
              <td style="padding: 8px;">${email}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #912F9F;">Phone:</td>
              <td style="padding: 8px; font-weight: bold; color: #28a745;">${phone}</td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #912F9F;">Company:</td>
              <td style="padding: 8px;">${company}</td>
            </tr>
            ` : ''}
            ${isLeadWidget ? `
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #912F9F;">Source:</td>
              <td style="padding: 8px;">
                <span style="background-color: #28a745; color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: bold;">
                  Chat Widget
                </span>
              </td>
            </tr>
            ` : ''}
          </table>
        </div>

        ${message ? `
        <div style="background-color: #fff; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h3 style="color: #333; margin-top: 0;">Message:</h3>
          <p style="line-height: 1.6; color: #555; font-style: italic;">${message}</p>
        </div>
        ` : ''}

        <div style="margin-top: 30px; padding: 20px; background-color: #912F9F; color: white; text-align: center; border-radius: 8px;">
          <h4 style="margin: 0; color: white;">ChemParks India</h4>
          <p style="margin: 5px 0; color: white;">Advanced Water & Environment Management Solutions</p>
          <p style="margin: 5px 0; color: #FFD046;">www.chemparks.in</p>
          <p style="margin: 10px 0 0; color: white; font-size: 12px;">
            Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
          </p>
        </div>
      </div>
    `

    // Email content for customer confirmation
    const customerEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #912F9F; text-align: center; padding: 20px 0;">
          Thank you for contacting ChemParks India
        </h2>

        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
          <p style="font-size: 18px; color: #333; margin: 0;">
            Dear <strong>${firstName} ${lastName}</strong>,
          </p>
          <p style="color: #555; line-height: 1.6; margin-top: 15px;">
            Thank you for your feedback! Our team will contact you soon.
          </p>
        </div>

        <div style="background-color: #e8f4f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #912F9F; margin-top: 0;">What happens next?</h3>
          <ul style="color: #555; line-height: 1.8;">
            <li>Our team will review your inquiry within 24 hours</li>
            <li>You'll receive a personalized response with relevant solutions</li>
            <li>Expert consultants will reach out to discuss your requirements</li>
            <li>We'll provide customized recommendations for your water treatment needs</li>
          </ul>
        </div>

        <div style="margin-top: 30px; padding: 20px; background-color: #912F9F; color: white; text-align: center; border-radius: 8px;">
          <h4 style="margin: 0; color: white;">ChemParks India</h4>
          <p style="margin: 5px 0; color: white;">Advanced Water & Environment Management Solutions</p>
          <p style="margin: 5px 0; color: #FFD046;">www.chemparks.in</p>
          <p style="margin: 10px 0 0; color: white; font-size: 14px;">
            Email: info@chemparks.in | Phone: +91-11-XXXX-XXXX
          </p>
        </div>
      </div>
    `

    // Send email to admin team
    const adminMailOptions = {
      from: "ChemParks India <chemparks.in@gmail.com>",
      to: sendTo || "info@chemparks.in", // Use custom sendTo if provided
      subject: emailSubject,
      html: adminEmailContent,
    }

    // Send confirmation email to customer (only if email is provided)
    if (email && email !== 'chemparks.in@gmail.com') {
      const customerMailOptions = {
        from: "ChemParks India <chemparks.in@gmail.com>",
        to: email,
        subject: "Thank you for contacting ChemParks India - We'll be in touch soon!",
        html: customerEmailContent,
      }

      await transporter.sendMail(customerMailOptions)
    }

    // Send admin email
    await transporter.sendMail(adminMailOptions)

    console.log("Emails sent successfully for contact form submission:", {
      firstName,
      lastName,
      email,
      phone,
      company,
      message,
    })

    return NextResponse.json({
      message: "Message received successfully! We'll contact you soon."
    }, { status: 200 })

  } catch (error) {
    console.error("Error processing contact form:", error)

    // More specific error handling
    if (error instanceof Error) {
      if (error.message.includes("Invalid login")) {
        return NextResponse.json({
          error: "Email service configuration error. Please contact administrator."
        }, { status: 500 })
      }
      if (error.message.includes("Greeting never received")) {
        return NextResponse.json({
          error: "Email service temporarily unavailable. Please try again later."
        }, { status: 503 })
      }
    }

    return NextResponse.json({
      error: "Failed to send message. Please try again or contact us directly at info@chemparks.in"
    }, { status: 500 })
  }
}
