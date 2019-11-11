import { textData as text } from '../text/text.data';
import { linkData } from '../link/link.data';
import { mediaImage } from '../media/media-image/media-image.data';

const textBgMediaData = {
  type: 'ParagraphTextBgMedia',
  text,
  title: 'Drupal Switzerland',
  media: {
    ...mediaImage,
  },
  entityLink: {
    entity: {
      ...linkData,
    },
  },
};

export const textBgMedia = {
  default: {
    ...textBgMediaData,
  },
  asHero: {
    ...textBgMediaData,
    heroTitle: 'Drupal Switzerland Hero',
    isHero: true,
  },
};
