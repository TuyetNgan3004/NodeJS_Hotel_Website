const express = require('express');
const router = express.Router();

const LoginController = require('../app/controllers/LoginController');

router.get('/', LoginController.showPage)

module.exports = router;