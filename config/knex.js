const { env } = process;

module.exports = {
  client: 'pg',
  connection: getConnection(),
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: `${__dirname}/../db/migrations/`,
    tableName: 'knex_migrations',
  },
  seeds: {
    directory: `${__dirname}/../db/seeds/`,
  },
  debug: env.NODE_ENV !== 'production',
  ssl: env.NODE_ENV === 'production',
};


function getConnection() {
  if (env.DATABASE_URL) {
    return env.DATABASE_URL;
  }

  return {
    host: env.DB_HOST || '127.0.0.1',
    port: env.DB_PORT || '5432',
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_DATABASE,
  };
}
