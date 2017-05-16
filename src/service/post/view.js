module.exports = async function viewPost({ userRepository, id }) {
  const safeId = parseInt(id, 10);

  if (isNaN(safeId)) {
    throw new NotFoundError('Could not find post');
  }

  const post = await userRepository.findById(safeId);

  if (!post) {
    throw new NotFoundError('Could not find post');
  }


  return post;
}
