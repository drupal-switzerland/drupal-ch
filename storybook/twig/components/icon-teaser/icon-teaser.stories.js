import { storiesOf } from '@storybook/html';
import Wrapper from '../../../utils/storybook/decorators/Wrapper';

import IconTeaser from './icon-teaser.html.twig';
import { iconTeaser } from './icon-teaser.data';

storiesOf('Components/Icon Teaser', module)
  .addDecorator(Wrapper)
  .add('Icon Teaser', () => IconTeaser({ ...iconTeaser }));
