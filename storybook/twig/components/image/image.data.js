import { mediaImage } from '../media/media-image/media-image.data';

const imageDefault = {
  type: 'ParagraphImage',
  image: {
    ...mediaImage,
  },
};

export const image = {
  default: {
    ...imageDefault,
  },
  asHero: {
    ...imageDefault,
    isHero: true,
    heroTitle: 'Drupal Switzerland',
  },
};
