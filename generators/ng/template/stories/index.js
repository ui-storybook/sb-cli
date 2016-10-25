import 'ui-storybook/sb';
import 'ui-storybook/stories';

// Write your stories here

let overview = sb.section('Welcome section');
overview.story('SB demo component')
  .add('Hello text', '<sb-welcome></sb-welcome>');