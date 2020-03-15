import { description } from 'suitepad/helpers/description';
import { module, test } from 'qunit';
import { map } from 'suitepad/data/descriptions';

module('Unit | Helper | description', function() {
  test('returns correct description for token', assert => {
    assert.expect(9);
    const keys = Object.keys(map);
    keys.forEach(key =>  assert.equal(description([key]), map[key]));
    assert.notOk(description(['xyz']));
  });
});
