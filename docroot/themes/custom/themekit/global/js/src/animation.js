/**
 * @file
 * Animations functionality
 */

Drupal.behaviors.themekitAnimations = {
  attach(context) {
    const page = context.classList && context.classList.contains('region-content') ? context : context.querySelector('.region-content');
    if (!page) { return; }

    const elements = page.querySelectorAll('.layout__region > .block, .field-banner');
    if (!elements.length) { return; }

    const isInViewport = (element) => {
      const bounding = element.getBoundingClientRect();
      return (
        bounding.top >= 0
        && bounding.left >= 0
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const initAnimatedElements = () => {
      let filtered = false;
      elements.forEach((element) => {
        if (!filtered) {
          if (!isInViewport(element)) {
            element.classList.add('animation-in', 'animation-out');
          } else {
            filtered = true;
          }
        }
      });
    };

    initAnimatedElements();

    const options = {
      threshold: [0.1, 0.8],
    };

    const inViewCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('animation-in')) {
            entry.target.classList.add('animation-out');
          } else {
            entry.target.classList.add('animation-in');
          }
        }
      });
    };

    const observer = new IntersectionObserver(inViewCallback, options);
    elements.forEach((element) => {
      observer.observe(element);
    });
  },
};
