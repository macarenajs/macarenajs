const assert = require('assert');
const request = require('supertest');
const isUuid = require('is-uuid');

const Helpers = require('../../helpers');
const fixture = require('../../fixture');

describe('GET /posts', () => {
  let app;
  let response;

  before(async function init() {
    app = await Helpers.start();
  });

  before(async function importFixture() {
    await fixture.get('post')();
  });

  before(async function getList() {
    response = await request(app)
      .get('/posts');
  });

  it('should have HTTP status 200', () => {
    const actual = response.status;
    const expected = 200;

    assert.equal(actual, expected);
  });

  describe('payload', () => {
    let payload;

    before(function getPayload() {
      payload = response.body;
    });

    describe('links', () => {
      let links;

      before(function getLinks() {
        links = payload._links;
      });

      it('should have a link to self', () => {
        assert(links.self);
      });

      it('should have self.href equal to "/posts"', () => {
        const actual = links.self.href;
        const expected = '/posts';

        assert.equal(actual, expected);
      });
    });

    describe('list', () => {
      let list;

      before(function getList() {
        list = payload.list;
      });

      it('should have property list', () => {
        assert(list);
      });

      it('should be an array', () => {
        assert(Array.isArray(list));
      });

      it('should have length equal to 2', () => {
        const actual = list.length;
        const expected = 2;

        assert.equal(actual, expected);
      });

      describe('First post', () => {
        let first;

        before(function getFirstPost() {
          first = list[0];
        });

        it('should have an id as uuid', () => {
          assert(isUuid.v4(first.id));
        });

        it('should have title equal to "My First Post"', () => {
          const actual = first.title;
          const expected = 'My First Post';

          assert.equal(actual, expected);
        });

        it('should have body equal to "I have no idea"', () => {
          const actual = first.body;
          const expected = 'I have no idea';

          assert.equal(actual, expected);
        });

        it('should have created_at as date', () => {

        });

        it('should have updated_at as date', () => {

        });
      });
    });
  });

  after(async () => {
    await Helpers.tearDown();
  });
});
