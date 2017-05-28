const methodOverride = require('method-override');
const helmet = require('helmet');

const combineMiddlewares = require('./combine-middlewares');

module.exports = function security() {
  return combineMiddlewares([methodOverride(), helmet.hidePoweredBy()]);
};
