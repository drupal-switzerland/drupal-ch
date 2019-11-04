import { storiesOf } from '@storybook/html';

import FooterMenu from './footer-menu.html.twig';
import { footerMenu } from './footer-menu.data';

storiesOf('Components|Menu', module).add('Footer', () => FooterMenu({ ...footerMenu }));
