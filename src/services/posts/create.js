const viewPost = require('./view');


module.exports = function createPost({ userRepository, data }) {
  const post = await validate(data);
  const id = await userRepository.create(data);

  return viewPost({ userRepository, id });
}


function validate(data) {
  // some validation lib...
  //
  throw new BadRequestError('Post data is not valid', { errors });
}
