import { LitElement, html, customElement } from 'lit-element';

/**
 * Will add events to show/hide menu, and to show/hide overlay.
 */
class MainMenu extends LitElement {
  static get properties() {
    return {
      openMenu: String,
      closeMenu: String,
    };
  }

  constructor() {
    super();
    this.button = null;
  }

  connectedCallback() {
    super.connectedCallback();
    this.button = this.querySelector('button.main-menu__action');

    if (this.button) {
      this.button.addEventListener('click', this.toggleMenu);
    }
  }

  /**
   * Will set accessibility attributes to the button and set body overflow.
   * @param {Boolean} isVisible // if the current menu is visible or not
   */
  setAttributes = (isVisible = false) => {
    const title = this.button.querySelector('.visually-hidden');
    this.button.setAttribute('aria-pressed', isVisible);
    this.button.setAttribute('aria-expanded', isVisible);
    this.button.title = isVisible ? this.closeMenu : this.openMenu;
    title.innerText = isVisible ? this.closeMenu : this.openMenu;
    document.documentElement.style.overflow = isVisible ? 'hidden' : 'auto';
  };

  /**
   * Will show/hide menu, add/remove keydown event, and set attributes.
   */
  toggleMenu = () => {
    if (this.classList.contains('visible')) {
      this.classList.remove('visible');
      this.setAttributes();
      document.removeEventListener('keydown', this.toggleMenuKeyDown);
    } else {
      this.classList.add('visible');
      this.setAttributes(true);
      document.addEventListener('keydown', this.toggleMenuKeyDown);
    }
  };

  /**
   * Will close the menu only if the Esc key is pressed,
   * added for accessibility.
   * @param {Event} event // DOM event
   */
  toggleMenuKeyDown = event => {
    const keyCode = event.keyCode || event.which;
    if (keyCode === 27) {
      this.toggleMenu();
    }
  };

  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElement('ds-main-menu')(MainMenu);
