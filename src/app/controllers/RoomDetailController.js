class roomDetailController {
    //GET
    showRoomDetail (req, res, next){

        res.render('roomDetail');

    }
}

module.exports = new roomDetailController;