const Bill = require('../models/Bill');
const Customer = require('../models/Customer');
const Room = require('../models/Room');

const { multipleToObject } = require('../../config/utility/mongoose');
const { mongooseToObject } = require('../../config/utility/mongoose');

const showBill = async (req, res, next) => {
    var bill = await Bill.find({b_status: 'Đã thanh toán'});
    res.render('TabBillAdmin/billList', {
        layout: 'mainAdmin.hbs',
        bills: multipleToObject(bill)
    });

}

const showDetail = async (req, res, next) => {
    const customer = await Customer.findOne({ _id: req.params.id });
    const bill = await Bill.findOne({ customerID: customer._id });
    const room = await Room.findOne({_id: customer.roomID});
    
    res.render('TabBillAdmin/billDetail', {
        layout: 'mainAdmin.hbs',
        bill: mongooseToObject(bill),
        customer: mongooseToObject(customer),
        room: mongooseToObject(room)
    });

}


module.exports = { showBill, showDetail };

