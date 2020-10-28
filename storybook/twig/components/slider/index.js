import { LitElement, html, customElement } from 'lit-element';
import Swiper from 'swiper/swiper-bundle.esm';

class Slider extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    const slider = this.querySelector('.swiper-container');

    if (!slider) {
      return;
    }

    setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const mySwiper = new Swiper(slider, {
        loop: true,
        preloadImages: false,
        lazy: true,
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
            return `<span class="${className}"></span>`;
          },
        },
      });
    }, 0);
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElement('ds-slider')(Slider);
