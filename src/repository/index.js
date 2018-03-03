const loader = require('../files-loader');
const boot = require('../boot');

let repositories;
module.exports = function repository(name) {
  loadRepositoriesIfNeeded();

  return repositories.get(name);
};

function loadRepositoriesIfNeeded() {
  repositories = loader(__dirname);

  for (const [name, repository] of repositories) { // eslint-disable-line
    repositories.set(name, repository(boot('knex')));
  }
}
