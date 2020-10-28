import { storiesOf } from '@storybook/html';
import Wrapper from '../../../utils/storybook/decorators/Wrapper';

import Slider from './slider.html.twig';
import { slider } from './slider.data';

storiesOf('Components/Slider', module)
  .addDecorator(Wrapper)
  .add('Default', () => Slider({ ...slider }));
