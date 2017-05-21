const { NotFoundException } = require('meaning-error');


module.exports = async function updatePost({ postRepository, id, data }) {
  const hasPost = await postRepository.exists(id);
  if (!hasPost) {
    throw new NotFoundException('Could not found post');
  }

  await postRepository.update(id, data);

  return postRepository.findById(id);
};
