const homeRouter = require('./home');
const loginRouter = require('./login');
const roomRouter = require('./room');
const feedbackRouter = require('./feedback');
const serviceRouter = require('./service');
const roomAdminRouter = require('./roomsAdmin');
const bookingAdminRouter = require('./bookingAdmin');
const checkInAdminRouter = require('./checkInAdmin');
const staffAdminRouter = require('./staffAdmin');


function route(app) {
  app.use('/', homeRouter);
  app.use('/room', roomRouter );
  app.use('/login', loginRouter);
  app.use('/', feedbackRouter);
  app.use('/service', serviceRouter);

  app.use('/admin', roomAdminRouter);
  app.use('/admin', bookingAdminRouter);
  app.use('/admin', checkInAdminRouter);
  app.use('/admin', staffAdminRouter);
}
module.exports = route;