import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  console.log("Incoming request:", req.method, req.body);

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("Error: RESEND_API_KEY is missing.");
    return res.status(500).json({ success: false, error: 'Server misconfiguration. API key is missing.' });
  }

  try {
    const { name, email, message } = req.body;

    // Validate request body
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'Missing required fields: name, email, message' });
    }

    console.log("Sending email via Resend...");
    
    const response = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: `New Message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log("Email sent successfully:", response);

    return res.status(200).json({ success: true, message: "Email sent successfully!", response });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ success: false, error: error.message || "Internal Server Error" });
  }
}
