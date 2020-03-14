import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | route: item', function(hooks) {
  setupApplicationTest(hooks);
  test('transition to services if not complete model', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/');
    await visit('/xyz');
    assert.equal(currentURL(), '/');
  });
});
