import { storiesOf } from '@storybook/html';
import Wrapper from '../../../utils/storybook/decorators/Wrapper';

import LinkBgMedia from './link-bg-media.html.twig';
import { linkBgMedia } from './link-bg-media.data';

storiesOf('Components|BG Media/Link BG Media', module)
  .addDecorator(Wrapper)
  .add('Link BG Media', () => LinkBgMedia({ ...linkBgMedia }));
