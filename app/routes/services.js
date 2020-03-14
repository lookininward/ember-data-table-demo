import ENV from 'suitepad/config/environment';
import Route from '@ember/routing/route';

export default class Services extends Route {
  async _getData(url) {
    try {
      return await (await fetch(url)).json();
    } catch(e) {
      return { error: 'Please refresh the page and try again.' }
    }
  }

  model() {
    return this._getData(ENV.APP.API_ENDPOINT);
  }
}
