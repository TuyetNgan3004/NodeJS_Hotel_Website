const express = require('express');
const router = express.Router();

const checkinController = require('../app/controllers/CheckInController');

router.get('/checkIn/:id/checkInBooking', checkinController.showCheckInBooking);
router.get('/checkIn/list', checkinController.showCheckInList);
router.get('/checkIn', checkinController.showCheckIn);

router.get('/checkIn/:id/checkInBooking/taophieu', checkinController.taophieu);
// router.put('/checkIn/storeIO', checkinController.storeIO);

module.exports = router;