const debug = require('debug');


module.exports = function debugBoot({ appName }) {
  return (namespace) => debug(`${appName}:${namespace || '*'}`);
};
