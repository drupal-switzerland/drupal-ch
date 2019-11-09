import { storiesOf } from '@storybook/html';
import Wrapper from '../../../utils/storybook/decorators/Wrapper';

import Text from './text.html.twig';
import { text } from './text.data';

storiesOf('Components|Text', module)
  .addDecorator(Wrapper)
  .add('Without media', () => Text({ ...text.default }))
  .add('With image on right', () => Text({ ...text.withImage() }))
  .add('With image on left', () => Text({ ...text.withImage('left') }))
  .add('With video on right', () => Text({ ...text.withVideo() }))
  .add('With video on left', () => Text({ ...text.withVideo('left') }));
