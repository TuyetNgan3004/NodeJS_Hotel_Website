const Room = require('../models/Room');
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

module.exports = { showRoom };