import { storiesOf } from '@storybook/html';

import Header from './header.html.twig';
import { mainMenu } from '../menu/main-menu/main-menu.data';

storiesOf('Components|Regions', module)
  .add('Header', () => Header({ ...mainMenu }));
