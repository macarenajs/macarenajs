const express = require('express');

const debug = require('./debug');


export function application(config) {
  const app = express();

  routes(app);

  return app;
}

export async function start(config) {
  const app = application(config);

  const { http } = config.env;

  app.listen(http.port, http.host, () => {
    debug('Server started at [%s:%s]', http.host, http.port);
  });
}
