const express = require('express');
const router = express.Router();

const billAdminController = require('../app/controllers/BillAdminController');


router.get('/bill/:id/update', billAdminController.updateBill);

router.get('/bill/:id', billAdminController.showDetail);
router.get('/bill', billAdminController.showBill);

module.exports = router;