import { storiesOf } from '@storybook/html';
import Wrapper from '../../utils/storybook/decorators/Wrapper';

import StatusMessages from './status-messages.html.twig';
import { statusMessages } from './status-messages.data';

storiesOf('Shared styles|Status messages', module)
  .addDecorator(Wrapper)
  .add('Status messages', () => StatusMessages({
    ...statusMessages,
    // eslint-disable-next-line @typescript-eslint/camelcase
    message_list: {
      status: statusMessages.message_list.status,
    },
  }))
  .add('Warning messages', () => StatusMessages({
    ...statusMessages,
    // eslint-disable-next-line @typescript-eslint/camelcase
    message_list: {
      warning: statusMessages.message_list.warning,
    },
  }))
  .add('Error messages', () => StatusMessages({
    ...statusMessages,
    // eslint-disable-next-line @typescript-eslint/camelcase
    message_list: {
      error: statusMessages.message_list.error,
    },
  }));
