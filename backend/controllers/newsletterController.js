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
    console.log('Subscribing email:', email);
    const subscriber = new Newsletter({ email });
    await subscriber.save();
    console.log('Subscriber saved:', subscriber);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to Fiacre’s Newsletter!',
      text: 'Thanks for subscribing! Stay tuned for updates.',
    };
    await transporter.sendMail(mailOptions);
    console.log('Welcome email sent to:', email);

    res.status(201).json({ message: 'Subscribed successfully' });
  } catch (error) {
    console.error('Subscribe Error:', error.message, error.stack);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getSubscribers = async (req, res) => {
  try {
    console.log('Fetching subscribers...');
    const subscribers = await Newsletter.find();
    console.log('Subscribers fetched:', subscribers);
    res.json(subscribers);
  } catch (error) {
    console.error('GetSubscribers Error:', error.message, error.stack);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.unsubscribe = async (req, res) => {
  const { email } = req.params;
  try {
    console.log('Unsubscribing email:', email);
    const subscriber = await Newsletter.findOneAndDelete({ email });
    if (!subscriber) {
      console.log('Subscriber not found:', email);
      return res.status(404).json({ message: 'Subscriber not found' });
    }
    console.log('Subscriber removed:', subscriber);
    res.json({ message: 'Unsubscribed successfully' });
  } catch (error) {
    console.error('Unsubscribe Error:', error.message, error.stack);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};