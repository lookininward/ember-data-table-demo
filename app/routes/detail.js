import Route from '@ember/routing/route';
export default class Detail extends Route {
  model(model) {
    if (Object.keys(model).length <= 1) {
      this.transitionTo('/');
    }
  }
}
