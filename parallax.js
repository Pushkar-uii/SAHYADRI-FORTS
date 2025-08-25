// parallax.js

function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}

document.addEventListener('DOMContentLoaded', function() {
    const parallaxElements = document.querySelectorAll('.parallax');
    const originalTransforms = [];
    parallaxElements.forEach(el => {
        originalTransforms.push(el.style.transform || "");
    });

    const moveStrengths = [12, 15, 15, 13, 13, 8, 0.1, -0.1, 0.2, 0];

    function getCenter() {
        return {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        };
    }

    function parallaxMove(event) {
        const center = getCenter();
        let dx = (event.clientX - center.x) / center.x;
        let dy = (event.clientY - center.y) / center.y;

        dx = clamp(dx, -1, 1);
        dy = clamp(dy, -2, 1);

        parallaxElements.forEach((el, idx) => {
            const strength = moveStrengths[idx] || moveStrengths[moveStrengths.length-1];
            const tx = dx * strength;
            const ty = dy * strength;
            el.style.transform = originalTransforms[idx] + ` translate(${tx}px, ${ty}px)`;
        });
    }

    function restorePosition() {
        parallaxElements.forEach((el, idx) => {
            el.style.transform = originalTransforms[idx];
        });
    }

    window.addEventListener('mousemove', parallaxMove);
    window.addEventListener('mouseleave', restorePosition);
});
document.addEventListener('DOMContentLoaded', () => {
  const fortsBtn = document.getElementById('fortsBtn');
  const descBox = document.getElementById('descBox');
  const leafContainer = document.getElementById('leafContainer');

  let isDescVisible = false;

  function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    const btnRect = fortsBtn.getBoundingClientRect();
    const x = Math.random() * btnRect.width;
    leaf.style.left = `${x}px`;
    leaf.style.top = '0px';
    const duration = 1000 + Math.random() * 1000;
    leaf.style.animationDuration = `${duration}ms`;
    leafContainer.appendChild(leaf);
    leaf.addEventListener('animationend', () => {
      leaf.remove();
    });
  }

  fortsBtn.addEventListener('click', () => {
    if (!isDescVisible) {
      // Show description box
      descBox.hidden = false;
      descBox.classList.add('visible');
      fortsBtn.setAttribute('aria-expanded', 'true');
      isDescVisible = true;

      // Position description box centered above the button with some vertical offset
      const btnRect = fortsBtn.getBoundingClientRect();

      // Calculate horizontal center of button relative to viewport
      const btnCenterX = btnRect.left + btnRect.width / 2;

      // Set description box width to a fixed max-width
      const descBoxWidth = descBox.offsetWidth;

      // Calculate left position to center descBox horizontally relative to the button
      let leftPos = btnCenterX - descBoxWidth / 2;

      // Clamp leftPos to prevent overflowing viewport edges
      leftPos = Math.max(10, Math.min(leftPos, window.innerWidth - descBoxWidth - 10));

      // Position the description box just above the button with 12px margin
      const topPos = btnRect.top - descBox.offsetHeight - 12;

      descBox.style.left = `${leftPos}px`;
      descBox.style.top = `${topPos}px`;

      // Create falling leaves
      for (let i = 0; i < 12; i++) {
        setTimeout(createLeaf, i * 100);
      }
    }
  });

  descBox.addEventListener('click', () => {
    if (isDescVisible) {
      window.location.href = 'forts.html';
    }
  });
});
