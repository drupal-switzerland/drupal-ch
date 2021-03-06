import { storiesOf } from '@storybook/html';
import DarkWrapper from '../../../utils/storybook/decorators/DarkWrapper';

import FooterMenu from './footer-menu.html.twig';
import { footerMenu } from './footer-menu.data';

storiesOf('Menus/Footer', module)
  .addDecorator(DarkWrapper)
  .add('Default', () => FooterMenu({ ...footerMenu }));
