const Room = require('../models/Room');
const Customer = require('../models/Customer');
const { multipleToObject } = require('../../config/utility/mongoose');
const { mongooseToObject } = require('../../config/utility/mongoose');

//GET
const showRoomList = (req, res, next) => {
    Room.find()
        .then(rooms => {
            res.render('TabRoomsClient/rooms', { layout: 'mainClient.hbs', rooms: multipleToObject(rooms) });
        })
        .catch(next);
}

const roomAvailable = async (req, res, next) => {
    const { checkinDate, checkoutDate } = req.body;
    await Customer.find(
        { c_status: { $in: ['Đã xác nhận', 'Đang checkin'] }, c_checkin: { $gte: checkinDate, $lte: checkoutDate } }
    )
        .then(customers => {
            var bookedRooms = [];
            for (var i in customers) {
                bookedRooms.push(customers[i].roomID)
            }
            Room.find({ _id: { $nin: bookedRooms } }).then(rooms => {
                res.render('TabRoomsClient/rooms', { layout: 'mainClient.hbs', rooms: multipleToObject(rooms) });
            })
        });
}

const showRoomDetail = (req, res, next) => {
    //GET roomList/:id
    Room.findOne({ _id: req.params.id })
        .then(rooms => {
            res.render('TabRoomsClient/showRoomDetail', {
                layout: 'mainClient.hbs',
                rooms: mongooseToObject(rooms)
            });
        })
        .catch(next);
}
const showBookingRoom = (req, res, next) => {
    Room.findOne({ _id: req.params.id })
        .then(room => {
            Customer.find({ roomID: room._id, c_status: { $in: ['Đã xác nhận', 'Đang checkin'] } })
                .then(bookedInfos => {

                    var bookedDates = [];
                    for (var i in bookedInfos) {
                        var bookedDate = {
                            checkinDate: bookedInfos[i].c_checkin.toISOString().slice(0, 10),
                            checkoutDate: bookedInfos[i].c_checkout.toISOString().slice(0, 10)
                        };
                        bookedDates.push(bookedDate);
                    }
                    // res.json(bookedDates);
                    res.render('TabRoomsClient/showBookingRoom', { layout: 'mainClient.hbs', rooms: mongooseToObject(room), bookedDates });
                })
        })
}

const store = async (req, res, next) => {
    var room = await Room.findOne({ _id: req.body.roomID });
    room.r_price = room.r_price.replace(/,/g, '');

    var customer = new Customer({
        c_name: req.body.c_name,
        c_phone: req.body.c_phone,
        c_email: req.body.c_email,
        c_checkin: new Date(req.body.c_checkin),
        c_checkout: new Date(req.body.c_checkout),
        c_total: req.body.c_total,
        room: {
            roomID: req.body.roomID,
            price: parseFloat(room.r_price)
        }
    });

    customer.save(customer)
        .then(async (r) => {
            const test = await Customer.findOne({ _id: r._id }).populate('room.roomID')
            const cus = mongooseToObject(test)
            cus.c_checkin = cus.c_checkin.toLocaleDateString('en-GB');
            cus.c_checkout = cus.c_checkout.toLocaleDateString('en-GB');
            res.render('TabRoomsClient/showBookingSuccess', {
                layout: 'mainClient.hbs',
                customers: cus
            });
        })

    // customer.save(function (err, result) {
    //     customer
    //         // exec thực khi 
    //         .exec(function (err, r) {
    //             if (err) return console.log(err);
    //             var customers = mongooseToObject(r);
    //             customers.c_checkin = customers.c_checkin.toLocaleDateString('en-GB');
    //             customers.c_checkout = customers.c_checkout.toLocaleDateString('en-GB');
    //             res.render('TabRoomsClient/showBookingSuccess', {
    //                 layout: 'mainClient.hbs',
    //                 customers: customers
    //             });
    //         })
    // });
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
module.exports = { showRoomList, showRoomDetail, showBookingRoom, store, quickSearchRoom, roomAvailable };

