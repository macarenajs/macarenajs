const morgan = require('morgan');

module.exports = function log() {
  if (process.env.NODE_ENV === 'test') {
    return ((req, res, next) => next());
  }

  return morgan('tiny');
};
