import { LitElement, html, customElement } from 'lit-element';

class MainMenu extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    const toggleMenuButton = this.querySelector('.main-menu button');
    const menu = this.querySelector('.main-menu ul');

    toggleMenuButton.addEventListener('click', () => {
      const open = JSON.parse(toggleMenuButton.getAttribute('aria-expanded'));
      toggleMenuButton.setAttribute('aria-expanded', !open);
      menu.hidden = !menu.hidden;
      // eslint-disable-next-line no-console
      console.log('clicked');
    });
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElement('responsive-menu')(MainMenu);
