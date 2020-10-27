import { storiesOf } from '@storybook/html';

import MainMenu from './main-menu.html.twig';
import { mainMenu } from './main-menu.data';

storiesOf('Menus/Main menu', module).add(
  'Default',
  () => `<div style="height: 70px;">${MainMenu({ ...mainMenu })}</div>`,
);
