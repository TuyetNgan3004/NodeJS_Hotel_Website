class roomListController {
    //GET
    showRoomList (req, res, next){

        // res.send('hello everybodyyyyyyy');
        res.render('roomList');

    }
}

module.exports = new roomListController;
