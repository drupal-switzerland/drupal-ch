import { storiesOf } from '@storybook/html';
import Wrapper from '../../../utils/storybook/decorators/Wrapper';

import Highlight from './highlight.html.twig';
import { highlight } from './highlight.data';

storiesOf('Components/Highlight', module)
  .addDecorator(Wrapper)
  .add('Default', () => Highlight({ ...highlight.withTitle }))
  .add('Without title', () => Highlight({ ...highlight.textOnly }));
