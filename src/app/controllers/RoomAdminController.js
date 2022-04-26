const Room = require('../models/Room');
const Customer = require('../models/Customer');

const { multipleToObject } = require('../../config/utility/mongoose');
const { mongooseToObject } = require('../../config/utility/mongoose');

//GET
const showRoom =  (req, res, next) => {
    Room.find()
        .then(rooms => {
            res.render('TabRoomsAdmin/roomsAdmin', { layout: 'mainAdmin.hbs', 
            rooms: multipleToObject(rooms) });
        })
        .catch(next);
}


const quickSearchRoom = async (req, res, next) => {
    // lấy giá trị bấm bên categories
    console.log(req.params.attribute);
    var room;
    if(req.params.attribute == 'controng') {
        room = await Room.find({r_status: 'còn trống'});
    }
    else if(req.params.attribute == 'dangsudung'){
        room = await Room.find({r_status: 'đang sử dụng'});
    }
    res.render('TabRoomsAdmin/roomsAdmin', { layout: 'mainAdmin.hbs', rooms: multipleToObject(room) });
}

const add =  (req, res, next) => {
    Room.find()
        .then(rooms => {
            res.render('TabRoomsAdmin/addRoomAdmin', { layout: 'mainAdmin.hbs', 
            rooms: multipleToObject(rooms) });
        })
        .catch(next);
}

const edit =(req, res, next) => {
    Room.findById(req.params.id)
        .then(rooms => res.render('TabRoomsAdmin/editRoomAdmin',{ layout: 'mainAdmin.hbs',
        rooms: mongooseToObject(rooms)
        }))
        .catch(next);
}

const update = (req, res, next) => {
    Room.updateOne({ _id: req.params.id }, req.body)
        .then(() => res.redirect('/admin/room'))
        .catch(next);
}

const store =  (req, res, next) => {
    const room = new Room(req.body);
    room.save() 
        .then( res.redirect('/admin/room'))
        .catch(error =>{
        })     
}

module.exports = { showRoom, quickSearchRoom, add, edit, update, store };

