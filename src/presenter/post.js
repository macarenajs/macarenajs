module.exports = function postPresenter(data) {
  if (Array.isArray(data)) {
    return list(data);
  }

  return view(data);
};

function list(posts) {
  return {
    list: posts.map(view),
    _links: {
      self: { href: '/posts' },
    },
  };
}

function view(post) {
  return {
    id: post.id,
    title: post.title,
    body: post.body,
    _links: {
      self: { href: `/posts/${post.id}` },
    },
  };
}
