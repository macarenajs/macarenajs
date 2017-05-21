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
      self: '/posts',
      next: '/posts?page=2',
    },
  };
}


function view(post) {
  return {
    id: post.id,
    title: post.title,
    body: post.body,
    _links: {
      self: `/posts/${post.id}`,
    },
  };
}
