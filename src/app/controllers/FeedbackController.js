const Feedback = require('../models/Feedback');
const { multipleToObject } = require ('../../config/utility/mongoose');
const { mongooseToObject } = require ('../../config/utility/mongoose');


class FeedbackController {
    // [GET] /feedback/
    create(req, res, next) {
        res.render("TabFeedback/createFB",{ layout: 'mainClient.hbs' });
    }

    //[POST] /feedback/
    recieve(req, res, next) {
        console.log(req.body);
        const feedback = new Feedback(req.body);
        feedback
            .save()
            .then(() => res.redirect("/feedback"))
            .catch(next);
    }

    
    //[GET] /feedback/store 
    store(req, res, next) {
        Feedback.find({})
            .then(feedback => res.render("TabFeedback/feedbacklist",{ layout: 'mainAdmin.hbs',
                feedback: multipleToObject(feedback)
            }))
            .catch(next);
    }
 
}

module.exports = new FeedbackController();
