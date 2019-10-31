import { storiesOf } from '@storybook/html';
import Wrapper from '../utils/storybook/decorators/Wrapper';

const colors = [
  'white',
  'black',
  'dark-grey',
  'light-grey',
  'blue',
  'dark-blue',
  'red',
  'primary',
  'primary-dark',
];

const shadows = ['10', '14'];

storiesOf('Shared styles|Global styles', module)
  .addDecorator(Wrapper)
  .add('Colors', () => {
    let colorHTML = '';
    colors.forEach(color => {
      colorHTML += `
      <div class="item">
        <div class="color ${color}"></div>
        <p class="label p">${color}</p>
      </div>
    `;
    });

    return `
      <div class="color-wrapper">
        ${colorHTML}
      </div>
    `;
  })
  .add('Shadows', () => {
    let shadowHTML = '';
    shadows.forEach(shadow => {
      shadowHTML += `
      <div class="item">
        <div class="shadow shadow-${shadow}"></div>
        <p class="label p">Shadow ${shadow}%</p>
      </div>
    `;
    });

    return `
      <div class="shadow-wrapper">
        ${shadowHTML}
      </div>
    `;
  });
