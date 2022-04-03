class FeedbackController {
    //[GET] /feedback/
    showFeedback(req, res, next) {
       // res.send('Hello');
       res.render('TabFeedBack/feedback', { layout: 'mainClient.hbs'});
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
 }
 
 module.exports = new FeedbackController;