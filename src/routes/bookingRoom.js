const express = require('express');
const router = express.Router();

const bookingRoomController = require ('../app/controllers/BookingRoomController');

router.get ('/', bookingRoomController.showBookingRoom);

module.exports = router;
