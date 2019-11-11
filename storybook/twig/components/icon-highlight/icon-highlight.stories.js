import { storiesOf } from '@storybook/html';
import Wrapper from '../../../utils/storybook/decorators/Wrapper';

import IconHighlight from './icon-highlight.html.twig';
import { iconHighlight } from './icon-highlight.data';

storiesOf('Components/Icon Highlight', module)
  .addDecorator(Wrapper)
  .add('Default', () => IconHighlight({ ...iconHighlight }));
