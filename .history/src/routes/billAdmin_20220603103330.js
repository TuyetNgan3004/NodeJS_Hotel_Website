const express = require('express');
const router = express.Router();

const billAdminController = require('../app/controllers/BillAdminController');

router.get('/bill/:id', billAdminController.showDetail);
router.get('/bill', billAdminController.showBill);
// router.get('/bill', billAdminController.showBillOnline);
// router.get('/bill/:id', billAdminController.showDetailOnline);

module.exports = router;