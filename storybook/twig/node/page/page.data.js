import { text } from '../../components/text/text.data';
import { slider } from '../../components/slider/slider.data';
import { textBgMedia } from '../../components/text-bg-media/text-bg-media.data';
import { linkBgMedia } from '../../components/link-bg-media/link-bg-media.data';
import { iconHighlight } from '../../components/icon-highlight/icon-highlight.data';

export const content = {
  title: 'Example Page title',
  paragraphContent: [
    {
      entity: textBgMedia,
    },
    {
      entity: text.default,
    },
    {
      entity: slider,
    },
    {
      entity: text.withImage(),
    },
    {
      entity: iconHighlight,
    },
    {
      entity: text.withImage('left'),
    },
    {
      entity: linkBgMedia,
    },
  ],
};
