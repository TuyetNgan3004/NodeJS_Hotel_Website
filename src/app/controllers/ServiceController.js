class ServiceController {
    //[GET] /
    showService(req, res, next) {
       res.render('TabServiceClient/service', { layout: 'mainClient.hbs' });
    }  
 }
 
 module.exports = new ServiceController;