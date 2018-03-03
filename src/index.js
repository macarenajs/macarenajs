const express = require('express');

const config = require('../config');
const boot = require('./boot');
const route = require('./route');
const task = require('./task');

module.exports = {
  application,
  start,
};

async function application() {
  handleErrors();

  const app = express();

  await boot.init(config);
  route(app);

  return app;
}

async function start() {
  const app = await application();

  const { http } = config;

  app.listen(http.port, http.host, () => {
    console.log('Server started at [%s:%s]', http.host, http.port);
  });

  // run tasks
  task();
}


function handleErrors() {
  handlePromiseRejectionError();
}

function handlePromiseRejectionError() {
  process.on('unhandledRejection', (reason) => {
    console.error(reason.stack || reason);
  });
}
