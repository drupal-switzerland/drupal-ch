import { mainMenu } from '../menu/main-menu/main-menu.data';
import { footerMenu } from '../menu/footer-menu/footer-menu.data';

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
