import * as angular from 'angular';
import 'ui-storybook/helpers/ng';

// Support for hot module reload
// Remove this to turn off auto reload
if (module.hot) {
  module.hot.accept();
}

const mainModule = angular.module('sb', [
  'helper'
]);

// If we have old app remove it
let oldApp = document.getElementsByTagName('preview-helper')[0];

if (oldApp) {
  oldApp.remove();
}

let preview = document.createElement('preview-helper');
document.body.appendChild(preview);
angular.element(preview)
  .ready(() => {
    angular.bootstrap(preview, [mainModule.name], { strictDi: false });
  });
