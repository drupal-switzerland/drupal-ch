import { storiesOf } from '@storybook/html';

import MainMenu from './main-menu.html.twig';
import { mainMenu } from './main-menu.data';

storiesOf('Components|Menu', module).add(
  'Main menu',
  () => `<div style="height: 70px;">${MainMenu({ ...mainMenu })}</div>`,
);
