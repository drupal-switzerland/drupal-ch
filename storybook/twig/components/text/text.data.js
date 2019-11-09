import { linkData } from '../link/link.data';
import { mediaImage } from '../media/media-image/media-image.data';
import { mediaVideo } from '../media/media-video/media-video.data';

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
  entityLink: {
    entity: {
      ...linkData,
    },
  },
};

export const text = {
  default: {
    ...textDefault,
  },
  withImage(position = 'right') {
    return {
      ...textDefault,
      embedMedia: {
        entity: {
          position,
          media: {
            ...mediaImage,
          },
        },
      },
    };
  },
  withVideo(position = 'right') {
    return {
      ...textDefault,
      embedMedia: {
        entity: {
          position,
          media: {
            ...mediaVideo,
          },
        },
      },
    };
  },
};
