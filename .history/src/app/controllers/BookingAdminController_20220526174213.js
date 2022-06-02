const Room = require('../models/Room');
const Customer = require('../models/Customer');

const { multipleToObject } = require('../../config/utility/mongoose');
const { mongooseToObject } = require('../../config/utility/mongoose');

const showBooking = (req, res, next) => {
    Customer.find({ c_status: { "$in": ["chờ xác nhận", "Đã xác nhận"] } })
        .populate('roomID')
        .then(customers => {
                var result = multipleToObject(customers);
                for(var i in result) {
                    result[i].c_checkin = result[i].c_checkin.toLocaleDateString('en-GB');
                    result[i].c_checkout = result[i].c_checkout.toLocaleDateString('en-GB');
                }
            res.render('TabBookingAdmin/bookingAdmin', {
                layout: 'mainAdmin.hbs',
                customers: result
            });
        })
        .catch(next);
}

const confirm = async(req, res, next) => {
    const customer = await Customer.findByIdAndUpdate(req.params.id, { c_status: 'Đã xác nhận' })
    res.redirect('/admin/bookingRoom');
}

const updateStatus = async(req, res, next) => {
    Customer.findByIdAndUpdate(req.params.id, { c_status: 'Đã huỷ' })
        .then(() => {
            res.redirect('/admin/bookingRoom')
        })
        .catch(next)
}

const quickSearchBooking = async(req, res, next) => {
    // lấy giá trị bấm bên categories
    var customers;
    if (req.params.attribute == 'confirm') {
        customers = await Customer.find({ c_status: 'chờ xác nhận' }).populate('roomID')
    } else if (req.params.attribute == 'confirmed') {
        customers = await Customer.find({ c_status: 'Đã xác nhận' }).populate('roomID')
    }
    res.render('TabBookingAdmin/bookingAdmin', { layout: 'mainAdmin.hbs', customers: multipleToObject(customers) });
}

module.exports = { showBooking, confirm, updateStatus, quickSearchBooking };