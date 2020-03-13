import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { testData } from 'suitepad/tests/fixtures/data';

module('Unit | Route | services', function(hooks) {
  setupTest(hooks);

  test('model calls retrieval methods in sequence', async function(assert) {
    assert.expect(3);
    const route = this.owner.lookup('route:services');
    route._getData = () => { assert.step('_getData'); };
    route._getJSON = () => { assert.step('_getJSON'); };
    await route.model();
    assert.verifySteps(['_getData', '_getJSON']);
  });

  test('_getData calls fetch with given url', function(assert) {
    assert.expect(1);
    const route = this.owner.lookup('route:services');
    const url = 'https://gist.githubusercontent.com/test.json';
    window.fetch = fetchURL => {
      assert.equal(fetchURL, url, `expect fetch from : ${url}`);
    }
    route._getData(url);
  });

  test('_getJSON return data in json format', async function(assert) {
    assert.expect(1);
    const route = this.owner.lookup('route:services');
    window.fetch = () => { return { json: () =>  testData } }
    const result = await route._getJSON(fetch());
    assert.deepEqual(testData, result, "return expected data");
  });
});
