const partial = require('lodash.partial');

module.exports = function postRepository(knex) {
  return {
    findById: partial(findById, knex),
    findAll: partial(findAll, knex),
    create: partial(create, knex),
    update: partial(update, knex),
    remove: partial(remove, knex),
    exists: partial(exists, knex),
    isTitleUnique: partial(isTitleUnique, knex),
  };
};


async function findById(knex, id) {
  return knex('posts')
    .where({ id, deleted: null })
    .select(['id', 'title', 'body'])
    .first();
}


function findAll(knex) {
  return knex('posts').where({ deleted: null }).select(['id', 'title', 'body']);
}


async function create(knex, data) {
  const [id] = await knex('posts').insert(data).returning('id');

  return id;
}


function update(knex, id, data) {
  return knex('posts').where({ id }).update(data);
}


function remove(knex, id) {
  return knex('posts').where({ id }).update({ deleted: new Date() });
}


async function exists(knex, id) {
  const [count] = await knex('posts').where({ id, deleted: null }).count();

  return count > 0;
}


async function isTitleUnique(knex, title) {
  const [count] = await knex('posts')
    .whereRaw('LOWER(title)', '=', title)
    .count();

  return count > 0;
}
