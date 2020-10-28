import { mainMenu } from '../menu/main-menu/main-menu.data';
import { footerMenu } from '../menu/footer-menu/footer-menu.data';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function node(content) {
  return {
    graphql: {
      mainMenu,
      footerMenu,
    },
    page: {
      content,
    },
  };
}
