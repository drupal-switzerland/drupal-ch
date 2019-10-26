import { storiesOf } from '@storybook/html';

import MainMenu from './main-menu.html.twig';
import { mainMenu } from './main-menu.data';

storiesOf('Components|Menu/Main', module).add('Desktop', () => MainMenu(mainMenu));
