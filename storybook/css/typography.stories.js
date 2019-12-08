import { storiesOf } from '@storybook/html';
import Wrapper from '../utils/storybook/decorators/Wrapper';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

storiesOf('Shared styles|Global styles', module)
  .addDecorator(Wrapper)
  .add(
    'Typography',
    () => `
      <div class="inner wysiwyg">
        <div class="story-wrapper">
          <h4><u>Regular</u></h4>
          <h1 class="regular">Heading 1</h1>
          <h2 class="regular">Heading 2</h2>
          <h3 class="regular">Heading 3</h3>
          <h4 class="regular">Heading 4</h4>
          <h5 class="regular">Heading 5</h5>
          <h6 class="regular">Heading 6</h6>
          <p class="regular tag">I am a tag</p>
          <p class="regular">${lorem}</p>
        </div>
        <div class="story-wrapper">
          <h4 class="light"><u>Light</u></h4>
          <h1 class="light">Heading 1</h1>
          <h2 class="light">Heading 2</h2>
          <h3 class="light">Heading 3</h3>
          <h4 class="light">Heading 4</h4>
          <h5 class="light">Heading 5</h5>
          <h6 class="light">Heading 6</h6>
          <p class="light tag">I am a tag</p>
          <p class="light">${lorem}</p>
        </div>
      </div>
    `,
  );
