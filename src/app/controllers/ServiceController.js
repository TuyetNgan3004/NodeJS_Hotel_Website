const Service = require('../models/Service');
const { multipleToObject } = require ('../../config/utility/mongoose');
const { mongooseToObject } = require ('../../config/utility/mongoose');



class ServiceController {
    //[GET] /
    showService(req, res, next) {
       res.render('TabServiceClient/service', { layout: 'mainClient.hbs' });
    }  

      // [GET] /service/
      create(req, res, next) {
         res.render("TabServiceAdmin/createService",{ layout: 'mainAdmin.hbs' });
     }
 
     //[POST] /service/
     recieve(req, res, next) {
         console.log(req.body);
         const service = new Service(req.body);
         service
             .save()
             .then(() => res.redirect("/service/list"))
             .catch(next);
     }
 
     
     //[GET] /service/store 
     store(req, res, next) {
         Service.find({})
             .then(service => res.render("TabServiceAdmin/servicelist",{ layout: 'mainAdmin.hbs',
             service: multipleToObject(service)
             }))
             .catch(next);
     }

    // [GET] /service/:id/edit
    edit(req, res, next) {
        Service.findById(req.params.id)
            .then(service => res.render('TabServiceAdmin/editservice',{ layout: 'mainAdmin.hbs',
                service: mongooseToObject(service)
            }))
            .catch(next);
    }
    // [PUT] /service/:id
    update(req, res, next) {
        Service.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/service/list'))
            .catch(next);
    }

    deleteModal(req, res, next) {
        Service.deleteOne({_id: req.params.id })
        .then(() => res.redirect('back'))
        .catch(next)
    }

}
 
 module.exports = new ServiceController;