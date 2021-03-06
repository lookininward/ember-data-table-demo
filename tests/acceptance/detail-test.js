import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | route: detail', function(hooks) {
  setupApplicationTest(hooks);
  test('transition to services if not complete model', async assert => {
    assert.expect(2);
    await visit('/');
    assert.equal(currentURL(), '/');
    await visit('/xyz');
    assert.equal(currentURL(), '/');
  });
});
