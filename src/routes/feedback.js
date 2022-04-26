const express = require('express');
const router = express.Router();

const feedbackController = require('../app/controllers/FeedbackController');


router.get('/', feedbackController.create);

router.post('/', feedbackController.recieve);

router.get('/list', feedbackController.store);

router.delete('/:id', feedbackController.deleteModal);

// router.get ('/query/:attribute', feedbackController.quickSearchRoom);

module.exports = router;