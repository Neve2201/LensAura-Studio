const Booking = require('../models/Booking');

const validateBookingData = (bookingData) => {
  const { name, email, phone, date, service, message } = bookingData || {};

  if (!name || !email || !phone || !date || !service || !message) {
    return {
      isValid: false,
      message: 'All fields, including the message, are required to submit a booking request.',
    };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return {
      isValid: false,
      message: 'Please provide a valid email address.',
    };
  }

  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone)) {
    return {
      isValid: false,
      message: 'Please provide a valid 10-digit phone number.',
    };
  }

  return {
    isValid: true,
    message: 'Booking data is valid.',
  };
};

const createBooking = async (req, res) => {
  try {
    const validation = validateBookingData(req.body);
    if (!validation.isValid) {
      return res.status(400).json({ message: validation.message });
    }

    const booking = await Booking.create(req.body);

    return res.status(201).json({
      message: 'Booking request submitted successfully.',
      booking,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ message: 'A similar booking already exists.' });
    }

    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }

    return res.status(500).json({ message: 'Unable to save booking request right now.' });
  }
};

module.exports = {
  createBooking,
  validateBookingData,
};
