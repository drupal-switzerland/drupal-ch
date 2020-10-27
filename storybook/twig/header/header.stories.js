import { storiesOf } from '@storybook/html';

import Header from './header.html.twig';
import { mainMenu } from '../menu/main-menu/main-menu.data';

storiesOf('Regions/Header', module).add('Default', () => Header({ ...mainMenu }));
