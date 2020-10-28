import { storiesOf } from '@storybook/html';
import Wrapper from '../../../utils/storybook/decorators/Wrapper';

import Image from './image.html.twig';
import { image } from './image.data';

storiesOf('Components/Image', module)
  .addDecorator(Wrapper)
  .add('Default', () => Image({ ...image.default }))
  .add('As hero', () => Image({ ...image.asHero }));
