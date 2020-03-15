'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'suitepad',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      EXTEND_PROTOTYPES: {
        Date: false
      }
    },
    APP: {}
  };

  if (environment === 'test') {
    ENV.locationType = 'none';
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'development' || environment === 'test') {
    ENV.APP.API_ENDPOINT = 'https://gist.githubusercontent.com/Rio517/c523873cd4495456a88cac8f1860461b/raw/81667cb58db57cae093092748225c3a98a43ee1e/checks.json';
  }

  if (environment === 'production') {
    ENV.APP.API_ENDPOINT = 'https://updown.io/api/checks?api-key=ro-pz3x1zy4ae63yhygraqe';
  }

  return ENV;
};
