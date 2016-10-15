/// <reference path="./.config/sb.d.ts" /> 

import * as angular from 'angular';
import 'ui-storybook/helpers/ng';

// Support for hot module reload
// Remove this to turn off auto reload
if (module.hot) {
  module.hot.accept();
}

// Import your app here and then add it to the module below 
const mainModule = angular.module('sb', [
  'helper'
]);

let preview: HTMLElement = document.createElement('preview-helper');
document.body.appendChild(preview);

angular.element(preview)
  .ready(() => {
    angular.bootstrap(preview, [mainModule.name], { strictDi: false });
  });
