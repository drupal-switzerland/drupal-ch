/**
 * @file
 * Main menu functionality
 */

Drupal.behaviors.themekitMobileMainNavigation = {
  attach(context) {
    const { body } = document;
    const header = (context.classList && context.classList.contains('region-header')) ? context : context.querySelector('.region-header');
    if (!header) return;

    const menu = header.querySelector('.menu--main');
    if (!menu) return;

    const buttonToggleMenu = header.querySelectorAll('.menu--main__toggle');
    if (buttonToggleMenu.length) {
      buttonToggleMenu.forEach((button) => {
        button.addEventListener('click', (event) => {
          event.preventDefault();

          // debugger;
          body.classList.toggle('is-overflow');
          menu.classList.toggle('is-active');
        });
      });
    }
  },
};
