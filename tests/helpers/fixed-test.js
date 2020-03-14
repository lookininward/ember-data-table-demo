import { fixed } from 'suitepad/helpers/fixed';
import { module, test } from 'qunit';

module('Unit | Helper | format int to percentage', function() {
  test('formats integer to 2 decimals appended with %', function(assert) {
    assert.equal(fixed([99.9899]), '99.99%');
    assert.equal(fixed([34.3]), '34.30%');
  });
});
