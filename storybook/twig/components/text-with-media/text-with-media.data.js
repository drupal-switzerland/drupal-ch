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
  withImage(position = 'right') {
    return {
      ...textWithMediaData,
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
      ...textWithMediaData,
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
