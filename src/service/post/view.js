const isUuid = require('is-uuid');
const { NotFoundError } = require('meaning-error');


module.exports = async function viewPost({ postRepository, id }) {
  const isInvalidId = !id || !isUuid.v4(id);
  if (isInvalidId) {
    throw new NotFoundError('Could not find post');
  }

  const post = await postRepository.findById(id);

  if (!post) {
    throw new NotFoundError('Could not find post');
  }

  return post;
};
