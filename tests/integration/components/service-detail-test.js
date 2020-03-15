import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | service-detail', function(hooks) {
  setupRenderingTest(hooks);

  const base = `${window.location.origin}`;
  const model = {
    token: 'xyz',
    alias: 'golden eagle',
    url: 'www.test.com',
    favicon_url: 'www.favicon-url.com/icon.jpg',
    uptime: 99.32,
    down: false,
    down_since: '2020-01-24'
  }

  hooks.beforeEach(function() {
    this.set('model', model);
  });

  test('render icon if icon url', async function(assert) {
    await render(hbs`<ServiceDetail @icon={{this.model.favicon_url}}/>`);
    assert.equal(find('.detail__icon').src, `${base}/${model.favicon_url}`);
  });

  test('render skeleton if not icon url', async function(assert) {
    await render(hbs`<ServiceDetail @uptime={{this.model.uptime}}/>`);
    assert.equal(find('.detail__icon').src, `${base}/icon-skeleton.png`);
  });

  test('render alias if alias', async function(assert) {
    await render(hbs`<ServiceDetail @alias={{this.model.alias}}/>`);
    assert.equal(find('h1').textContent.trim(), model.alias);
  });

  test('render Unknown if not alias', async function(assert) {
    await render(hbs`<ServiceDetail @uptime={{this.model.uptime}}/>`);
    assert.equal(find('h1').textContent.trim(), 'Unknown Alias');
  });

  test('render link url if url', async function(assert) {
    await render(hbs`<ServiceDetail @url={{this.model.url}}/>`);
    assert.equal(find('a').href, `${base}/${model.url}`);
  });

  test('render Unavailable if not url', async function(assert) {
    await render(hbs`<ServiceDetail @uptime={{this.model.uptime}}/>`);
    assert.ok(find('[data-test-link]').textContent.includes('Unavailable'));
  });

  test('render uptime if uptime', async function(assert) {
    await render(hbs`<ServiceDetail @uptime={{this.model.uptime}}/>`);
    assert.equal(find('[data-test-uptime]').innerText, 'Uptime: 99.32%')
  });

  test('render Unavailable if not uptime', async function(assert) {
    await render(hbs`<ServiceDetail />`);
    assert.equal(find('[data-test-uptime]').innerText, 'Uptime: Unavailable')
  });

  test('render status UP if status not Down', async function(assert) {
    await render(hbs`<ServiceDetail @down={{this.model.down}}/>`);
    assert.equal(find('[data-test-status]').innerText, 'Status: UP');
  });

  test('render status Down Since if status Down', async function(assert) {
    this.set('model', { down: true, down_since: '2020-01-24' });
    await render(hbs`
      <ServiceDetail
        @down={{this.model.down}}
        @downSince={{this.model.down_since}}
      />
    `);
    assert.equal(
      find('[data-test-status]').innerText,
      "Status: DOWN since 2020-01-24"
    );
  });
});
