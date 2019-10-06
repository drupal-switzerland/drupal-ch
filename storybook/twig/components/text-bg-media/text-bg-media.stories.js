import { storiesOf } from '@storybook/html';
import Wrapper from '../../../utils/storybook/decorators/Wrapper';

import TextBgMedia from './text-bg-media.html.twig';
import { textBgMedia } from './text-bg-media.data';

storiesOf('Components/Text BG Media', module)
  .addDecorator(Wrapper)
  .add('Text BG Media', () => TextBgMedia({ ...textBgMedia }));
