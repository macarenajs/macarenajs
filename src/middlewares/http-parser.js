const bodyParser = require('body-parser');

const combineMiddlewares = require('./combine-middlewares');


module.exports = function httpParser() {
  return combineMiddlewares([
    bodyParser.urlencoded({ extended: true }),
    bodyParser.json(),
  ]);
};
