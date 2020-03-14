import Route from '@ember/routing/route';
export default class Item extends Route {
  model(model) {
    if (Object.keys(model).length <= 1) {
      this.transitionTo('/');
    }
  }
}
