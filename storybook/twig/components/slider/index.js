// Import Swiper and modules
import { LitElement, html, customElement } from 'lit-element';
import Swiper from 'swiper';

class Slider extends LitElement {
  connectedCallback() {
    super.connectedCallback();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoHeight: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElement('zi-slider')(Slider);
