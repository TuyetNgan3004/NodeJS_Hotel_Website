class homeController {
   //[GET] /
   showIndex(req, res, next) {
      res.render('TabHome/home',{ layout: 'mainClient.hbs' });
   }  
}

module.exports = new homeController;