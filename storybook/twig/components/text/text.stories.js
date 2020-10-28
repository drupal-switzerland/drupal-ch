import { storiesOf } from '@storybook/html';
import Wrapper from '../../../utils/storybook/decorators/Wrapper';

import Text from './text.html.twig';
import { text } from './text.data';

storiesOf('Components/Text', module)
  .addDecorator(Wrapper)
  .add('Default', () => Text({ ...text.withTitle }))
  .add('With link', () => Text({ ...text.withLink }))
  .add('Without title', () => Text({ ...text.withoutTitle }));
