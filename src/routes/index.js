const homeRouter = require('./home');
const loginRouter = require('./login');
const roomRouter = require('./room');
const feedbackRouter = require('./feedback');
const serviceRouter = require('./service');


function route(app) {
   app.use('/', homeRouter);
   app.use('/room', roomRouter );
   app.use('/login', loginRouter);
  app.use('/', feedbackRouter);
   app.use('/', serviceRouter);


module.exports = route;