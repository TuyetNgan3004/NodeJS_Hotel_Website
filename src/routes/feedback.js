const express = require('express');
const router = express.Router();

const feedbackController = require('../app/controllers/FeedbackController');

router.get('/feedback', feedbackController.showFeedback)

module.exports = router;