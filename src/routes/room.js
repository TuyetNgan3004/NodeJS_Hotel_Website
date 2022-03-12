const express = require('express');
const router = express.Router();

const roomController = require ('../app/controllers/RoomController');

router.get ('/', roomController.showRoomList);
router.get ('/:slug', roomController.showRoomDetail);

module.exports = router;