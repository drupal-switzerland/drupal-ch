import { storiesOf } from '@storybook/html';
import Wrapper from '../utils/storybook/decorators/Wrapper';

function getIcons(icons, isLogo = false) {
  return icons.reduce(
    // eslint-disable-next-line no-return-assign, no-param-reassign
    (acc, icon) => (acc += `
      <div class="item item--icon">
        <div class="${isLogo ? 'logo' : 'icon'} ${icon}"></div>
        <p class="label p">${icon}</p>
      </div>
    `),
    '',
  );
}

const icons = {
  normal: [
    'messages-check',
    'messages-error',
    'messages-warning',
  ],
};

storiesOf('Icons', module)
  .addDecorator(Wrapper)
  .add(
    'Normal',
    () => `
      <div class="icons-wrapper">
        ${getIcons(icons.normal)}
      </div>
    `,
  );
