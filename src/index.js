const express = require('express');

const config = require('../config');
const debug = require('./debug');
const routes = require('./routes');

module.exports = {
  application,
  start,
};

function application() {
  handleErrors();

  const app = express();

  routes(app);

  return app;
}

async function start() {
  const app = application();

  const { http } = config;


  app.listen(http.port, http.host, () => {
    debug('Server started at [%s:%s]', http.host, http.port);
  });
}


function handleErrors() {
  handlePromiseRejectionError();
}


function handlePromiseRejectionError() {
  process.on('unhandledRejection', (reason) => {
    console.error(reason.stack || reason);
  });
}

