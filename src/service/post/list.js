const repository = require('../../repository');

module.exports = function listPosts() {
  return repository('post').findAll();
};
