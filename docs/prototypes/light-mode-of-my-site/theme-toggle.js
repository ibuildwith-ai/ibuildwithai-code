/* Light/dark mode toggle — prototype only.
   The `theme-light` class lives on <html> so the choice can be applied
   before first paint (see the inline script in index.html <head>). */
(function () {
  'use strict';

  var STORAGE_KEY = 'prototype-theme';
  var root = document.documentElement;
  var toggle = document.getElementById('themeToggle');

  function isLight() {
    return root.classList.contains('theme-light');
  }

  function syncToggleState() {
    if (toggle) {
      toggle.setAttribute('aria-checked', isLight() ? 'true' : 'false');
    }
  }

  function setTheme(light) {
    root.classList.toggle('theme-light', light);
    try {
      localStorage.setItem(STORAGE_KEY, light ? 'light' : 'dark');
    } catch (e) {}
    syncToggleState();
  }

  // Reflect whatever the pre-paint script already applied.
  syncToggleState();

  if (toggle) {
    toggle.addEventListener('click', function () {
      setTheme(!isLight());
    });
  }
})();
