const express = require('express');
const router = express.Router();

const checkinController = require('../app/controllers/CheckInController');

router.get('/checkIn/:id/checkInBooking', checkinController.showCheckInBooking);
router.get('/checkIn/list', checkinController.showCheckInList);
router.get('/checkIn', checkinController.showCheckIn);

// checkin offline
router.put('/checkIn/add/store', checkinController.store);
// checkin detail edit
router.put('/checkIn/:id/update', checkinController.update);
router.get('/checkIn/:id/edit', checkinController.edit);

router.get('/checkIn/bill/:id', checkinController.showDetail);
router.get('checkin/bill/:id/update', checkinController.updateBill);

module.exports = router;
