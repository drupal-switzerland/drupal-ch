import { textData as text } from '../text/text.data';

const highlightData = {
  type: 'ParagraphHighlight',
  text,
};

export const highlight = {
  withTitle: {
    ...highlightData,
    title: 'About us',
    tagline: 'Association',
  },
  textOnly: {
    ...highlightData,
  },
};
