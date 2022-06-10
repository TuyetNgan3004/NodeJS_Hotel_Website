const Customer = require('../models/Customer');
const Bill = require('../models/Bill');
const Room = require('../models/Room');

const { multipleToObject } = require('../../config/utility/mongoose');
const { mongooseToObject } = require('../../config/utility/mongoose');

const statisticDay = async (req, res, next) => {
    res.render('TabStatisticAdmin/statisticAdmin', { layout: 'mainAdmin.hbs'});
}

const filterMonth = async (req, res, next) => {
   const inputMonth = req.body.month;
   console.log(inputMonth)
}

const filter = async(req, res, next) => {
//    const bill = await Bill.findById(req.bill._id);
   const {startDate, endDate} = req.body;
   var start = new Date(startDate);
   var end = new Date(endDate);
    const query = await Bill.aggregate(
            [
                {$match: { "b_status": "Đã thanh toán", "createdAt": {$gte: start, $lte: end}}},
                
            {
                $group: 
                {
                    _id: "$createdAt",
                    price: 
                    { $sum: {
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
                    }},
                }
            },
        ])
        const objHour = Object.assign({}, query);
        const countOrder = query.length;
        for(let i in objHour) {
            console.log(objHour[i]._id.getTime() < end.getTime() && objHour[i]._id.getTime() > start.getTime());
        }
        var total = 0;
        for(var i in objHour) {
            total += parseFloat(objHour[i].price);
        }
        total = Intl.NumberFormat().format(total);
   res.render('TabStatisticAdmin/statisticAdmin', { layout: 'mainAdmin.hbs',  objHour, total, countOrder});
}

module.exports = { statisticDay, filterMonth, filter };
