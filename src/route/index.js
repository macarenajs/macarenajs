const meaningErrorMiddleware = require('meaning-error-middleware');
const proxyApp = require('asyncify-express');

const httpParser = require('../middlewares/http-parser');
const security = require('../middlewares/security');
const log = require('../middlewares/log');
const fileLoders = require('../files-loader');

module.exports = function routes(app) {
  app.use(httpParser());
  app.use(security());
  app.use(log());

  const proxy = proxyApp(app);
  loadRoutes().forEach(endPoints => endPoints(proxy));

  app.use(meaningErrorMiddleware);
};

function loadRoutes() {
  return fileLoders(__dirname);
}
