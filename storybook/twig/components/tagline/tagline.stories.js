import { storiesOf } from '@storybook/html';
import Wrapper from '../../../utils/storybook/decorators/Wrapper';

import Tagline from './tagline.html.twig';
import { tagline } from './tagline.data';

storiesOf('Components|Tagline', module)
  .addDecorator(Wrapper)
  .add('Large', () => Tagline({ ...tagline.large }))
  .add('Small', () => Tagline({ ...tagline.small }));
