const Bill = require('../models/Bill');
const Customer = require('../models/Customer');
const Room = require('../models/Room');

const { multipleToObject } = require('../../config/utility/mongoose');
const { mongooseToObject } = require('../../config/utility/mongoose');

const showBill = async (req, res, next) => {
    var bill = await Bill.find({b_status: 'Đã thanh toán'}).populate('customerID');
    res.render('TabBillAdmin/billList', {
        layout: 'mainAdmin.hbs',
        bills: multipleToObject(bill)
    });

}

const showBillOnline = async (req, res, next) => {
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
    const bill = await Bill.findOne({ _id: req.params.id });
    const customer = await Customer.findOne({ _id: bill.customerID });
    const room = await Room.findOne({_id: customer.roomID});

    var result = mongooseToObject(customer);
    result.c_checkin = result.c_checkin.toLocaleDateString('en-GB');
    result.c_checkout = result.c_checkout.toLocaleDateString('en-GB');
    var day_ms = (customer.c_checkout - customer.c_checkin);
    var dayrent = day_ms / 86400000;
    var total = parseFloat(room.r_price.replace(/,/g,'')) * dayrent;
    res.render('TabBillAdmin/billDetail', {
        layout: 'mainAdmin.hbs',
        bill: mongooseToObject(bill),
        customer: result,
        dayRent: dayrent,
        total: total,
        room: mongooseToObject(room),
    });
}


module.exports = { showBill, showDetail, showBillOnline };

