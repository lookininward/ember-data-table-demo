import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | data-table/header', function(hooks) {
  setupRenderingTest(hooks);

  test('Alias header calls setSortKey', async function(assert) {
    assert.expect(1);
    this.set('setSortKey', sortKey => {
      assert.equal(sortKey, 'alias', "calls setSortKey with 'alias'" );
    });
    await render(hbs`<DataTable::Header @setSortKey={{this.setSortKey}}/>`);
    await click('[data-test-btn="sortByAlias"]');
  });

  test('Status header calls setSortKey', async function(assert) {
    assert.expect(1);
    this.set('setSortKey', sortKey => {
      assert.equal(sortKey, 'down', "calls setSortKey with 'down'" );
    });
    await render(hbs`<DataTable::Header @setSortKey={{this.setSortKey}}/>`);
    await click('[data-test-btn="sortByStatus"]');
  });
});
