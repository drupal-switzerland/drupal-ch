import { storiesOf } from '@storybook/html';
import Wrapper from '../../../utils/storybook/decorators/Wrapper';

import ManualTeaser from './manual-teaser.html.twig';
import { manualTeaser } from './manual-teaser.data';

storiesOf('Components|Teaser', module)
  .addDecorator(Wrapper)
  .add('Manual Teaser', () => ManualTeaser({ ...manualTeaser }));
