// scripts/parallax.js
window.addEventListener('load', function () {
  if (typeof Rellax !== 'undefined') {
    new Rellax('.rellax', {
      speed: -2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
  } else {
    console.warn('Rellax library not loaded.');
  }
});





