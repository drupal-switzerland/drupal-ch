import { storiesOf } from '@storybook/html';
import Wrapper from '../utils/storybook/decorators/Wrapper';
import DarkWrapper from '../utils/storybook/decorators/DarkWrapper';

import Link from '../twig/components/link/link.html.twig';
import { link } from '../twig/components/link/link.data';

storiesOf('Shared styles|Actions', module)
  .addDecorator(Wrapper)
  .add(
    'Buttons',
    () => `
      <div class="two-columns">
        <div class="two-columns__column">
          <h3>Active form elements</h3>
          <button class="button" type="button">Standard button</button>
          <button class="button" type="submit">Submit button</button>
          <button class="button" type="reset">Reset button</button>
          <input class="button" type="button" value="Input button">
          <input class="button" type="submit" value="Input submit button">
          <input class="button" type="reset" value="Input reset button">
        </div>
        <div class="two-columns__column">
          <h3>Disabled form elements</h3>
          <button class="button" type="button" disabled>Disabled button</button>
          <button class="button" type="submit" disabled>Disabled submit button</button>
          <button class="button" type="reset" disabled>Disabled reset button</button>
          <input class="button" type="button" value="Disabled input button" disabled>
          <input class="button" type="submit" value="Disabled input submit button" disabled>
          <input class="button" type="reset" value="Disabled input reset button" disabled>
        </div>
      </div>
    `,
  );

storiesOf('Shared styles|Actions', module)
  .addDecorator(Wrapper)
  .add(
    'Links',
    () => `
      <div>
        <h3>Link</h3>
        <p>${Link({ ...link.default })}</p>
        <h3>Link with icon</h3>
        <p>${Link({ ...link.withIcon })}</p>
      </div>
    `,
  );

storiesOf('Shared styles|Actions', module)
  .addDecorator(DarkWrapper)
  .add(
    'Invert buttons',
    () => `
      <div class="two-columns">
        <div class="two-columns__column">
          <h3>Active form elements</h3>
          <button class="button invert" type="button">Standard button</button>
          <button class="button invert" type="submit">Submit button</button>
          <button class="button invert" type="reset">Reset button</button>
          <input class="button invert" type="button" value="Input button">
          <input class="button invert" type="submit" value="Input submit button">
          <input class="button invert" type="reset" value="Input reset button">
        </div>
        <div class="two-columns__column">
          <h3>Disabled form elements</h3>
          <button class="button invert" type="button" disabled>Disabled button</button>
          <button class="button invert" type="submit" disabled>Disabled submit button</button>
          <button class="button invert" type="reset" disabled>Disabled reset button</button>
          <input class="button invert" type="button" value="Disabled input button" disabled>
          <input class="button invert" type="submit" value="Disabled input submit button" disabled>
          <input class="button invert" type="reset" value="Disabled input reset button" disabled>
        </div>
      </div>
    `,
  );

storiesOf('Shared styles|Actions', module)
  .addDecorator(DarkWrapper)
  .add(
    'Invert links',
    () => `
      <div>
        <h3>Link</h3>
        <p>${Link({ ...link.default, isInvert: true })}</p>
        <h3>Link with icon</h3>
        <p>${Link({ ...link.withIcon, isInvert: true })}</p>
      </div>
    `,
  );
