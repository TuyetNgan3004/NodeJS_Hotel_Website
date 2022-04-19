const express = require('express');
const router = express.Router();

const checkinController = require('../app/controllers/CheckInController');

router.get('/checkIn', checkinController.showCheckIn)

module.exports = router;