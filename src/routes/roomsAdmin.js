const express = require('express');
const router = express.Router();

const roomAdminController = require('../app/controllers/RoomAdminController');

router.post('/room/add/store', roomAdminController.store);
router.get ('/room/query/:attribute', roomAdminController.quickSearchRoom);
router.get('/room/add', roomAdminController.add);
router.get('/room', roomAdminController.showRoom);

module.exports = router;