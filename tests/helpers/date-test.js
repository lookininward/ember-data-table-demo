import { date } from 'suitepad/helpers/date';
import { module, test } from 'qunit';

const data = [
  {
    input: '2020-03-16T15:54:01Z',
    output: '2020-03-16 11:54:01'
  },
  {
    input: '2018-05-08T13:35:15Z',
    output: '2018-05-08 09:35:15'
  },
  {
    input: '2018-01-08T13:35:00Z',
    output: '2018-01-08 08:35:00'
  }
];

module('Unit | Helper | date formatter', function() {
  test('formats UTC date to readable ISO 8601 standard', assert => {
    assert.expect(3);
    data.forEach(i => assert.equal(date([i.input]), i.output));
  });
});
