import ENV from 'suitepad/config/environment';
import Route from '@ember/routing/route';

export default class Application extends Route {
  async _getData(url) {
    try {
      return await (await fetch(url)).json();
    } catch(e) {
      alert(e);
    }
  }

  model() {
    return this._getData(ENV.APP.API_ENDPOINT);
  }
}
