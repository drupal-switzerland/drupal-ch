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
    const links = this.querySelectorAll('.main-menu__link');
    const { button, toggleMenu, linkClick } = this;

    if (button) {
      button.addEventListener('click', toggleMenu);
    }

    if (links.length) {
      links.forEach(link => {
        link.addEventListener('click', linkClick);
      });
    }
  }

  /**
   * Will set accessibility attributes to the button and set body overflow.
   * @param {Boolean} isVisible // if the current menu is visible or not
   */
  setAttributes = (isVisible = false) => {
    const { button, closeMenu, openMenu } = this;
    const accessibilityText = isVisible ? closeMenu : openMenu;
    button.setAttribute('aria-pressed', isVisible);
    button.setAttribute('aria-expanded', isVisible);
    button.title = accessibilityText;
    button.querySelector('.visually-hidden').innerText = accessibilityText;
    document.documentElement.style.overflow = isVisible ? 'hidden' : 'auto';
  };

  /**
   * Will show/hide menu, add/remove keydown event, and set attributes.
   */
  toggleMenu = () => {
    const { classList, setAttributes, toggleMenuKeyDown } = this;
    if (classList.contains('visible')) {
      classList.remove('visible');
      setAttributes();
      document.removeEventListener('keydown', toggleMenuKeyDown);
    } else {
      classList.add('visible');
      setAttributes(true);
      document.addEventListener('keydown', toggleMenuKeyDown);
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

  /**
   * Will check if the href is a hash, if it is prevent default action,
   * and toggle the menu to close.
   * @param {Event} event // DOM event
   */
  linkClick = event => {
    if (
      this.classList.contains('visible')
      && /^#/.test(event.currentTarget.getAttribute('href'))
    ) {
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
