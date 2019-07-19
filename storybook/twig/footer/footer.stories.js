import { storiesOf } from '@storybook/html';

import Footer from './footer.html.twig';

export const graphql = {
};

storiesOf('Footer', module)
  .add('Footer', () => Footer({ graphql }));
