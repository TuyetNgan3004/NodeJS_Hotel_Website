const Room = require('../models/Room');
const Customer = require('../models/Customer');
const { multipleToObject } = require('../../config/utility/mongoose');
const { mongooseToObject } = require('../../config/utility/mongoose');

//GET
const showRoomList =  (req, res, next) => {
    Room.find()
        .then(rooms => {
            res.render('TabRoomsClient/rooms', { layout: 'mainClient.hbs', rooms: multipleToObject(rooms) });
        })
        .catch(next);
}
const showRoomDetail =  (req, res, next) => {
    //GET roomList/:id
    Room.findOne({ _id: req.params.id })
        .then(rooms => {
            res.render('TabRoomsClient/showRoomDetail', { layout: 'mainClient.hbs', 
            rooms: mongooseToObject(rooms) });
        })
        .catch(next);
}
const showBookingRoom = (req, res, next) => {
    Room.findOne({ _id: req.params.id })
        .then(rooms => {
            res.render('TabRoomsClient/showBookingRoom', { layout: 'mainClient.hbs', rooms: mongooseToObject(rooms) });
        })
        .catch(next);
}

const store = (req, res, next) => {
    var customer = new Customer({
        c_name: req.body.c_name,
        c_phone: req.body.c_phone,
        c_email: req.body.c_email,
        c_checkin: new Date(req.body.c_checkin),
        c_checkout: new Date(req.body.c_checkout),
        c_total: req.body.c_total,
        roomID: req.body.roomID,
    });

    customer.save(function (err, result) {
        Customer.findById(result.id).populate('roomID')
            // exec thực khi 
            .exec(function (err, r) {
                if (err) return console.log(err);
                r['c_checkin'] = r.c_checkin.toLocaleDateString('en-GB');
                r['c_checkout'] = r.c_checkout.toLocaleDateString('en-GB');
                let customer = r;
                res.render('TabRoomsClient/showBookingSuccess',{ layout: 'mainClient.hbs', 
                customers: mongooseToObject(customer)});
            })
    });
}

const quickSearchRoom = async (req, res, next) => {
    // lấy giá trị bấm bên categories
    let attribute = req.params.attribute;
    let room = await Room.find();
    let result = room.filter((r) => {       
        return r.r_type.toLowerCase().indexOf(attribute.toLowerCase()) !== -1 ||
        r.r_people.toLowerCase().indexOf(attribute.toLowerCase()) !== -1
    })
    res.render('TabRoomsClient/rooms', { layout: 'mainClient.hbs', rooms: multipleToObject(result) });
}
module.exports = { showRoomList, showRoomDetail, showBookingRoom, store, quickSearchRoom };

