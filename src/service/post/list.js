module.exports = function listPosts({ postRepository }) {
  return postRepository.findAll();
};
