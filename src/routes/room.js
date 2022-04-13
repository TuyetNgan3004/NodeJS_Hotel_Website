const express = require('express');
const router = express.Router();

const roomController = require ('../app/controllers/RoomController');

router.get ('/', roomController.showRoomList);
// router.get ('/:id', roomController.showRoomDetail);

// router.get ('/:people', roomController.people);
router.get ('/query/:attribute', roomController.quickSearchRoom);
router.get ('/:id', roomController.showRoomDetail);
router.get ('/:id/showBookingRoom', roomController.showBookingRoom);
router.post ('/:id/showBookingRoom/store', roomController.store);

module.exports = router;
