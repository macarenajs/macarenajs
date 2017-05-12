module.exports = function postRepository(knex) {
  return {
    findById: findById.bind(null, knex),
  }
}

function findById(knex, id) {
  return knex('posts')
    .where({ id, deleted: false })
    .select(['id', 'title', 'body']);
}
