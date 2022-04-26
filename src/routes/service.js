const express = require('express');
const router = express.Router();

const ServiceController = require('../app/controllers/ServiceController');

router.get('/', ServiceController.showService)

router.get('/create', ServiceController.create);

router.post('/create', ServiceController.recieve);

router.get('/list', ServiceController.store);

router.get('/:id/edit', ServiceController.edit);

router.put('/:id', ServiceController.update);

router.delete('/:id', ServiceController.deleteModal);

module.exports = router;