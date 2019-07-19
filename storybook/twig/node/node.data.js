import { header } from '../header/header.stories';
import { graphql as footer } from '../footer/footer.stories';

export function node(content) {
  return {
    ...header,
    graphql: {
      ...header.graphql,
      ...footer,
    },
    page: {
      content,
    },
  };
}
