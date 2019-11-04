import { storiesOf } from '@storybook/html';

import Footer from './footer.html.twig';
import { footerMenu } from '../menu/footer-menu/footer-menu.data';

storiesOf('Components|Regions', module)
  .add('Footer', () => Footer({ ...footerMenu }));
