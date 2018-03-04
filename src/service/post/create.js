const yup = require('yup');
const { BadRequestError } = require('meaning-error');

const repository = require('../../repository');

module.exports = async function createPost({ data }) {
  const post = sanitize(data);

  await validate({ post });
  const postId = await repository('post').create(post);

  return repository('post').findById(postId);
};


function sanitize(post) {
  const schema = yup.object().shape({
    title: yup.string().trim().transform(titleize),
    body: yup.string(),
  });

  return schema.cast(post);
}

function titleize(text) {
  if (typeof text === 'string') {
    return text
      .toLowerCase()
      .replace(/(?:^|\s|-)\S/g, first => first.toUpperCase());
  }

  return null;
}

async function validate({ post }) {
  yup.addMethod(yup.string, 'isTitleUnique', function isTitleUnique(message) {
    return this.test({
      name: 'is-title-unique',
      exclusive: true,
      message: message || 'title is not unique',
      test: repository('post').isTitleUnique,
    });
  });

  const schema = yup.object().shape({
    title: yup.string().required().isTitleUnique(),
    body: yup.string().required(),
  });

  try {
    await schema.validate(post, { abortEarly: false });
  } catch (error) {
    const errors = presentErrors(error.inner);
    throw new BadRequestError('Post is not valid', errors);
  }
}

function presentErrors(errors) {
  return errors.map(e => ({ field: e.path, message: e.message }));
}
