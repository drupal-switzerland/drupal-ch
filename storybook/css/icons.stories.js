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
  social: ['google', 'slack', 'twitter', 'drupal', 'meetup'],
};

storiesOf('Shared styles|Icons', module)
  .addDecorator(Wrapper)
  .add(
    'Message icons',
    () => `
      <div class="icons-wrapper">
        ${getIcons(icons.messages)}
      </div>
    `,
  )
  .add(
    'Teaser icons',
    () => `
      <div class="icons-wrapper">
        ${getIcons(icons.teaser)}
      </div>
    `,
  )
  .add(
    'Social icons',
    () => `
      <div class="icons-wrapper">
        ${getIcons(icons.social)}
      </div>
    `,
  );
