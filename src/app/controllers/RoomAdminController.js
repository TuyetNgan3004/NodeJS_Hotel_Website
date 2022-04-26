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
    .populate('roomID')
        .then(customers => {          
            res.render('TabBookingAdmin/bookingAdmin', { layout: 'mainAdmin.hbs', customers: multipleToObject(customers) });
        })
        .catch(next);
}

const quickSearchRoom = async (req, res, next) => {
    // lấy giá trị bấm bên categories
    let attribute = req.params.attribute;
    var room;
    console.log('---------------------',attribute);
    if(attribute == 'controng') {
        room = await Room.find({r_status: 'còn trống'});
    }
    else if(attribute == 'dangsudung'){
        room = await Room.find({r_status: 'đang sử dụng'});
    }
    res.render('TabRoomsAdmin/roomsAdmin', { layout: 'mainAdmin.hbs', rooms: multipleToObject(room) });
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

const confirm =(req, res, next) => {

}

module.exports = { showRoom, showBooking, quickSearchRoom, add, store, confirm};

