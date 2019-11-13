import { linkData as link } from '../link/link.data';
import { mediaImage } from '../media/media-image/media-image.data';

export const highlightSlider = {
  type: 'ParagraphHighlightSlider',
  componentId: null,
  highlightSlides: [
    {
      entity: {
        ...link,
        title: 'Splash awards 2020',
        tagline: 'Event',
        media: [
          {
            ...mediaImage,
          },
          {
            ...mediaImage,
          },
        ],
        position: 'left',
      },
    },
    {
      entity: {
        title: 'Splash awards 2021',
        tagline: 'Event',
        media: [
          {
            ...mediaImage,
          },
        ],
        position: 'right',
      },
    },
  ],
};
