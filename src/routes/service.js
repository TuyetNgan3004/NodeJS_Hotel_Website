const express = require('express');
const router = express.Router();

const ServiceController = require('../app/controllers/ServiceController');

router.get('/service', ServiceController.showService)

module.exports = router;