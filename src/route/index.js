const meaningErrorMiddleware = require('meaning-error-middleware');
const proxyApp = require('asyncify-express');

const httpParser = require('../middlewares/http-parser');
const security = require('../middlewares/security');
const fileLoders = require('../files-loader');

module.exports = function routes(app) {
  app.use(httpParser());
  app.use(security());

  const proxy = proxyApp(app);
  loadRoutes().forEach(endPoints => endPoints(proxy));

  app.use(meaningErrorMiddleware);
};

function loadRoutes() {
  return fileLoders(__dirname);
}
