import { addDecorator, configure } from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';
import { setConsoleOptions } from '@storybook/addon-console';
import { withKnobs } from '@storybook/addon-knobs';
import Twig from 'twig';
import drupalizeTwig from 'twig-drupal-filters';
import '../scripts';

// Add the filters to Drupal.
drupalizeTwig(Twig);

// Automatically import all files ending in *.stories.js
const storiesCSS = require.context('../css', true, /\.stories\.(ts|js)$/);
const storiesTwig = require.context('../twig', true, /\.stories\.(ts|js)$/);
function loadStories() {
  require('./styles.css');
  require('./Home');
  storiesCSS.keys().forEach(storiesCSS);
  storiesTwig.keys().forEach(storiesTwig);
}

// Helps make UI components more accessible.
addDecorator(withA11y);
setConsoleOptions({
  panelExclude: [],
});
addDecorator(withKnobs);
configure(loadStories, module);
