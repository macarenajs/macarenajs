const { NotFoundError } = require('meaning-error');


module.exports = async function viewPost({ postRepository, id }) {
  if (!id) {
    throw new NotFoundError('Could not find post');
  }

  const post = await postRepository.findById(id);

  if (!post) {
    throw new NotFoundError('Could not find post');
  }

  return post;
};
