const express = require('express');
const router = express.Router();

const roomListController = require ('../app/controllers/RoomListController');

router.get ('/', roomListController.showRoomList);

module.exports = router;