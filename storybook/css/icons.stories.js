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
  main: ['arrow-down-blue', 'checkmark-white', 'close-white', 'menu-blue'],
  messages: ['messages-check', 'messages-error', 'messages-warning'],
  teaser: [
    'collaboration-blue',
    'collaboration',
    'idea-blue',
    'idea',
    'identity-blue',
    'identity',
    'jigsaw-blue',
    'jigsaw',
    'networking-group-blue',
    'networking-group',
    'web-blue',
    'web',
  ],
  social: [
    'google-white',
    'slack-white',
    'twitter-white',
    'drupal-white',
    'meetup-white',
  ],
};

storiesOf('Shared styles|Icons', module)
  .addDecorator(Wrapper)
  .add(
    'Main',
    () => `
      <div class="icons-wrapper">
        ${getIcons(icons.main)}
      </div>
    `,
  )
  .add(
    'Message',
    () => `
      <div class="icons-wrapper">
        ${getIcons(icons.messages)}
      </div>
    `,
  )
  .add(
    'Teaser',
    () => `
      <div class="icons-wrapper">
        ${getIcons(icons.teaser)}
      </div>
    `,
  )
  .add(
    'Social',
    () => `
      <div class="icons-wrapper">
        ${getIcons(icons.social)}
      </div>
    `,
  );
