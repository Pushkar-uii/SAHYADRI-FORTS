const grid = document.querySelector('.image-grid');
const items = grid.querySelectorAll('.grid-item');

items.forEach(item => {
  item.addEventListener('mouseenter', () => {
    items.forEach(i => {
      if (i !== item) {
        i.style.filter = 'blur(4px)';
        i.style.pointerEvents = 'none';
      }
    });
  });
  item.addEventListener('mouseleave', () => {
    items.forEach(i => {
      i.style.filter = 'none';
      i.style.pointerEvents = 'auto';
    });
  });
});
 document.addEventListener("DOMContentLoaded", () => {
        const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
            smoothMobile: true,  /* Optional: makes it smooth on mobile */
            multiplier: 0.5        /* Adjust scroll speed */
        });
    });