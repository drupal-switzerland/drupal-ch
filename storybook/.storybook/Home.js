import { storiesOf } from '@storybook/html';
import Wrapper from '../utils/storybook/decorators/Wrapper';

storiesOf('About|⌂ Home', module)
  .addDecorator(Wrapper)
  .add('Welcome', () => `
    <div>
      <h1>Drupal Switzerland</h1>
      <p>
        This is the style guide for the Drupal Switzerland website.
      </p>
    </div>
  `);
