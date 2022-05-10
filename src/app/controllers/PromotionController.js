const Promotion = require('../models/Promotion');
const { multipleToObject } = require ('../../config/utility/mongoose');
const { mongooseToObject } = require ('../../config/utility/mongoose');



class PromotionController {
      // [GET] /promotion/
      create(req, res, next) {
         res.render("TabPromotion/createPromotion",{ layout: 'mainAdmin.hbs' });
     }
     //[POST] /promotion/
     recieve(req, res, next) {
         console.log(req.body);
         const promotion = new Promotion(req.body);
         promotion
             .save()
             .then(() => res.redirect("/promotion/list"))
             .catch(next);
     }
     //[GET] /promotion/store 
     store(req, res, next) {
         Promotion.find({})
             .then(promotion => res.render("TabPromotion/promotionlist",{ layout: 'mainAdmin.hbs',
             promotion: multipleToObject(promotion)
             }))
             .catch(next);
     }
     // [GET] /promotion/:id/edit
    edit(req, res, next) {
        Promotion.findById(req.params.id)
            .then(promotion => res.render('TabPromotion/editPromotion',{ layout: 'mainAdmin.hbs',
            promotion: mongooseToObject(promotion)
            }))
            .catch(next);
    }
    // [PUT] /promotion/:id
    update(req, res, next) {
        Promotion.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/promotion/list'))
            .catch(next);
    }

    deleteModal(req, res, next) {
        Promotion.deleteOne({_id: req.params.id })
        .then(() => res.redirect('back'))
        .catch(next)
    }

}
 
 module.exports = new PromotionController;