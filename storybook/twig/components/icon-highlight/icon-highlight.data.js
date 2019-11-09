import { linkData } from '../link/link.data';
import { iconTeaser as iconTeasers } from '../icon-teaser/icon-teaser.data';

export const iconHighlight = {
  type: 'ParagraphIconHighlight',
  componentId: null,
  title: 'Drupal is',
  text: {
    processed:
             "<p>We're the leading open-source CMS for ambitious digital experiences that reach your audience across multiple channels.</p>",
  },
  iconTeasers,
  link: {
    entity: {
      ...linkData,
    },
  },
};
