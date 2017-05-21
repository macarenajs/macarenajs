module.exports = async function createPost({ postRepository, data }) {
  const postId = await postRepository.create(data);

  return postRepository.findById(postId);
};
