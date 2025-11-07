import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Check if Resend is configured
    if (!resend) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the site administrator.' },
        { status: 500 }
      )
    }

    // Escape HTML to prevent XSS
    const escapeHtml = (text: string) => {
      return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
    }

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message)
    const contactEmail = (process.env.CONTACT_EMAIL || 'bchainbard.annonymousasquare@gmail.com').trim()

    console.log('Attempting to send email to:', contactEmail)
    console.log('From email:', email)

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>', // You'll need to verify your domain with Resend
      to: contactEmail,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #0070f3; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${safeName}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <p style="margin: 10px 0; white-space: pre-wrap; background: white; padding: 15px; border-radius: 3px;">${safeMessage}</p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}

---
This message was sent from your portfolio contact form.
      `,
    })

    if (error) {
      console.error('Resend error:', JSON.stringify(error, null, 2))
      return NextResponse.json(
        { 
          error: 'Failed to send email. Please try again later.',
          details: error.message || 'Unknown error'
        },
        { status: 500 }
      )
    }

    console.log('Email sent successfully:', data?.id)

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

