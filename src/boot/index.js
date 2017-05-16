const loader = require('../files-loader');
const config = require('../../config');

let boots;
module.exports = function boot(name) {
  loadBootsIfNeeded();

  return boots.get(name);
};


function loadBootsIfNeeded() {
  boots = loader(__dirname);

  boots.forEach((boot, name) => {
    boots.set(name, boot(config));
  });

  return boots;
}
