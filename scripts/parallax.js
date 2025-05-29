// Only run Rellax if window width is more than 768px (desktop)
if (window.innerWidth > 768) {
    const rellax = new Rellax('.rellax', {
      speed: -2, // Negative = move slower than scroll
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
  }
  