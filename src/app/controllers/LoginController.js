class LoginController {
   //[GET] /
   showPage(req, res, next) {
      res.render('login');
   }  
}

module.exports = new LoginController;