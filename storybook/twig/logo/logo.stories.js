import { storiesOf } from '@storybook/html';

import Logo from './logo.html.twig';

storiesOf('Components|Logo', module)
  .add('Logo', () => Logo());
