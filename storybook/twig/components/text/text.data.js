import { linkData } from '../link/link.data';

export const textData = {
  processed:
    '<p>We are Drupal experts and newcomers from Switzerland. Our thriving and welcoming community collaborates on the open-source and content management framework Drupal. Together we use, build and exchange digital solutions for users.</p><p>We invite back-end & front-end developers as well as site builders, content editors, designers, business owners, project managers, usability experts, community enthusiasts and basically everyone interested in Drupal and the web to join us.</p>',
};

const list = '<ul><li><a href="#">Zurich Drupal User Group</a></li><li><a href="#">Basel Drupal User Group</a></li><li><a href="#">Swiss Romand Drupal User Group</a></li><li><a href="#">Bodensee Drupal User Group</a></li></ul>';

const textDefault = {
  type: 'ParagraphText',
  title: 'About us',
  tagline: 'Association',
  text: {
    processed: `${textData.processed}${list}`,
  },
};

export const text = {
  withTitle: {
    ...textDefault,
  },
  withoutTitle: {
    ...textDefault,
    title: null,
    tagline: null,
  },
  withLink: {
    ...textDefault,
    link: {
      entity: {
        ...linkData,
      },
    },
  },
};
