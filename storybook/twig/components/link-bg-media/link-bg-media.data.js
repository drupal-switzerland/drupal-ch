import { link } from '../link/link.data';
import { mediaImage } from '../media/media-image/media-image.data';

export const linkBgMedia = {
  type: 'ParagraphLinkBgMedia',
  componentId: null,
  title: 'Follow Us',
  media: {
    ...mediaImage,
  },
  links: Array(2).fill({
    entity: {
      ...link.withIcon,
    },
  }),
};
