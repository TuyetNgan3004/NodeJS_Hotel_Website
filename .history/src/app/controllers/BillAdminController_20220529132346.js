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

