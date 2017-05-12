const repository = require('./repository');
const presenter = require('./presenter');


async function list(req, res) {
  const postRepository = repository('post');
  const posts = await listPosts({ postRepository });

  res.json(presenter('posts')(posts));
}

async function view(req, res) {
  const postRepository = repository('post');
  const post = await viewPost({ postRepository, id: req.params.id });

  res.json(presenter('posts')(post));
}

async function update(req, res) {
  const postRepository = repository('post');
  const post = await updatePost({
    postRepository,
    id: req.params.id,
    post: req.body
  });

  res.json(presenter('posts')(post));
}

async function remove(req, res) {
  const postRepository = repository('post');

  await removePost({ postRepository, id: req.params.id });
  res.sendStatus(204);
}
