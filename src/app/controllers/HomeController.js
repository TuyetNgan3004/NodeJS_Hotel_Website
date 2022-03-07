class homeController {
   //[GET] /
   showIndex(req, res, next) {
      // res.send('Hello');
      res.render('home');
   }  
}

module.exports = new homeController;