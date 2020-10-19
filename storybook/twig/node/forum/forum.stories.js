import { storiesOf } from '@storybook/html';

import Forum from './forum.html.twig';
import Template from '../../page/page.html.twig';
import { node } from '../node.data';
import { content } from './forum.data';

storiesOf('Content types|Nodes', module).add('Forum', () => Template(node(Forum({ ...content }))));
