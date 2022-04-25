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

module.exports = { showCheckIn, showCheckInBooking };