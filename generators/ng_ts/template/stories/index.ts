/// <reference path="./../.config/sb.d.ts" />

import 'ui-storybook/sb';
import 'ui-storybook/stories';

if (module.hot) {
    module.hot.accept();
    window['sb'].reload();
}

// Write your stories here

let overview: stotybook.ISection = sb.section('Welcome section');
overview.story('SB demo component')
  .add('Hello text', '<sb-welcome></sb-welcome>');