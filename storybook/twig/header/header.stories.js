import { storiesOf } from '@storybook/html';

import Header from './header.html.twig';

export const header = {
  graphql: {
  },
};

storiesOf('Header', module)
  .add('Header', () => Header({ ...header }));
