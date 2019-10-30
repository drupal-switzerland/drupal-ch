import { storiesOf } from '@storybook/html';
import Wrapper from '../../../utils/storybook/decorators/Wrapper';

import Text from './text.html.twig';
import { text, textWithImage } from './text.data';

storiesOf('Components|Text', module)
  .addDecorator(Wrapper)
  .add('Text', () => Text({ ...text }))
  .add('Text with Image', () => Text({ ...textWithImage }));
