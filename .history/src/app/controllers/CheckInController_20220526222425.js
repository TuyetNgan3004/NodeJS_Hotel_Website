
const Room = require('../models/Room');
const Customer = require('../models/Customer');
const Bill = require('../models/Bill');
const Service = require('../models/Service');
const { multipleToObject } = require('../../config/utility/mongoose');
const { mongooseToObject } = require('../../config/utility/mongoose');
const { db } = require('../models/Customer');

const showCheckIn = async (req, res, next) => {
    const emptyRooms = await Room.find({ r_status: 'còn trống' });
    const roomBooked = await Customer.find({ c_status: 'Đã xác nhận' }).populate('roomID')
    var result = multipleToObject(roomBooked);
        for(var i in result) {
            result[i].c_checkin = result[i].c_checkin.toLocaleDateString('en-GB');
            result[i].c_checkout = result[i].c_checkout.toLocaleDateString('en-GB');
        }
    res.render('TabCheckInAdmin/checkInAdmin', {
        layout: 'mainAdmin.hbs',
        rooms: multipleToObject(emptyRooms),
        roomBooked: result
    });
}

const showCheckInBooking = async (req, res, next) => {
    const emptyRooms = await Room.find({ r_status: 'còn trống' });
    const roomBooked = await Customer.find().populate('roomID')
    const cusBooked = await Customer.findById(req.params.id).populate('roomID');
    res.render('TabCheckInAdmin/checkInBooking', {
        layout: 'mainAdmin.hbs',
        rooms: multipleToObject(emptyRooms),
        roomBooked: multipleToObject(roomBooked),
        cusBooked: mongooseToObject(cusBooked)
    });
}

const showCheckInList = async (req, res, next) => {
    const roomsCheckIn = await Customer.find({ c_status: 'Đang checkin' }).populate('roomID')
    var result = multipleToObject(roomsCheckIn);
    for(var i in result) {
        result[i].c_checkin = result[i].c_checkin.toLocaleDateString('en-GB');
        result[i].c_checkout = result[i].c_checkout.toLocaleDateString('en-GB');
    }
    res.render('TabCheckInAdmin/checkInList', {
        layout: 'mainAdmin.hbs',
        customers: result
    });
}

const store = async (req, res, next) => {
    var customer = new Customer({
        c_name: req.body.c_name,
        c_phone: req.body.c_phone,
        c_email: req.body.c_email,
        c_checkin: new Date(req.body.c_checkin),
        c_checkout: new Date(req.body.c_checkout),
        c_total: req.body.c_total,
        roomID: req.body.roomID,
    });

    const room = await Room.findOne({ r_number: req.body.r_number })
    customer.c_status = 'Đang checkin';
    customer.roomID = room._id;

    await Room.findOneAndUpdate(
        { _id: customer.roomID },
        { r_status: 'đang sử dụng' },
        { new: true }
    );

    const bill = new Bill(req.body);
    bill.customerID = customer.id;
    bill.save()

    customer.save()
        .then(() => res.redirect('/admin/checkIn'))
        .catch(next);
}

const edit = async (req, res, next) => {
    const emptyRooms = await Room.find({ r_status: 'còn trống' });
    const customer = await Customer.findById(req.params.id);
    const customer1 = await Customer.findById(req.params.id).populate('roomID');
    res.render('TabCheckInAdmin/checkInDetail', {
        layout: 'mainAdmin.hbs',
        customers: mongooseToObject(customer),
        customer1: mongooseToObject(customer1),
        rooms: multipleToObject(emptyRooms)
    })

    // const customer = await Customer.findById( req.params.id);
    // const customer1 = await Customer.findById( req.params.id).populate('idphong');
    // res.render('bill/chinhHoaDon', {customer: mongooseToObject(customer), customer1: mongooseToObject(customer1)})
}

const update = async (req, res, next) => {
    Customer.updateOne({ _id: req.params.id }, req.body)
        .then(() => res.redirect('/admin/checkIn/list'))
        .catch(next);
}

const showDetail = async (req, res, next) => {
    const customer = await Customer.findOne({ _id: req.params.id });
    const bill = await Bill.findOne({ customerID: customer._id });
    const room = await Room.findOne({_id: customer.roomID});
    const services = await Service.find();
    
    res.render('TabBillAdmin/billDetail', {
        layout: 'mainAdmin.hbs',
        bill: mongooseToObject(bill),
        customer: mongooseToObject(customer),
        room: mongooseToObject(room),
        services: multipleToObject(services)
    });
}

module.exports = { showCheckIn, showCheckInBooking, showCheckInList, store, edit, update, showDetail };