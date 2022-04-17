const Room = require('../models/Room');
const Customer = require('../models/Customer');

const { multipleToObject } = require('../../config/utility/mongoose');
const { mongooseToObject } = require('../../config/utility/mongoose');

//GET
const showRoom =  (req, res, next) => {
    Room.find()
        .then(rooms => {
            res.render('TabRoomsAdmin/roomsAdmin', { layout: 'mainAdmin.hbs', rooms: multipleToObject(rooms) });
        })
        .catch(next);
}

const showBooking =  (req, res, next) => {
    Customer.find()
        .then(customers => {
            res.render('TabBookingAdmin/bookingAdmin', { layout: 'mainAdmin.hbs', customers: multipleToObject(customers) });
        })
        .catch(next);
}

const showCheckIn =  (req, res, next) => {
    Room.find()
        .then(rooms => {
            res.render('TabCheckInAdmin/checkInAdmin', { layout: 'mainAdmin.hbs', rooms: multipleToObject(rooms) });
        })
        .catch(next);
}

const quickSearchRoom = async (req, res, next) => {
    // lấy giá trị bấm bên categories
    let attribute = req.params.attribute;
    let room = await Room.find();
    let result = room.filter((r) => {
        return r.r_status.toLowerCase().indexOf(attribute.toLowerCase()) !== -1
    })
    res.render('TabRoomsAdmin/roomsAdmin', { layout: 'mainAdmin.hbs', rooms: multipleToObject(result) });
}

const add =  (req, res, next) => {
    Room.find()
        .then(rooms => {
            res.render('TabRoomsAdmin/addRoomAdmin', { layout: 'mainAdmin.hbs', rooms: multipleToObject(rooms) });
        })
        .catch(next);
}

const store =  (req, res, next) => {
    const room = new Room(req.body);
    room.save() 
        .then( res.redirect('/admin/room'))
        .catch(error =>{
        })     
}


module.exports = { showRoom, showBooking,  showCheckIn , quickSearchRoom, add, store};