const ms = require('ms');

const knex = require('./knex');

const { env } = process;

module.exports = {
  env: env.NODE_ENV || 'development',
  http: {
    host: env.HTTP_HOST || '0.0.0.0',
    port: env.HTTP_PORT || '3000',
  },
  db: Object.assign({}, knex, { waitConnection: ms('5s') }),
};
