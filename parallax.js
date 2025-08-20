// Select all mountain and fog images by their class names
const parallaxElements = [
  document.querySelector('.LAYER14'),
  document.querySelector('.LAYER6'),
  document.querySelector('.LAYER8'),
  document.querySelector('.FOG2'),
  document.querySelector('.HUESATURATION1-1'),
  document.querySelector('.LAYER12'),
  document.querySelector('.HUESATURATION1'),
  document.querySelector('.LAYER11'),
  document.querySelector('.FOG1')
];

// Maximum translation values in pixels for horizontal and vertical movement
const maxTranslateX = 30; // max horizontal movement
const maxTranslateY = 20; // max vertical movement

// Parallax intensity factor for each image to create layered depth
const intensity = {
  LAYER14: 0.25,
  LAYER6: 0.4,
  LAYER8: 0.35,
  FOG2: 0.15,
  HUESATURATION1_1: 0.1,
  LAYER12: 0.2,
  HUESATURATION1: 0.1,
  LAYER11: 0.3,
  FOG1: 0.05
};

// Helper function to get individual element intensity based on class
function getIntensity(element) {
  if (element.classList.contains('LAYER14')) return intensity.LAYER14;
  if (element.classList.contains('LAYER6')) return intensity.LAYER6;
  if (element.classList.contains('LAYER8')) return intensity.LAYER8;
  if (element.classList.contains('FOG2')) return intensity.FOG2;
  if (element.classList.contains('HUESATURATION1-1')) return intensity.HUESATURATION1_1;
  if (element.classList.contains('LAYER12')) return intensity.LAYER12;
  if (element.classList.contains('HUESATURATION1')) return intensity.HUESATURATION1;
  if (element.classList.contains('LAYER11')) return intensity.LAYER11;
  if (element.classList.contains('FOG1')) return intensity.FOG1;
  return 0.1; // default intensity
}

// Add mousemove event listener to the window
window.addEventListener('mousemove', (e) => {
  // Get the percentage of mouse position relative to the viewport width and height
  const mouseX = e.clientX / window.innerWidth - 0.5; // value from -0.5 to 0.5
  const mouseY = e.clientY / window.innerHeight - 0.5; // value from -0.5 to 0.5

  // Loop through each parallax element and transform based on mouse position with its intensity
  parallaxElements.forEach(element => {
    if (!element) return; // skip if element not found

    const intensityFactor = getIntensity(element);
    
    // Calculate the translateX and translateY based on mouse position and intensity
    const translateX = mouseX * maxTranslateX * intensityFactor;
    const translateY = mouseY * maxTranslateY * intensityFactor;

    // Apply CSS transform for smooth parallax effect
    element.style.transform = `translate(calc(-50% + ${translateX}px), calc(-50% + ${translateY}px))`;
  });
});
