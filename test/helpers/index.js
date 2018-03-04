const { application } = require('../../src');
const boot = require('../../src/boot');
const knexCleaner = require('knex-cleaner');

module.exports = {
  start,
  tearDown,
  clean,
  createErrorFieldsMap,
};

async function start() {
  const app = await application();

  await runMigrations();
  await cleanDatabase();

  return app;
}


async function runMigrations() {
  const knex = boot('knex');

  await knex.migrate.latest();

  if (knex.client.config.seeds) {
    await knex.seed.run();
  }
}


async function tearDown() {
  await cleanDatabase();
}


async function clean() {
  await cleanDatabase();
}


async function cleanDatabase() {
  const knex = boot('knex');
  const options = {
    ignoreTables: ['knex_migrations', 'knex_migrations_lock', 'tools'],
  };

  await knexCleaner.clean(knex, options);
}


function createErrorFieldsMap(error) {
  return new Map(error.map(e => [e.field, e.message]));
}
