const homeRouter = require('./home');
const loginRouter = require('./login');
const roomRouter = require('./room');
const feedbackRouter = require('./feedback');
const serviceRouter = require('./service');
const roomAdminRouter = require('./roomsAdmin');


function route(app) {
  app.use('/', homeRouter);
  app.use('/room', roomRouter );
  app.use('/login', loginRouter);
  app.use('/', feedbackRouter);
  app.use('/service', serviceRouter);

  app.use('/admin', roomAdminRouter);
}
module.exports = route;