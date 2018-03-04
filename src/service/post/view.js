const isUuid = require('is-uuid');
const { NotFoundError } = require('meaning-error');

const repository = require('../../repository');

module.exports = async function viewPost({ id }) {
  const isInvalidId = !id || !isUuid.v4(id);
  if (isInvalidId) {
    throw new NotFoundError('Could not find post');
  }

  const post = await repository('post').findById(id);

  if (!post) {
    throw new NotFoundError('Could not find post');
  }

  return post;
};
