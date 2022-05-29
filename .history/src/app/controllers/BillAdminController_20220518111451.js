const Bill = require('../models/Bill');
const Customer = require('../models/Customer');

const { multipleToObject } = require('../../config/utility/mongoose');
const { mongooseToObject } = require('../../config/utility/mongoose');

const showBill = async (req, res, next) => {
    Customer.find({ c_status: { "$in": ["Đang checkin"] } })
        .populate('roomID')
        .then(customers => {
            res.render('TabBillAdmin/billList', {
                layout: 'mainAdmin.hbs',
                customers: multipleToObject(customers)
            });
        })
        .catch(next);
}

const showDetail = async (req, res, next) => {
    const customer = await Customer(req.body);
    
    const bill = await Bill.findOne( {customerID: customer._id });
    
    
    Bill.findOne({ _id: req.params.id })
        .then(bills => {
            
            res.render('TabBillAdmin/billDetail', {
                layout: 'mainAdmin.hbs',
                bills: mongooseToObject(bills),
               
            });
        })
        .catch(next);
}

module.exports = { showBill, showDetail };

