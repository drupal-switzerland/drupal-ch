import { storiesOf } from '@storybook/html';
import Wrapper from '../../../utils/storybook/decorators/Wrapper';

import Teaser from './teaser.html.twig';
import { teaser } from './teaser.data';

storiesOf('Components|Teaser', module)
  .addDecorator(Wrapper)
  .add('Teaser', () => Teaser({ ...teaser }));
