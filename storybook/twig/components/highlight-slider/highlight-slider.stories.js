import { storiesOf } from '@storybook/html';
import Wrapper from '../../../utils/storybook/decorators/Wrapper';

import HighlightSlider from './highlight-slider.html.twig';
import { highlightSlider } from './highlight-slider.data';

storiesOf('Components|Highlight slider', module)
  .addDecorator(Wrapper)
  .add('Default', () => HighlightSlider({ ...highlightSlider }));
