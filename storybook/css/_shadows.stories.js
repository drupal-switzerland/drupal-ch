import { storiesOf } from '@storybook/html';
import Wrapper from '../utils/storybook/decorators/Wrapper';

const shadows = ['shadow-30', 'shadow-70', 'shadow-95', 'shadow-inset-white'];

storiesOf('Shared styles|Global styles', module)
  .addDecorator(Wrapper)
  .add('Shadows', () => {
    let shadowHTML = '';
    shadows.forEach(shadow => {
      shadowHTML += `
      <div class="item">
        <div class="shadow ${shadow}"></div>
        <p class="label p">${shadow}</p>
      </div>
    `;
    });

    return `
      <div class="shadow-wrapper">
        ${shadowHTML}
      </div>
    `;
  });
