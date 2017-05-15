const methodOverride = require('method-override');
const helmet = require('helmet');


module.exports = function security() {
  return securityMiddleware(req, res, next);
};


function securityMiddleware(req, res, next) {
  return combineMiddlewares([
    methodOverride,
    helmet.hidePoweredBy,
  ]);
}
