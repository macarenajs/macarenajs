const loader = require('../files-loader');
const config = require('../../config');

let boots;
function boot(name) {
  if (!boots) {
    throw new Error('Boot not initialized');
  }

  return boots.get(name);
}

boot.init = async () => {
  boots = loader(__dirname);

  for (const [name, bootEntry] of boots) { // eslint-disable-line
    boots.set(name, await bootEntry(config)); // eslint-disable-line
  }
};

module.exports = boot;
