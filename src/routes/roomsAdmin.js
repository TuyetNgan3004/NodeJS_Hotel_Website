const express = require('express');
const router = express.Router();

const roomAdminController = require('../app/controllers/RoomAdminController');

router.get ('/room/query/:attribute', roomAdminController.quickSearchRoom);
router.get('/room', roomAdminController.showRoom)

module.exports = router;