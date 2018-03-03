const cors = require('cors');
const { url } = require('../../config');


module.exports = function corsMiddleware() {
  return cors({
    origin: url,
    optionsSuccessStatus: 200,
  });
};
