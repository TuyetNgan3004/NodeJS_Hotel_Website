const homeRouter = require('./home');
const loginRouter = require('./login');
const roomRouter = require('./room');
const feedbackRouter = require('./feedback');
const serviceRouter = require('./service');
const promotionRouter = require('./promotion');
const roomAdminRouter = require('./roomsAdmin');
const bookingAdminRouter = require('./bookingAdmin');
const checkInAdminRouter = require('./checkInAdmin');
const staffAdminRouter = require('./staffAdmin');
const billAdminRouter = require('./billAdmin');



function route(app) {
  app.use('/', homeRouter);
  app.use('/room', roomRouter );
  app.use('/login', loginRouter);
  app.use('/feedback', feedbackRouter);
  app.use('/service', serviceRouter);
  app.use('/promotion', promotionRouter);

  app.use('/admin', roomAdminRouter);
  app.use('/admin', bookingAdminRouter);
  app.use('/admin', checkInAdminRouter);
  app.use('/admin', staffAdminRouter);
  app.use('/admin', billAdminRouter);
}
module.exports = route;