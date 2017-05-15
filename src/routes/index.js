const meaningErrorMiddleware = require('meaning-error-middleware');
const wrap = require('express-async-wrap');


const security = require('./middlewares/security');
const fileLoders = require('../file-loaders');

module.exports = function routes(app) {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(security());

  loadRoutes().map(route => applyAsyncAwaitToRouteIfNeeded(route);

  app.use(meaningErrorMiddleware);
};


function loadRoutes() {
  return fileLoders(__dirname);
}


function applyAsyncAwaitToRouteIfNeeded(route) {
  if (isAsync(route)) {
    return wrap(route);
  }

  return route;
}


function isAsync(route) {
  return fn.constructor.name === 'AsyncFunction';
}
