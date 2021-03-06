import { storiesOf } from '@storybook/html';

import Page from './page.html.twig';
import Template from '../../page/page.html.twig';
import { node } from '../node.data';
import { content } from './page.data';

storiesOf('Content types/Nodes', module).add('Page', () => Template(node(Page({ ...content }))));
