const assert = require('assert');
const index = require('../index')
const nock = require('nock');

describe('First test', () => {
    it('should mock http request with nock', async () => {
        nock('https://api.publicapis.org')
            .get('/entries')
            .reply(200, { entries: ['Hello, World!'] })
        const res = await index.get();
        assert.equal(res, 'Hello, World!')
    });
})