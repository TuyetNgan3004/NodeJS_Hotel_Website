const Customer = require('../models/Customer');
const Bill = require('../models/Bill');

const { multipleToObject } = require('../../config/utility/mongoose');
const { mongooseToObject } = require('../../config/utility/mongoose');
const { query } = require('express');

const statisticDay = async (req, res, next) => {
   res.render('TabStatisticAdmin/statisticAdmin', { layout: 'mainAdmin.hbs' });
}

const filterMonth = async (req, res, next) => {

   const inputMonth = req.body.month;
   console.log(inputMonth)

   const monthBill = await Bill.aggregate([
      { $match: { "b_status": "Đã thanh toán" } },
      {
         $group: {
            _id: "$createdAt",
            price:
            {
               $sum: {
                  $convert: {
                     input: {
                        $reduce: {
                           input: {
                              $split: ['$b_total', ',']
                           },
                           initialValue: '',
                           in: {
                              $concat: ['$$value', '$$this']
                           }
                        }
                     },
                     to: 'int',
                     onError: 0
                  }
               }
            },
         }
      }
   ])
   // console.log(monthBill)

   const objMonth = Object.assign({}, monthBill);
   var countOrder = 0;
   var total = 0;
   for (let i in objMonth) {
      if (objMonth[i]._id.getMonth() == (inputMonth - 1)) {
         countOrder++;
         total += parseFloat(objMonth[i].price);
         console.log(objMonth[i]);
      }
   }
   total = Intl.NumberFormat().format(total);
   res.render('TabStatisticAdmin/statisticAdmin', {
      layout: 'mainAdmin.hbs',
      objMonth,
      total,
      countOrder
   });
 

   console.log(countOrder);

}

module.exports = { statisticDay, filterMonth };
