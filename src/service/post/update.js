const { NotFoundException } = require('meaning-error');
const repository = require('../../repository');

module.exports = async function updatePost({ id, data }) {
  const hasPost = await repository('post').exists(id);
  if (!hasPost) {
    throw new NotFoundException('Could not found post');
  }

  await repository('post').update(id, data);

  return repository('post').findById(id);
};
