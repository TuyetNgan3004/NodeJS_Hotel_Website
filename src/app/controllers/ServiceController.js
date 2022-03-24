class ServiceController {
    //[GET] /
    showService(req, res, next) {
       res.render('service');
    }  
 }
 
 module.exports = new ServiceController;