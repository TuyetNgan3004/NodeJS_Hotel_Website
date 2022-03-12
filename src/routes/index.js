const homeRouter = require('./home');
const roomRouter = require('./room');


function route(app) {
   app.use('/', homeRouter);

   app.use('/room', roomRouter );

}

module.exports = route;