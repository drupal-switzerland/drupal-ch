import { storiesOf } from '@storybook/html';

import Footer from './footer.html.twig';
import { footerMenu } from '../menu/footer-menu/footer-menu.data';

storiesOf('Regions/Footer', module).add('Default', () => Footer({ ...footerMenu }));
