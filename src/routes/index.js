const homeRouter = require('./home');
const feedbackRouter = require('./feedback');
const serviceRouter = require('./service');

function route(app) {
   app.use('/', homeRouter);
   app.use('/', feedbackRouter);
   app.use('/', serviceRouter);
}

module.exports = route;