const repository = require('../repository');
const presenter = require('../presenter');
const service = require('../service');

// @TODO maybe routes should not know about express...
// if add babel support perhaps routes can be decorators?
module.exports = function postRoutes(app) {
  app.post('/posts', create);
  app.get('/posts', list);
  app.get('/posts/:id', view);
  app.put('/posts/:id', update);
  app.delete('/posts/:id', remove);
};

async function create(req, res) {
  const postRepository = repository('post');
  const post = await service('post').create({ postRepository, data: req.body });

  res.json(presenter('post')(post));
}

async function list(req, res) {
  const postRepository = repository('post');
  const posts = await service('post').list({ postRepository });

  res.json(presenter('post')(posts));
}

async function view(req, res) {
  const postRepository = repository('post');
  const post = await service('post').view({
    postRepository,
    id: req.params.id,
  });

  res.json(presenter('post')(post));
}

async function update(req, res) {
  const postRepository = repository('post');
  const post = await service('post').update({
    postRepository,
    id: req.params.id,
    data: req.body,
  });

  res.json(presenter('post')(post));
}

async function remove(req, res) {
  const postRepository = repository('post');

  await service('post').remove({ postRepository, id: req.params.id });
  res.sendStatus(204);
}
