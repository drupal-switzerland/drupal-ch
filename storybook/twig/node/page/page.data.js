import { slider } from '../../components/slider/slider.data';
import { highlight } from '../../components/highlight/highlight.data';
import { textBgMedia } from '../../components/text-bg-media/text-bg-media.data';
import { linkBgMedia } from '../../components/link-bg-media/link-bg-media.data';
import { iconHighlight } from '../../components/icon-highlight/icon-highlight.data';
import { textWithMedia } from '../../components/text-with-media/text-with-media.data';

export const content = {
  title: 'Example Page title',
  paragraphContent: [
    {
      entity: textBgMedia.asHero,
    },
    {
      entity: highlight.withTitle,
    },
    {
      entity: slider,
    },
    {
      entity: textWithMedia.withImage(),
    },
    {
      entity: iconHighlight,
    },
    {
      entity: textWithMedia.withImage('left'),
    },
    {
      entity: linkBgMedia,
    },
  ],
};
