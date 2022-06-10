const express = require('express');
const router = express.Router();

const statisticAdminController = require('../app/controllers/StatisticAdminController');

router.post('/statistic/filterMonth', statisticAdminController.filterMonth);
router.get('/statistic', statisticAdminController.statisticDay);
router.post ('/filter', statisticAdminController.filter);

module.exports = router;
