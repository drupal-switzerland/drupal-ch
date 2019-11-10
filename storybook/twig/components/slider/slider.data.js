import { linkData as link } from '../link/link.data';
import { mediaImage } from '../media/media-image/media-image.data';

export const slider = {
  type: 'ParagraphSlider',
  componentId: null,
  slider: [
    {
      entity: {
        ...link,
        title: 'Splash awards 2020',
        tagline: 'Event',
        media: {
          ...mediaImage,
        },
        position: 'left',
      },
    },
    {
      entity: {
        ...link,
        title: 'Splash awards 2021',
        tagline: 'Event',
        media: {
          ...mediaImage,
        },
        position: 'right',
      },
    },
  ],
};
