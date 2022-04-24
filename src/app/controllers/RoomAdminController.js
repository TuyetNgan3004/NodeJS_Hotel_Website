const Room = require('../models/Room');
const Customer = require('../models/Customer');

const { multipleToObject } = require('../../config/utility/mongoose');
const { mongooseToObject } = require('../../config/utility/mongoose');

//[GET] /admin/room/
const showRoom = async(req, res, next) => {
    const rooms = await Room.find()
    res.render('TabRoomsAdmin/roomsAdmin', { layout: 'mainAdmin.hbs', rooms: multipleToObject(rooms) })
}

//[GET] /admin/room/query/:attribute
const quickSearchRoom = async(req, res, next) => {
    // lấy giá trị bấm bên categories
    var room;
    if (req.params.attribute == 'controng') {
        room = await Room.find({ r_status: 'còn trống' });
    } else if (req.params.attribute == 'dangsudung') {
        room = await Room.find({ r_status: 'đang sử dụng' });
    }
    res.render('TabRoomsAdmin/roomsAdmin', { layout: 'mainAdmin.hbs', rooms: multipleToObject(room) });
}

//[GET] /admin/room/edit
const add = (req, res, next) => {
    Room.find()
        .then(rooms => {
            res.render('TabRoomsAdmin/addRoomAdmin', {
                layout: 'mainAdmin.hbs',
                rooms: multipleToObject(rooms)
            });
        })
        .catch(next);
}

//[GET] /admin/add/store
const store = (req, res, next) => {
    const room = new Room(req.body);
    room.save()
        .then(res.redirect('/admin/room'))
        .catch(error => {})
}

module.exports = { showRoom, quickSearchRoom, add, store };