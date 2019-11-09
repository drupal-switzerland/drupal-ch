import { textData as text } from '../text/text.data';
import { linkData } from '../link/link.data';
import { mediaImage } from '../media/media-image/media-image.data';

export const textBgMedia = {
  __typename: 'ParagraphTextBgMedia',
  text,
  title: 'Drupal Switzerland',
  heroTitle: 'Drupal Switzerland',
  media: {
    ...mediaImage,
  },
  entityLink: {
    entity: {
      ...linkData,
    },
  },
};
