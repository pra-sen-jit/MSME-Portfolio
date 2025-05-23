// backend/mail.js
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";
dotenv.config();


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'test@example.com', // Change to your email
  from: process.env.EMAIL_FROM,
  subject: 'Test Email',
  text: 'This is a test email from SendGrid'
};

sgMail.send(msg)
  .then(() => console.log('Email sent successfully'))
  .catch(error => console.error('Error sending email:', error));
