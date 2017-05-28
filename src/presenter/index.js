const loader = require('../files-loader');

let presenters;
module.exports = function presenter(name) {
  loadPresentersIfNeeded();
  return presenters.get(name);
};

function loadPresentersIfNeeded() {
  if (!presenters) {
    presenters = loader(`${__dirname}/`);
  }
}
