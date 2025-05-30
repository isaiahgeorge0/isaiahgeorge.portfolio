// Initialize Rellax everywhere (desktop and mobile) with reduced speed on mobile
const rellax = new Rellax('.rellax', {
  speed: -2,
  center: false,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false,
  breakpoints: [576, 768, 1024]
});

