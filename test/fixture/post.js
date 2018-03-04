const service = require('../../src/service');


const POSTS = [
  {
    title: 'My first post',
    body: 'I have no idea',
  },
  {
    title: 'I think I have some ideas',
    body: 'No still having no idea',
  },
];


module.exports = async function postFixture() {
  await service('post').create({ data: POSTS[0] });
  await service('post').create({ data: POSTS[1] });
};
