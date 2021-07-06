const assert = require('assert');
const app = require('../../src/app');

describe('\'interactions\' service', () => {
  it('registered the service', () => {
    const service = app.service('interactions');

    assert.ok(service, 'Registered the service');
  });
});
