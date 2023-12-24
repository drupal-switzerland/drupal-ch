/**
 * @file
 * Skip link for accessibility.
 */

const skipLinkHolder = document.getElementById('skip-to-content');
const skipLink = skipLinkHolder.querySelector('.skip-to-content-link');

skipLink.addEventListener('click', (e) => {
  e.preventDefault();

  const target = document.querySelector(e.target.getAttribute('href'));

  target.setAttribute('tabindex', '-1');
  target.focus();
  target.addEventListener('blur focusout', (event) => {
    event.target.removeAttribute('tabindex');
  });
});
