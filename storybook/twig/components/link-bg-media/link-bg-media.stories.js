import { storiesOf } from '@storybook/html';
import Wrapper from '../../../utils/storybook/decorators/Wrapper';

import LinkBgMedia from './link-bg-media.html.twig';
import { linkBgMedia } from './link-bg-media.data';

storiesOf('Components/Link(s) with background media', module)
  .addDecorator(Wrapper)
  .add('Default', () => LinkBgMedia({ ...linkBgMedia }))
  .add('Without title', () => LinkBgMedia({ ...linkBgMedia, title: '' }));
