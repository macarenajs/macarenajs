const knex = require('knex');
const waitForPort = require('wait-for-port');

module.exports = async function knexBoot({ db }) {
  await waitForDB(db);

  return knex(db);
};

async function waitForDB({ connection, waitConnection }) {
  const { host, port } = connection;

  return new Promise((resolve, reject) => {
    waitForPort(host, port, waitConnection, (err) => {
      if (err) {
        return reject(new Error(`Could not connect to DB ${host}:${port}`));
      }

      return resolve();
    });
  });
}
