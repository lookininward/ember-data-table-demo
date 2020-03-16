import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, find } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | data-table', function(hooks) {
  const testData = [
    { alias: 'golden eagle', down: false, uptime: 99.32 },
    { alias: 'sly bandicoot', down: true, uptime: 79.234 },
    { alias: 'night boots black', down: true, uptime: 39.32 },
    { alias: 'vale of shadows', down: false, uptime: 99.989 }
  ];

  setupRenderingTest(hooks);
  hooks.beforeEach(function() {
    this.set('model', testData);
  });

  test('renders headers and body', async function(assert) {
    assert.expect(2);
    await render(hbs`
      <DataTable @services={{this.model}} as |opts|>
        <DataTable::Header @setSortKey={{opts.setSortKey}}/>
        <DataTable::Body @services={{opts.sortedData}}/>
      </DataTable>
    `);
    assert.dom('.table__header').exists();
    assert.dom('.table__body').exists();
  });

  test('click to sort by Alias', async function(assert) {
    assert.expect(8);
    await render(hbs`
      <DataTable @services={{this.model}} as |opts|>
        <DataTable::Header @setSortKey={{opts.setSortKey}}/>
        <DataTable::Body @services={{opts.sortedData}}/>
      </DataTable>
    `);
    await click('[data-test-btn="sortByAlias"]');
    assert.ok(find('[data-test-row="0"]').textContent.includes('vale'));
    assert.ok(find('[data-test-row="1"]').textContent.includes('sly'));
    assert.ok(find('[data-test-row="2"]').textContent.includes('night'));
    assert.ok(find('[data-test-row="3"]').textContent.includes('golden'));
    await click('[data-test-btn="sortByAlias"]'); // reverse
    assert.ok(find('[data-test-row="0"]').textContent.includes('golden'));
    assert.ok(find('[data-test-row="1"]').textContent.includes('night'));
    assert.ok(find('[data-test-row="2"]').textContent.includes('sly'));
    assert.ok(find('[data-test-row="3"]').textContent.includes('vale'));
  });

  test('click to sort by Status', async function(assert) {
    assert.expect(8);
    await render(hbs`
      <DataTable @services={{this.model}} as |opts|>
        <DataTable::Header @setSortKey={{opts.setSortKey}}/>
        <DataTable::Body @services={{opts.sortedData}}/>
      </DataTable>
    `);
    await click('[data-test-btn="sortByStatus"]');
    assert.ok(find('[data-test-row="0"]').textContent.includes('UP'));
    assert.ok(find('[data-test-row="1"]').textContent.includes('UP'));
    assert.ok(find('[data-test-row="2"]').textContent.includes('DOWN'));
    assert.ok(find('[data-test-row="3"]').textContent.includes('DOWN'));
    await click('[data-test-btn="sortByStatus"]'); // reverse
    assert.ok(find('[data-test-row="0"]').textContent.includes('DOWN'));
    assert.ok(find('[data-test-row="1"]').textContent.includes('DOWN'));
    assert.ok(find('[data-test-row="2"]').textContent.includes('UP'));
    assert.ok(find('[data-test-row="3"]').textContent.includes('UP'));
  });
});
