const ms = require('ms');

const { env } = process;

module.exports = {
  env: env.NODE_ENV || 'development',
  http: {
    host: env.HTTP_HOST || '0.0.0.0',
    port: env.HTTP_PORT || '3000',
  },
  db: {
    client: 'pg',
    connection: {
      host: env.DB_HOST || '127.0.0.1',
      port: env.DB_PORT || '5432',
      user: env.DB_USER,
      password: env.DB_PASSWORD,
      database: env.DB_DATABASE,
    },
    waitConnection: ms('5s'),
  },
};
