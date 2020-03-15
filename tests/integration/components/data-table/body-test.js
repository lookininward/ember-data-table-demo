import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | data-table/body', function(hooks) {
  const testData = [{
    alias: 'golden eagle',
    down: false,
    uptime: 99.32,
    token: 'x4d3EfG'
  }];

  setupRenderingTest(hooks);
  hooks.beforeEach(function() {
    this.set('sortedData', testData);
  });

  test('Alias link is valid', async function(assert) {
    assert.expect(1);
    await render(hbs`<DataTable::Body @services={{this.sortedData}}/>`);
    const aliasLink = find('[data-test-row="0"] a');
    assert.equal(aliasLink.href, 'https://updown.io/x4d3EfG')
  });

  test('Details link is valid', async function(assert) {
    assert.expect(1);
    const router = this.owner.lookup('router:main');
    router.setupRouter();
    await render(hbs`<DataTable::Body @services={{this.sortedData}}/>`);
    const detailsLink = find('[data-test-btn="details"]');
    assert.ok(detailsLink.href.includes('/x4d3EfG'));
  });
});