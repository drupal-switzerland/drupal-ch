import { storiesOf } from '@storybook/html';
import Wrapper from '../../../utils/storybook/decorators/Wrapper';

import TextBgMedia from './text-bg-media.html.twig';
import { textBgMedia } from './text-bg-media.data';

storiesOf('Components|Text with background media', module)
  .addDecorator(Wrapper)
  .add('Default', () => TextBgMedia({ ...textBgMedia.default }))
  .add('As hero', () => TextBgMedia({
    ...textBgMedia.asHero,
  }));
