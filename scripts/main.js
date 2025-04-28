// main.js

console.log("🐟 Pollution Story: Main.js connected!");

// Basic Intersection Observer to animate scenes when they enter view
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.3 // Trigger when 30% of the section is visible
});

// Observe all story scenes
document.querySelectorAll('.story__scene').forEach((scene) => {
  observer.observe(scene);
});
