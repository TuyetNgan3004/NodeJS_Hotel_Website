const express = require('express');
const router = express.Router();

const bookingAdminController = require('../app/controllers/BookingAdminController');

router.get('/bookingRoom/query/:attribute', bookingAdminController.quickSearchBooking);

router.get('/bookingRoom/:id/updateStatus', bookingAdminController.updateStatus);
router.get('/bookingRoom/:id', bookingAdminController.confirm);
router.get('/bookingRoom', bookingAdminController.showBooking);

module.exports = router;
