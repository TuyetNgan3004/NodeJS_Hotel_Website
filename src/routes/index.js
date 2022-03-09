const homeRouter = require('./home');
const roomListRouter = require('./roomList');
const roomDetailRouter = require('./roomDetail');
const bookingRoomRouter = require('./bookingRoom');

function route(app) {
   app.use('/', homeRouter);

   app.use('/roomList', roomListRouter );

   app.use('/roomDetail', roomDetailRouter);

   app.use('/bookingRoom', bookingRoomRouter);
}

module.exports = route;