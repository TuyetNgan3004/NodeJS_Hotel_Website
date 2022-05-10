const express = require('express');
const router = express.Router();

const PromotionController = require('../app/controllers/PromotionController');

router.get('/', PromotionController.create);

router.post('/', PromotionController.recieve);

router.get('/list', PromotionController.store);

router.get('/:id/edit', PromotionController.edit);

router.put('/:id', PromotionController.update);

router.delete('/:id', PromotionController.deleteModal);

module.exports = router;