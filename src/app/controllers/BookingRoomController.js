class bookingRoomController {
    //GET
    showBookingRoom (req, res, next){

        res.render('bookingRoom');

    }
}

module.exports = new bookingRoomController;