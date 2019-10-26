import { storiesOf } from '@storybook/html';

import Footer from './footer.html.twig';
import { footerMenu } from '../menu/footer-menu/footer-menu.data';

export const graphql = {
  footerMenu,
};

storiesOf('Components|Regions/Footer', module)
  .add('Footer', () => Footer({ graphql }));
