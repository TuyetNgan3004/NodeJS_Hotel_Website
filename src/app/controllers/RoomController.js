const Room = require('../models/Room');
const Customer = require('../models/Customer');
const { multipleToObject } = require ('../../config/utility/mongoose');
const { mongooseToObject } = require ('../../config/utility/mongoose');

class roomController {
    //GET
    showRoomList (req, res, next){
        Room.find()
        .then(rooms => {
            res.render('room', {rooms: multipleToObject(rooms)});
        })
        .catch(next);
    }

    showRoomDetail (req, res, next) {
         //GET roomList/:slug
         Room.findOne({ _id: req.params.id})
        .then(rooms => {
            res.render('rooms/showRoomDetail', { rooms: mongooseToObject(rooms) });
        })
        .catch(next);
    }

    showBookingRoom (req, res, next) {
        Room.findOne({_id: req.params.id})
        .then(rooms => {
            res.render('rooms/showBookingRoom', { rooms: mongooseToObject(rooms) });
        })
        .catch(next);
    }

    store (req, res, next){
        // console.log(req.body);
        const customer = new Customer(req.body);
        customer.save(function (err, result){
            // tìm lấy id customer vừa tạo
            Customer.findById(result.id)
            // kết hợp 2 model bởi id phòng trong customer
            .populate('roomID')
            // exec thực khi 
            .exec(function (err, r){
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
    standard (req, res, next) {
        // const s = 'standard';
        // const room = Room.find();
        // const result = Object (room).filter((r) => {
        //     return r.r_type.values === s;
        // })
        // res.render('room', {rooms: multipleToObject(r)});
        // Room.find({r_type: 'standard'})
    }
}
module.exports = new roomController;
