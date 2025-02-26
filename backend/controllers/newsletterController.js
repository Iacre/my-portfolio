const Newsletter = require('../models/Newsletter');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.subscribe = async (req, res) => {
  const { email } = req.body;
  try {
    const subscriber = new Newsletter({ email });
    await subscriber.save();

    // Send welcome email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to Fiacre’s Newsletter!',
      text: 'Thanks for subscribing! Stay tuned for updates.',
    };
    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Subscribed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};