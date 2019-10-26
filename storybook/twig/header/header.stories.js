import { storiesOf } from '@storybook/html';

import Header from './header.html.twig';
import { mainMenu } from '../menu/main-menu/main-menu.data';

export const graphql = {
  mainMenu,
};

storiesOf('Components|Regions/Header', module)
  .add('Header', () => Header({ graphql }));
