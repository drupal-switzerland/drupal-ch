import { storiesOf } from '@storybook/html';
import Wrapper from '../../../utils/storybook/decorators/Wrapper';

import TextWithMedia from './text-with-media.html.twig';
import { textWithMedia } from './text-with-media.data';

storiesOf('Components|Text with media', module)
  .addDecorator(Wrapper)
  .add('With image on right', () => TextWithMedia({ ...textWithMedia.withImage() }))
  .add('With image on left', () => TextWithMedia({ ...textWithMedia.withImage('left') }))
  .add('With video on right', () => TextWithMedia({ ...textWithMedia.withVideo() }))
  .add('With video on left', () => TextWithMedia({ ...textWithMedia.withVideo('left') }));
