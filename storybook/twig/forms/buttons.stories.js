import { storiesOf } from '@storybook/html';
import Wrapper from '../../utils/storybook/decorators/Wrapper';

const buttonStyles = () => `
<h2>Buttons</h2>
<div class="two-columns">
  <div class="two-columns__column">
    <h3>Active form elements</h3>
    <button type="button">Standard button</button>
    <button type="submit">Submit button</button>
    <button type="reset">Reset button</button>
    <input type="button" value="Input button">
    <input type="submit" value="Input submit button">
    <input type="reset" value="Input reset button">
  </div>
  <div class="two-columns__column">
    <h3>Disabled form elements</h3>
    <button type="button" disabled>Disabled button</button>
    <button type="submit" disabled>Disabled submit button</button>
    <button type="reset" disabled>Disabled reset button</button>
    <input type="button" value="Disabled input button" disabled>
    <input type="submit" value="Disabled input submit button" disabled>
    <input type="reset" value="Disabled input reset button" disabled>
  </div>
</div>
`;

storiesOf('Shared styles|Forms', module)
  .addDecorator(Wrapper)
  .add('Buttons', buttonStyles);
