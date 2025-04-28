// script.js (Cleaned and Enhanced 🌞🌊)

// Make sure GSAP and ScrollTrigger are loaded
document.addEventListener('DOMContentLoaded', () => {
  animateSceneElements();
  setupScrollAnimations();
});

// Animate elements in pollution scene
function animateSceneElements() {
  const cloud = document.querySelector('.pollution-scene__cloud');
  const seagull = document.querySelector('.pollution-scene__seagull');
  const car = document.querySelector('.pollution-scene__car');
  const sun = document.querySelector('.pollution-scene__sun');

  if (cloud) {
      gsap.to(cloud, {
          x: -500,
          duration: 40,
          repeat: -1,
          ease: "linear"
      });
  }

  if (seagull) {
      gsap.to(seagull, {
          x: -600,
          y: -50,
          duration: 20,
          repeat: -1,
          ease: "linear"
      });
  }

  if (car) {
      gsap.to(car, {
          x: 1150,
          duration: 30,
          repeat: -1,
          ease: "linear"
      });
  }

  if (sun) {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to(sun, {
          scale: 1.1,
          duration: 3,
          ease: "sine.inOut"
      }).to(sun, {
          rotation: 360,
          transformOrigin: "50% 50%",
          duration: 60,
          ease: "none"
      }, 0); // Start rotation at the same time as scale
  }
}

// Animate scenes on scroll
function setupScrollAnimations() {
  const scenes = document.querySelectorAll('.story__scene');

  scenes.forEach(scene => {
      gsap.from(scene, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
              trigger: scene,
              start: "top 80%", // Trigger when top of scene reaches 80% viewport
              end: "top 50%",
              toggleActions: "play none none reverse",
          }
      });
  });
}

//fish scene
document.addEventListener('DOMContentLoaded', () => {
    const fishSelectors = ['.waste-scene__fisk', '.waste-scene__fisk2', '.waste-scene__fisk3'];
  
    fishSelectors.forEach((selector, index) => {
      const fish = document.querySelector(selector);
      if (!fish) return;
  
      const randomYOffset = Math.random() * 50 + 20; // random vertical start
      const swimDuration = 18 + Math.random() * 8; // slightly varied speed
  
      // Set initial position
      gsap.set(fish, {
        x: window.innerWidth + 100, // Off-screen right
        yPercent: randomYOffset,
        scaleX: 1, // <<< Flip horizontally to face left
        transformOrigin: "center center", // <<< important for nice flip
      });
  
      // Animate swimming
      gsap.to(fish, {
        x: -200, // Swim off-screen left
        duration: swimDuration,
        ease: "linear",
        repeat: -1,
        delay: index * 2,
        onRepeat: () => {
          gsap.set(fish, {
            yPercent: Math.random() * 50 + 20,
          });
        }
      });
  
      // Optional: gentle up/down motion
      gsap.to(fish, {
        y: "+=20",
        duration: 3 + Math.random() * 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });
    });
  });
  // Animate Water (make it alive)
function animateWater() {
    const water = document.querySelector('.waste-scene__water');
  
    if (water) {
      gsap.to(water, {
        y: '+=10',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
  }

  // Setup ScrollSmoother
function setupScrollSmoother() {
    if (ScrollSmoother) {
      ScrollSmoother.create({
        wrapper: 'body',
        content: 'main',
        smooth: 2,
        effects: true,
      });
    }
  }
  
  // Animate floating trash
function animateFloatingTrash() {
    const trashItems = [
      { selector: '.waste-scene__net', delay: 0 },
      { selector: '.waste-scene__bottle', delay: 1 },
      { selector: '.waste-scene__plasticbag', delay: 2 },
    ];
  
    trashItems.forEach(item => {
      const element = document.querySelector(item.selector);
      if (!element) return;
  
      // Floating movement (up and down)
      gsap.to(element, {
        y: '+=15',
        rotation: '+=10',
        duration: 4 + Math.random() * 2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: item.delay,
      });
  
      // Slow drifting horizontally
      gsap.to(element, {
        x: '+=30',
        duration: 20 + Math.random() * 10,
        ease: 'linear',
        repeat: -1,
        yoyo: true,
      });
    });
  }
  document.addEventListener('DOMContentLoaded', () => {
    animatePollutionScene();
    animateFishScene();
    animateWater();
    animateFloatingTrash(); 
    setupScrollAnimations();
    setupScrollSmoother();
  });

  //call to action scene
// Animate CTA scene elements
document.addEventListener('DOMContentLoaded', () => {
   
    gsap.to('.cta-scene__cloud.cloud1', {
        x: 30,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      
      gsap.to('.cta-scene__cloud.cloud2', {
        x: -30,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      
    // Animal Animations
    gsap.to('.cta-scene__turtle', {
      y: -10,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  
    gsap.to('.cta-scene__fish', {
      y: 10,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  
    gsap.to('.cta-scene__shrimp', {
      y: 8,
      x: -5,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  
    gsap.to('.cta-scene__crab', {
      x: 15,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  });
  