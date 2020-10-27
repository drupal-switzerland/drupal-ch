import { storiesOf } from '@storybook/html';
import Wrapper from '../../../utils/storybook/decorators/Wrapper';

import IconTeaser from './icon-teaser.html.twig';
import { iconTeaser } from './icon-teaser.data';

storiesOf('Components/Teaser', module)
  .addDecorator(Wrapper)
  .add(
    'Icon',
    () => `
      <div style="width: 300px;">
        ${IconTeaser({ ...iconTeaser[0].entity })}
      </div>
    `,
  );
