const express = require('express');
const router = express.Router();

const roomAdminController = require('../app/controllers/RoomAdminController');

router.get('/checkIn', roomAdminController.showCheckIn)

module.exports = router;