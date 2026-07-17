const test = require('node:test');
const assert = require('node:assert/strict');

const { validateBookingData } = require('../controllers/bookingController');

test('rejects missing required fields', () => {
  const result = validateBookingData({
    name: 'Ada',
    email: 'ada@example.com',
    phone: '1234567890',
    date: '2026-08-20',
    service: 'Wedding Photography'
  });

  assert.equal(result.isValid, false);
  assert.match(result.message, /message/i);
});

test('accepts a complete booking payload', () => {
  const result = validateBookingData({
    name: 'Ada Lovelace',
    email: 'ada@example.com',
    phone: '1234567890',
    date: '2026-08-20',
    service: 'Wedding Photography',
    message: 'Looking forward to the session.'
  });

  assert.equal(result.isValid, true);
  assert.equal(result.message, 'Booking data is valid.');
});
