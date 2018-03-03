const bodyParser = require('body-parser');

const combineMiddlewares = require('./combine-middlewares');

module.exports = function httpParser() {
  return combineMiddlewares([
    bodyParser.urlencoded({ extended: true, limit: '2MB' }),
    bodyParser.json({ limit: '2MB' }),
  ]);
};
