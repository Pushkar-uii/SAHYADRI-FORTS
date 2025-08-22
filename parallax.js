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
