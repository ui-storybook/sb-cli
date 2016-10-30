import React from 'react';

import 'ui-storybook/sb';
import 'ui-storybook/stories';

// Hot reload support
if (module.hot) {
    module.hot.accept();
    window.sb.reload();
}

// Remove this demo component
import { Welcome } from './../welcome/welcome';

// Write your stories here
let overview = sb.section('Welcome section');
overview.story('SB demo component')
  .add('Hello message', () => (<Welcome />));