import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | services', function(hooks) {
  setupTest(hooks);

  test('model calls data retrieval method', function(assert) {
    assert.expect(2);
    const route = this.owner.lookup('route:services');
    route._getData = () => assert.step('_getData');
    route.model();
    assert.verifySteps(['_getData']);
  });

  test('_getData calls fetch with given url', function(assert) {
    assert.expect(1);
    const route = this.owner.lookup('route:services');
    const url = 'https://gist.githubusercontent.com/test.json';
    window.fetch = fetchURL => {
      assert.equal(fetchURL, url, `expect fetch from : ${url}`);
      return { json: function() { return; } }
    }
    route._getData(url);
  });
});
