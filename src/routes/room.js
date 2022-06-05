const express = require('express');
const router = express.Router();

const roomController = require ('../app/controllers/RoomController');

// ROOM LIST
router.get ('/query/:attribute', roomController.quickSearchRoom);
router.post ('/available', roomController.roomAvailable);
router.get ('/', roomController.showRoomList);

// ROOM DETAILS AND BOOKING
router.post ('/:id/showBookingRoom/store', roomController.store);
router.get ('/:id/showBookingRoom', roomController.showBookingRoom);
router.get ('/:id', roomController.showRoomDetail);

module.exports = router;
