import { LitElement, html, customElement } from 'lit-element';
import Swiper from 'swiper';

class Slider extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    this.slider = this.querySelector('.swiper-container');

    setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const mySwiper = new Swiper(this.slider, {
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
