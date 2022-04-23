const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

const LoginController = require('../app/controllers/LoginController');

router.post('/', LoginController.login);
router.get('/', LoginController.showPage);

module.exports = router;