import { storiesOf } from '@storybook/html';
import Wrapper from '../../utils/storybook/decorators/Wrapper';

import StatusMessages from './status-messages.html.twig';
import { statusMessages } from './status-messages.data';

storiesOf('Shared styles|Status messages', module)
  .addDecorator(Wrapper)
  .add('Status', () => StatusMessages({ ...statusMessages.status }))
  .add('Warning', () => StatusMessages({ ...statusMessages.warning }))
  .add('Error', () => StatusMessages({ ...statusMessages.error }));
