const presenter = require('../presenter');
const service = require('../service');

module.exports = function postRoutes(app) {
  app.post('/posts', create);
  app.get('/posts', list);
  app.get('/posts/:id', view);
  app.put('/posts/:id', update);
  app.delete('/posts/:id', remove);
};

async function create(req, res) {
  const post = await service('post').create({ data: req.body });

  res.json(presenter('post')(post));
}

async function list(req, res) {
  const posts = await service('post').list();

  res.json(presenter('post')(posts));
}

async function view(req, res) {
  const post = await service('post').view({
    id: req.params.id,
  });

  res.json(presenter('post')(post));
}

async function update(req, res) {
  const post = await service('post').update({
    id: req.params.id,
    data: req.body,
  });

  res.json(presenter('post')(post));
}

async function remove(req, res) {
  await service('post').remove({ id: req.params.id });
  res.sendStatus(204);
}
