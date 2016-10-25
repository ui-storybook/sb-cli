import 'ui-storybook/sb';
import 'ui-storybook/stories';

import { Welcome } from './../welcome/welcome';

// Write your stories here
let overview = sb.section('Welcome section');
overview.story('SB demo component')
  .add('Hello message', () => (<Welcome />));