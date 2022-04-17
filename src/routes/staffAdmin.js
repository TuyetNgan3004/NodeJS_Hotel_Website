const express = require('express');
const router = express.Router();

const staffAdminController = require('../app/controllers/StaffAdminController');

router.post('/staff/add/store', staffAdminController.store);
router.delete('/staff/:id', staffAdminController.deleteModal);
router.get('/staff/add', staffAdminController.add);
router.get('/staff', staffAdminController.show);


module.exports = router;