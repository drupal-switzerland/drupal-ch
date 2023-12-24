/**
 * @file
 * Splash functionality
 */

Drupal.behaviors.themekitSplash = {
  attach() {
    const elSplash = document.getElementById('splash-screen');
    if (!elSplash) { return; }
    const storageKey = 'splash-screen';

    const setStorageKey = (key) => {
      const now = new Date();
      const timeToLife = 86400000; // 24hr in ms
      const item = {
        expiry: now.getTime() + timeToLife,
      };
      localStorage.setItem(key, JSON.stringify(item));

      const { body } = document;
      body.classList.add('initialized-splash');
    };

    const handleStorageKey = (key) => {
      const itemStr = localStorage.getItem(key);
      if (!itemStr) {
        setStorageKey(key);
        return;
      }

      const item = JSON.parse(itemStr);
      const now = new Date();

      if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        setStorageKey(key);
      }
    };

    handleStorageKey(storageKey);
  },
};
