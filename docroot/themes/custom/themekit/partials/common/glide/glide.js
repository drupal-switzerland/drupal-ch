import Glide from '@glidejs/glide';
import { siblings } from '@glidejs/glide/src/utils/dom';

const sliders = {
  'glide-wrapper': {
    selector: '.glide__slide',
    options: {
      type: 'slider',
      startAt: 0,
      perView: 1,
      gap: 32,
      keyboard: false,
      bound: false,
      rewind: false,
      peek: { before: 0, after: 80 },
      breakpoints: {
        480: {
          perView: 1,
          gap: 20,
          peek: { before: 0, after: 50 },
        },
        768: {
          perView: 1,
          gap: 20,
          peek: { before: 0, after: 50 },
        },
      },
    },
  },
  'glide-wrapper-multiple': {
    selector: '.views-row',
    options: {
      type: 'slider',
      startAt: 0,
      perView: 4,
      gap: 32,
      keyboard: false,
      bound: true,
      rewind: false,
      peek: { before: 0, after: -80 },
      breakpoints: {
        480: {
          perView: 1,
          gap: 20,
          peek: { before: 0, after: 50 },
        },
        680: {
          perView: 2,
          gap: 20,
          peek: { before: 0, after: -80 },
        },
        1024: {
          perView: 3,
          gap: 20,
          peek: { before: 0, after: -70 },
        },
      },
    },
  },
};

Drupal.behaviors.slider = {
  attach(context) {
    if (typeof sliders !== 'undefined') {
      Object.keys(sliders).forEach((component) => {
        const sliderWrapper = context.classList && context.classList.contains(component)
          ? [context] : context.querySelectorAll(`.${component}`);
        if (sliderWrapper.length === 0) { return; }

        const FixBoundPeek = function (_Glide, Components) {
          return {
            // Fix peek 'after' with 'bound' option.
            modify(translate) {
              let { isBound } = Components.Run;
              if (typeof isBound !== 'function') {
                isBound = function () {
                  return _Glide.isType('slider') && _Glide.settings.focusAt !== 'center' && _Glide.settings.bound;
                };
              }

              if (isBound() && Components.Run.isEnd() && Components.Html.slides.length > 1) {
                const peek = Components.Peek.value;
                if (typeof peek === 'object' && peek.after) {
                  return translate - peek.after;
                }
                return translate - peek;
              }
              return translate;
            },
          };
        };

        const CustomActiveClass = function (_Glide, Components, Events) {
          const Component = {
            mount() {
              this.changeActiveSlide();
            },

            changeActiveSlide() {
              let { isBound } = Components.Run;
              if (typeof isBound !== 'function') {
                isBound = function () {
                  return _Glide.isType('slider') && _Glide.settings.focusAt !== 'center' && _Glide.settings.bound;
                };
              }

              if (isBound() && Components.Run.isEnd() && Components.Html.slides.length > 1) {
                const lastIndex = Components.Html.slides.length - 1;
                const activeBulletClassName = _Glide.settings.classes.nav.active;
                const activeSlideClassName = _Glide.settings.classes.slide.active;
                const lastSlide = Components.Html.slides[lastIndex];

                const bullets = Components.Controls.items[1];
                const lastBullet = [...bullets.children].find(
                  (bullet) => bullet.getAttribute('data-glide-dir') === `=${lastIndex}`,
                );
                if (!lastBullet) { return; }

                lastBullet.classList.add(activeBulletClassName);
                lastSlide.classList.add(activeSlideClassName);

                siblings(lastBullet).forEach((sibling) => {
                  sibling.classList.remove(activeBulletClassName);
                });
                siblings(lastSlide).forEach((sibling) => {
                  sibling.classList.remove(activeSlideClassName);
                });
              }
            },
          };

          Events.on('run.after', () => {
            Component.changeActiveSlide();
          });

          return Component;
        };

        const fixBullets = function (_Glide, Components, Events) {
          const Component = {
            mount() {
              this.fixBullets();
            },

            fixBullets() {
              const controlNav = Components.Controls.items[1];
              if (controlNav) {
                let inactiveNavItems = _Glide.settings.perView - 1;
                if (window.innerWidth < 1024) {
                  inactiveNavItems = _Glide.settings.breakpoints['1024'].perView - 1;
                }
                for (let i = 0; i <= inactiveNavItems; i += 1) {
                  const removedIndex = controlNav.children.length - inactiveNavItems + i;
                  if (controlNav.children[removedIndex]) {
                    controlNav.removeChild(controlNav.children[removedIndex]);
                  }
                }
              }
            },
          };

          Events.on('mount.before', () => {
            Component.fixBullets();
          });

          return Component;
        };

        sliderWrapper.forEach((element) => {
          const elGlide = element.querySelector('.glide');
          const glide = new Glide(elGlide, sliders[component].options);
          window.glide = glide;

          elGlide.addEventListener('keyup', (e) => {
            if (e.keyCode === 39) glide.go('>');
            if (e.keyCode === 37) glide.go('<');
          });

          glide
            .mutate([FixBoundPeek])
            .mount({
              CustomActiveClass,
              fixBullets,
            });
        });
      });
    }
  },
};
