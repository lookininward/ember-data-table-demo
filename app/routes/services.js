import Route from '@ember/routing/route';
const url = 'https://gist.githubusercontent.com/Rio517/c523873cd4495456a88cac8f1860461b/raw/81667cb58db57cae093092748225c3a98a43ee1e/checks.json';

export default class Application extends Route {
  async _getData(url) {
    try {
      return await (await fetch(url)).json();
    } catch(e) {
      alert(e);
    }
  }

  model() {
    return this._getData(url);
  }
}
