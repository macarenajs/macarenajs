module.exports = function postRepository(knex) {
  return {
    findById: findById.bind(null, knex),
    findAll: findAll.bind(null, knex),
    create: create.bind(null, knex),
    update: update.bind(null, knex),
    remove: remove.bind(null, knex),
  };
};

async function findById(knex, id) {
  return knex('posts')
    .where({ id, deleted: null })
    .select(['id', 'title', 'body'])
    .first();
}

function findAll(knex) {
  return knex('posts')
    .where({ deleted: null })
    .select(['id', 'title', 'body']);
}

async function create(knex, data) {
  const [id] = await knex('posts')
    .insert(data)
    .returning('id');

  return id;
}

function update(knex, id, data) {
  return knex('posts')
    .where({ id })
    .update(data);
}

function remove(knex, id) {
  return knex('posts')
    .where({ id })
    .update({ deleted: new Date() });
}
