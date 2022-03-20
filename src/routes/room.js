const express = require('express');
const router = express.Router();

const roomController = require ('../app/controllers/RoomController');

router.get ('/', roomController.showRoomList);
router.get ('/standard', roomController.standard);
router.get ('/:id', roomController.showRoomDetail);
router.get ('/:id/showBookingRoom', roomController.showBookingRoom);

router.post ('/:id/showBookingRoom/store', roomController.store);



module.exports = router;
