const Room = require('../models/Room');
const Customer = require('../models/Customer');
const { multipleToObject } = require('../../config/utility/mongoose');
const { mongooseToObject } = require('../../config/utility/mongoose');

const showCheckIn = async(req, res, next) => {
    const emptyRooms = await Room.find({ r_status: 'còn trống' });
    const confirmedBookings = await Customer.find({ r_status: 'chờ checkin' });
    const roomBooked = await Customer.find().populate('roomID')
    res.render('TabCheckInAdmin/checkInAdmin', {
        layout: 'mainAdmin.hbs',
        rooms: multipleToObject(emptyRooms),
        bookings: multipleToObject(confirmedBookings),
        roomBooked: multipleToObject(roomBooked)
    });
}

const showCheckInBooking = async(req, res, next) => {
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

const showCheckInList = async(req, res, next) => {
    const roomsCheckIn = await Customer.find({c_status: 'Đang checkin'}).populate('roomID')
    res.render('TabCheckInAdmin/checkInList', {
        layout: 'mainAdmin.hbs',
        customers: multipleToObject(roomsCheckIn)
    });
}

//[PUT] /createIO/storeIO
// const storeIO = async (req, res, next) => {
//     const customer = await Customer(req.body);
//     customer.c_status = 'Đang checkin';

    
//     const room = await Room.findOne({ r_number: req.body.r_number })
//     customer.roomID = room._id;

//     const room1 = await Room.findOneAndUpdate(
//         { _id: customer.roomID }, 
//         {r_status: 'đang sử dụng'}, 
//         {new: true})

//     const bill = new Bill(req.body);

//     const userID = customer.id;
    
//     bill.customerID = userID;
//     bill.save()
//     customer.save()
//         .then(() => res.redirect('/admin/checkIn'))
//         .catch(next);
// }

//[POST] /checkIn/:id/checkInBooking/taophieu
const taophieu = async (req, res, next) => {
    const customer = await Customer.findOne({_id: req.params.id});
    await Customer.updateOne(
        {_id: req.params.id}, 
        {$set: { c_status: 'Đang checkin' }});
    
    await Room.updateOne(
        {_id: customer.roomID},
        {$set: {r_status: 'đang sử dụng'}}
    );

    // const bill = new Bill(req.body);
    // bill.customerID = customer._id;
    // bill.save()
    res.redirect('/admin/checkIn')
}


module.exports = { showCheckIn, showCheckInBooking, showCheckInList, taophieu};