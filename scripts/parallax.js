document.addEventListener('DOMContentLoaded', function () {
  // Initialize Rellax for all devices
  const rellax = new Rellax('.rellax', {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false,
    breakpoints: [576, 768, 1201]
  });
});


