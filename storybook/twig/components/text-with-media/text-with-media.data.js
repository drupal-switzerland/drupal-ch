import { text as textData } from '../text/text.data';
import { mediaImage } from '../media/media-image/media-image.data';
import { mediaVideo } from '../media/media-video/media-video.data';

const textWithMediaData = {
  type: 'ParagraphTextWithMedia',
  text: {
    entity: {
      ...textData.withTitle,
    },
  },
};

export const textWithMedia = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  withImage(position = 'right') {
    return {
      ...textWithMediaData,
      media: {
        entity: {
          position,
          media: {
            ...mediaImage,
          },
        },
      },
    };
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  withVideo(position = 'right') {
    return {
      ...textWithMediaData,
      media: {
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
