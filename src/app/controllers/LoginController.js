class LoginController {
   //[GET] /
   showPage(req, res, next) {
      res.render('TabLogin/login', {layout: 'mainClient.hbs'});
   }  
}

module.exports = new LoginController;