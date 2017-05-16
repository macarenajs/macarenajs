const loader = require('../files-loader');

let services;
module.exports = function service(name) {
  loadServicesIfNeeded();

  return services.get(name);
};


function loadServicesIfNeeded() {
  if (services) {
    return;
  }

  services = loader(__dirname);
}
