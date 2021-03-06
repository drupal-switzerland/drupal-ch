import { textData as text } from '../text/text.data';
import { linkData } from '../link/link.data';
import { mediaImage } from '../media/media-image/media-image.data';

export const textBgMedia = {
  type: 'ParagraphTextBgMedia',
  text,
  title: 'Drupal Switzerland',
  media: {
    ...mediaImage,
  },
  link: {
    entity: {
      ...linkData,
    },
  },
};
