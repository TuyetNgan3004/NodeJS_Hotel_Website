const express = require('express');
const router = express.Router();

const roomDetailController = require ('../app/controllers/RoomDetailController');

router.get ('/', roomDetailController.showRoomDetail);

module.exports = router;
