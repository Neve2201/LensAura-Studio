const express = require('express');
const { createBooking } = require('../controllers/bookingController');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('LensAura Backend is Running 🚀');
});

router.post('/booking', createBooking);

module.exports = router;
