require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: "bhawrasanjeev@gmail.com",
    pass: "ijev xuxj qqrc jyre"

  }
});

const mailOptions = {
  from: "bhawrasanjeev@gmail.com",
  to: "bhawsanjeev102@gmail.com",
  subject: 'Test Email',
  text: 'This is a simple test email sent directly from node!',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent successfully:', info.response);
  }
});