// Globally add web components polyfills.
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '@webcomponents/webcomponentsjs/webcomponents-bundle';
import 'lazysizes';

import './styles.css';

const components = require.context('./twig', true, /\/index\.(ts|js)$/);

components.keys().forEach(filename => components(filename));
