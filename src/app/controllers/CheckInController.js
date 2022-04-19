const Room = require('../models/Room');
const Customer = require('../models/Customer');
const { multipleToObject } = require('../../config/utility/mongoose');
const { mongooseToObject } = require('../../config/utility/mongoose');

const showCheckIn =  async(req, res, next) => {
   const emptyRooms = await Room.find({r_status: 'còn trống'});
   const confirmedBookings = await Customer.find({r_status: 'chờ checkin'})
   res.render('TabCheckInAdmin/checkInAdmin', { layout: 'mainAdmin.hbs', rooms: multipleToObject(emptyRooms),  bookings: multipleToObject(confirmedBookings)});
}

module.exports = {showCheckIn};