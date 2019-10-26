import { storiesOf } from '@storybook/html';
import Wrapper from '../../../utils/storybook/decorators/Wrapper';

import Text from './text.html.twig';
import { text } from './text.data';

storiesOf('Components|Text', module)
  .addDecorator(Wrapper)
  .add('Text', () => Text({ ...text }));
