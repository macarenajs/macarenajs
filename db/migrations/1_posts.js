function up(knex) {
  return knex.schema.createTable('posts', (table) => {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('title');
    table.text('body');
    table.datetime('created_at');
    table.datetime('updated_at');
    table.datetime('deleted');
  });
}

function down(knex) {
  return knex.schema.dropTable('posts');
}


module.exports = {
  up,
  down,
};

