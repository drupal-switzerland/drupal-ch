import { LitElement, html, customElement } from 'lit-element';

class ResponsiveImage extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    this.responsiveImage = this.querySelector('img.responsive-media-image');

    if (this.responsiveImage) {
      window.addEventListener('resize', this.recalculate);
    }
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.recalculate);
    super.disconnectedCallback();
  }

  recalculate = () => {
    this.responsiveImage.src = this.responsiveImage.src;
  };

  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElement('ds-responsive-image')(ResponsiveImage);
