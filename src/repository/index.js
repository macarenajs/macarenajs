const loader = require('../files-loader');
const boot = require('../boot');

let repositories;
module.exports = function repository(name) {
  loadRepositoriesIfNeeded();

  return repositories.get(name);
};


function loadRepositoriesIfNeeded() {
  if (repositories) {
    return;
  }

  repositories = loader(__dirname);
  repositories
    .forEach(async (repository, name) => {
      repositories.set(name, repository(await boot('knex')()));
    });
}
