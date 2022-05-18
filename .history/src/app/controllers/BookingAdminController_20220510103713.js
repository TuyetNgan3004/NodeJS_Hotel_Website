const Room = require('../models/Room');
const Customer = require('../models/Customer');

const { multipleToObject } = require('../../config/utility/mongoose');
const { mongooseToObject } = require('../../config/utility/mongoose');

const showBooking = (req, res, next) => {
    Customer.find({ c_status: { $nin: 'Đã huỷ' } })
        .populate('roomID')
        .then(customers => {
            res.render('TabBookingAdmin/bookingAdmin', {
                layout: 'mainAdmin.hbs',
                customers: multipleToObject(customers)
            });
        })
        .catch(next);
}

const confirm = async(req, res, next) => {
    const customer = await Customer.findByIdAndUpdate(req.params.id, { c_status: 'Đã xác nhận' })
    res.redirect('/admin/bookingRoom');

    // const date = new Date().toLocaleDateString();
    // console.log(date)

    // const cusCheckin = customer.c_checkin;
    // console.log(cusCheckin)

    // const room = await Room.findByIdAndUpdate(customer.roomID, { r_status: 'đang sử dụng' })
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