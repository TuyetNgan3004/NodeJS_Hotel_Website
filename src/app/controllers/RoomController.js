const Room = require('../models/Room');
const Customer = require('../models/Customer');
const { multipleToObject } = require('../../config/utility/mongoose');
const { mongooseToObject } = require('../../config/utility/mongoose');


//GET
const showRoomList = async (req, res, next) => {
    Room.find()
        .then(rooms => {
            res.render('room', { rooms: multipleToObject(rooms) });
        })
        .catch(next);
}

const showRoomDetail = async (req, res, next) => {
    //GET roomList/:id
    Room.findOne({ _id: req.params.id })
        .then(rooms => {
            res.render('rooms/showRoomDetail', { rooms: mongooseToObject(rooms) });
        })
        .catch(next);
}

const showBookingRoom = (req, res, next) => {
    Room.findOne({ _id: req.params.id })
        .then(rooms => {
            res.render('rooms/showBookingRoom', { rooms: mongooseToObject(rooms) });
        })
        .catch(next);
}

const store = async (req, res, next) => {
    // console.log(req.body);
    const customer = new Customer(req.body);
    customer.save(function (err, result) {
        // tìm lấy id customer vừa tạo
        Customer.findById(result.id)
            // kết hợp 2 model bởi id phòng trong customer
            .populate('roomID')
            // exec thực khi 
            .exec(function (err, r) {
                if (err) return console.log(err);
                // console.log(r);
                res.render('rooms/showBookingSuccess', { customers: mongooseToObject(r) });
            })
    });


    // customer.save(function (err){
    //     // Customer.findById(result.id)
    //     customer.populate('roomID')
    //     console.log(customer)
    //     res.render('rooms/showBookingSuccess', { customers: mongooseToObject(customer) });
    // });


    // customer.save()

    // .then(customers => {
    //     customers.populate('roomID')

    //     console.log(customers);
    //     res.render('rooms/showBookingSuccess', { customers: mongooseToObject(customers) });
    // })
}

// showBookingSuccess (req, res, next){
//     const room = Room.findOne({_id: req.params.id});
//     const customer = Customer.findOne({_id: req.params.id});
//     res.render('rooms/showBookingSuccess', { rooms: mongooseToObject(rooms), customers: mongooseToObject(customers) });
// }

const quickSearchRoom = async (req, res, next) => {
    // lấy giá trị bấm bên categories
    let attribute = req.params.attribute;
    let room = await Room.find();
    let result = room.filter((r) => {
        return r.r_type.toLowerCase().indexOf(attribute.toLowerCase()) !== -1 ||
        r.r_people.toLowerCase().indexOf(attribute.toLowerCase()) !== -1
    })
    res.render('room', { rooms: multipleToObject(result) });

    // let q = req.query.q;
    // let room = await Room.find();
    // let result = room.filter((r) => {
    //     return r.type.toLowerCase().indexOf(q.toLowerCase()) !== -1 ||
    //         r.price.toLowerCase().indexOf(q.toLowerCase()) !== -1 ||
    //         r.area.toLowerCase().indexOf(q.toLowerCase()) !== -1
    // })
    // res.render('room', { room: multipleMongooseToObject(result) })
}
    

module.exports = { showRoomList, showRoomDetail, showBookingRoom, store, quickSearchRoom };
