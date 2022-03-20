const homeRouter = require('./home');
const loginRouter = require('./login');
const roomRouter = require('./room');


function route(app) {
   app.use('/', homeRouter);
   app.use('/room', roomRouter );
   app.use('/login', loginRouter);
}

module.exports = route;