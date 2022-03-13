const Room = require('../models/Room');
const { multipleToObject } = require ('../../config/utility/mongoose');
const { mongooseToObject } = require ('../../config/utility/mongoose');

class roomController {
    //GET
    showRoomList (req, res, next){
        // res.send('hello everybodyyyyyyy');
        // res.render('roomList');
        Room.find()
        .then(rooms => {
            res.render('room', { 
                rooms: multipleToObject(rooms)});
            // res.json(rooms);
        })
        .catch(next);
    }

    showRoomDetail (req, res, next) {
         //GET roomList/:slug

         Room.findOne({ slug: req.params.slug})
        .then(rooms => {
            res.render('rooms/showRoomDetail', { rooms: mongooseToObject(rooms) });
            // res.send('hello everybodyyyyyyy--'+ req.params.slug);
            // res.json(rooms);
        })
        .catch(next);
    }
}

module.exports = new roomController;
