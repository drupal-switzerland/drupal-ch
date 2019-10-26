import { storiesOf } from '@storybook/html';
import Wrapper from '../utils/storybook/decorators/Wrapper';

const colors = [
  'black',
  'dark-grey',
  'grey',
  'light-grey',
  'lighter-grey',
  'white',
  'aqua',
  'light-blue',
  'blue',
  'dark-blue',
  'red',
];

const colorScheme = [
  'primary-light',
  'primary-dark',
  'secondary-light',
  'secondary-dark',
  'tertiary-light',
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
  .add('Color Scheme', () => {
    let schemeHTML = '';
    colorScheme.forEach(color => {
      schemeHTML += `
      <div class="item">
        <div class="color ${color}"></div>
        <p class="label p">${color}</p>
      </div>
    `;
    });

    return `
      <div class="color-wrapper">
        ${schemeHTML}
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
