module.exports = function listPosts({ userRepository }) {
  return userRepository.findAll();
}
