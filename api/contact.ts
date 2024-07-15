import { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    const { firstname, email, message } = req.body;

    const data = {
      from: 'onboarding@resend.dev', // Change to your verified sender email
      to: 'schroedernathan2011@icloud.com', // Change to your recipient email
      subject: 'New Contact Form Submission',
      text: `Name: ${firstname}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      await axios.post('https://api.resend.com/emails', data, {
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
      });
      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
