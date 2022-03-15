class ServiceController {
    //[GET] /
    showService(req, res, next) {
       // res.send('Hello');
       res.render('service');
    }  
 }
 
 module.exports = new ServiceController;