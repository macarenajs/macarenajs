const knex = require('knex');
const promiseMemoize = require('promise-memoize');
const waitForPort = require('wait-for-port');


module.exports = function knexBoot({ db }) {
  console.log(db);
  return promiseMemoize(async () => {
    await waitForDB(db);

    return knex(db);
  });
};


async function waitForDB({ connection, waitConnection }) {
  const { host, port } = connection;

  return new Promise((resolve, reject) => {
    waitForPort(host, port, waitConnection, (err) => {
      if (err) {
        return reject(err);
      }

      return resolve();
    });
  });
}
