import { storiesOf } from '@storybook/html';
import Wrapper from '../../../utils/storybook/decorators/Wrapper';

import Media from './media.html.twig';
import { media } from './media.data';

storiesOf('Components/Media', module)
  .addDecorator(Wrapper)
  .add('Image', () => Media({ ...media.image }))
  .add('Video', () => Media({ ...media.video }))
  .add('Document', () => Media({ ...media.document }));
