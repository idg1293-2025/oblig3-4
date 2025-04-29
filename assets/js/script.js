/**
 * Beach Scene Animations
 * Using GSAP for animating sun, waves, and fish
 */

document.addEventListener('DOMContentLoaded', function () {
  // Animate fish in both scenes
  animateFish('first-fish-container', 'first-sea-container');
  animateFish('second-fish-container', 'second-sea-container');

  // Animate turtle in both scenes using our new function
  animateTurtle('first-turtle-container', 'first-sea-container');
  animateTurtle('second-turtle-container', 'second-sea-container');

  // Animate bird in the first scene
  animateBird('bird-container', 'bird-item-container', 'first-sea-container');

  // Create waves for both scenes
  createWaves('first-wave-container');
  createWaves('second-wave-container');

  // Add bubbles to both scenes after a delay
  setTimeout(() => {
    createBubbles('first-wave-container');
    createBubbles('second-wave-container');
  }, 2000);

  // Animate sand texture and seaweed in both scenes
  animateSandTexture();
  animateSeaweed();

});

/**
 * Function to create a turtle SVG element
 */
function createTurtle(width, height) {
  const svgNS = "http://www.w3.org/2000/svg";
  const turtle = document.createElementNS(svgNS, "svg");
  turtle.setAttribute('class', 'absolute');
  turtle.setAttribute('width', width);
  turtle.setAttribute('height', height);
  turtle.setAttribute('viewBox', '0 0 277 277');
  turtle.setAttribute('xmlns', svgNS);

  // Shell (outer)
  const shellOuter = document.createElementNS(svgNS, "path");
  shellOuter.setAttribute('d', 'M138.5,247.999L138.5,247.999c-41.148,0-74.506-33.356-74.506-74.505v-36.286c0-41.148,33.357-74.506,74.506-74.506l0,0c41.148,0,74.506,33.357,74.506,74.506v36.286C213.006,214.643,179.648,247.999,138.5,247.999z');
  shellOuter.setAttribute('fill', '#A75A29');

  // Shell (inner)
  const shellInner = document.createElementNS(svgNS, "path");
  shellInner.setAttribute('d', 'M138.5,233.891c-33.303,0-60.397-27.094-60.397-60.396v-36.286c0-33.304,27.094-60.397,60.396-60.397c33.303,0,60.397,27.093,60.397,60.397v36.286C198.896,206.797,171.803,233.891,138.5,233.891z');
  shellInner.setAttribute('fill', '#E89E6C');

  // Shell center circle
  const shellCenter = document.createElementNS(svgNS, "circle");
  shellCenter.setAttribute('cx', '138.5');
  shellCenter.setAttribute('cy', '155.351');
  shellCenter.setAttribute('r', '29.51');
  shellCenter.setAttribute('fill', '#BD8158');

  // Shell pattern - horizontal line
  const shellLine = document.createElementNS(svgNS, "rect");
  shellLine.setAttribute('x', '78.103');
  shellLine.setAttribute('y', '152.976');
  shellLine.setAttribute('width', '120.793');
  shellLine.setAttribute('height', '4.75');
  shellLine.setAttribute('fill', '#BD8158');

  // Shell patterns
  const shellPatterns = document.createElementNS(svgNS, "path");
  shellPatterns.setAttribute('d', 'M97.201,120.334c0-6.897-3.668-12.922-9.148-16.279c-6.28,9.525-9.949,20.915-9.949,33.154v2.223C88.65,139.431,97.201,130.88,97.201,120.334z M78.103,171.272v2.223c0,12.237,3.669,23.629,9.949,33.153c5.48-3.357,9.148-9.382,9.148-16.279C97.201,179.822,88.65,171.272,78.103,171.272z M138.499,114.972c17.281,0,32.732-7.811,43.034-20.087c-10.963-11.146-26.202-18.073-43.034-18.073c-16.831,0-32.07,6.928-43.034,18.073C105.768,107.162,121.219,114.972,138.499,114.972z M188.948,104.055c-5.48,3.357-9.148,9.382-9.148,16.279c0,10.547,8.55,19.098,19.097,19.098v-2.223C198.896,124.97,195.228,113.58,188.948,104.055z M179.799,190.369c0,6.897,3.668,12.922,9.148,16.279c6.28-9.524,9.949-20.916,9.949-33.153v-2.223C188.35,171.272,179.799,179.822,179.799,190.369z M138.499,195.73c-17.28,0-32.731,7.811-43.034,20.088c10.964,11.146,26.202,18.073,43.034,18.073c16.832,0,32.07-6.928,43.034-18.073C171.231,203.54,155.78,195.73,138.499,195.73z');
  shellPatterns.setAttribute('fill', '#BD8158');

  // Head
  const head = document.createElementNS(svgNS, "path");
  head.setAttribute('d', 'M138.5,0L138.5,0c-18.061,0-32.703,14.642-32.703,32.703v50.702h65.405V32.703C171.203,14.642,156.561,0,138.5,0z');
  head.setAttribute('fill', '#3FAE2A');

  // Left eye white
  const leftEyeWhite = document.createElementNS(svgNS, "circle");
  leftEyeWhite.setAttribute('cx', '105.797');
  leftEyeWhite.setAttribute('cy', '34.333');
  leftEyeWhite.setAttribute('r', '12.087');
  leftEyeWhite.setAttribute('fill', 'white');

  // Left eye pupil
  const leftEyePupil = document.createElementNS(svgNS, "circle");
  leftEyePupil.setAttribute('cx', '105.797');
  leftEyePupil.setAttribute('cy', '34.333');
  leftEyePupil.setAttribute('r', '6.043');
  leftEyePupil.setAttribute('fill', '#5F4637');

  // Right eye white
  const rightEyeWhite = document.createElementNS(svgNS, "circle");
  rightEyeWhite.setAttribute('cx', '171.203');
  rightEyeWhite.setAttribute('cy', '34.333');
  rightEyeWhite.setAttribute('r', '12.087');
  rightEyeWhite.setAttribute('fill', 'white');

  // Right eye pupil
  const rightEyePupil = document.createElementNS(svgNS, "circle");
  rightEyePupil.setAttribute('cx', '171.203');
  rightEyePupil.setAttribute('cy', '34.333');
  rightEyePupil.setAttribute('r', '6.043');
  rightEyePupil.setAttribute('fill', '#5F4637');

  // Left front flipper
  const leftFrontFlipper = document.createElementNS(svgNS, "path");
  leftFrontFlipper.setAttribute('d', 'M87.634,104.981c-11.535-11.535-30.235-11.535-41.77,0L9.238,141.608h0c18.324,18.324,48.034,18.324,66.358,0l24.332-24.332L87.634,104.981z');
  leftFrontFlipper.setAttribute('fill', '#3FAE2A');
  leftFrontFlipper.classList.add('left-flipper');

  // Right front flipper
  const rightFrontFlipper = document.createElementNS(svgNS, "path");
  rightFrontFlipper.setAttribute('d', 'M231.135,104.981c-11.534-11.535-30.235-11.535-41.77,0l-12.295,12.295l24.332,24.332c18.325,18.324,48.034,18.324,66.358,0L231.135,104.981z');
  rightFrontFlipper.setAttribute('fill', '#3FAE2A');
  rightFrontFlipper.classList.add('right-flipper');

  // Left back flipper
  const leftBackFlipper = document.createElementNS(svgNS, "path");
  leftBackFlipper.setAttribute('d', 'M92.04,195.667c-16.312,0-29.536,13.224-29.536,29.535V277c25.915,0,46.922-21.008,46.922-46.922v-34.411H92.04z');
  leftBackFlipper.setAttribute('fill', '#3FAE2A');
  leftBackFlipper.classList.add('left-back-flipper');

  // Right back flipper
  const rightBackFlipper = document.createElementNS(svgNS, "path");
  rightBackFlipper.setAttribute('d', 'M184.96,195.667h-17.387v34.411c0,25.914,21.008,46.922,46.923,46.922l0,0v-51.798C214.496,208.89,201.272,195.667,184.96,195.667z');
  rightBackFlipper.setAttribute('fill', '#3FAE2A');
  rightBackFlipper.classList.add('right-back-flipper');

  // Assemble turtle
  turtle.appendChild(shellOuter);
  turtle.appendChild(shellInner);
  turtle.appendChild(shellCenter);
  turtle.appendChild(shellLine);
  turtle.appendChild(shellPatterns);
  turtle.appendChild(head);
  turtle.appendChild(leftEyeWhite);
  turtle.appendChild(leftEyePupil);
  turtle.appendChild(rightEyeWhite);
  turtle.appendChild(rightEyePupil);
  turtle.appendChild(leftFrontFlipper);
  turtle.appendChild(rightFrontFlipper);
  turtle.appendChild(leftBackFlipper);
  turtle.appendChild(rightBackFlipper);

  return turtle;
}

/**
 * Function to animate a turtle
 */
function animateTurtle(turtleContainerId, seaContainerId) {
  const turtleContainer = document.getElementById(turtleContainerId);
  const seaContainer = document.getElementById(seaContainerId);

  if (!turtleContainer || !seaContainer) return; // Safety check

  // Clear existing content
  turtleContainer.innerHTML = '';

  const seaContainerRect = seaContainer.getBoundingClientRect();

  // Create turtle
  const turtle = createTurtle(80, 80);
  turtleContainer.appendChild(turtle);

  // Randomly choose swim direction (left to right or right to left)
  const swimRight = Math.random() > 0.5;

  // Set initial position
  const startY = 30 + Math.random() * (seaContainerRect.height - 100);
  const scale = 0.8 + Math.random() * 0.4;
  const duration = 25 + Math.random() * 15;

  // Set initial X position and target X based on direction
  const startX = swimRight ? -120 : seaContainerRect.width + 120;
  const endX = swimRight ? seaContainerRect.width + 120 : -120;

  // Set initial turtle state
  gsap.set(turtle, {
    x: startX,
    y: startY,
    scale: scale,
    rotationY: swimRight ? 180 : 0,
    transformOrigin: "50% 50%",
    opacity: 0.9,
  });

  // Main swimming animation (horizontal movement)
  gsap.to(turtle, {
    duration: duration,
    x: endX,
    ease: 'none',
    repeat: -1,
  });

  // Create gentle up/down swimming motion
  gsap.to(turtle, {
    duration: 3 + Math.random() * 2,
    y: '+=25',
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1,
  });

  // Animate flippers for swimming effect
  const leftFlipper = turtle.querySelector('.left-flipper');
  const rightFlipper = turtle.querySelector('.right-flipper');
  const leftBackFlipper = turtle.querySelector('.left-back-flipper');
  const rightBackFlipper = turtle.querySelector('.right-back-flipper');

  // Front flippers swimming animation
  gsap.to([leftFlipper, rightFlipper], {
    duration: 1.5,
    rotation: swimRight ? -15 : 15,
    transformOrigin: swimRight ? "100% 25%" : "0% 25%",
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
  });

  // Back flippers swimming animation (subtler)
  gsap.to([leftBackFlipper, rightBackFlipper], {
    duration: 2,
    rotation: swimRight ? -8 : 8,
    transformOrigin: "50% 25%",
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
    delay: 0.5 // Slight delay for more natural movement
  });

  // Create subtle head bobbing
  const head = turtle.querySelector('path:nth-child(6)');
  gsap.to(head, {
    duration: 2.5,
    y: -2,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
  });
}

// Function to create wave SVGs
function createWaves(containerId) {
  const waveContainer = document.getElementById(containerId);

  if (!waveContainer) return; // Safety check

  // Clear any existing waves
  waveContainer.innerHTML = '';

  // Create multiple wave layers for depth
  const waveCount = 3;
  const waveColors = ['#00BFFF', '#0099FF', '#0077CC'];
  const waveHeights = [80, 60, 40];
  const waveOpacities = [0.6, 0.4, 0.2];

  for (let i = 0; i < waveCount; i++) {
    const waveSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    waveSVG.setAttribute('class', 'wave-svg');
    waveSVG.setAttribute('viewBox', '0 0 1440 320');
    waveSVG.setAttribute('preserveAspectRatio', 'none');

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute('fill', waveColors[i]);
    path.setAttribute('fill-opacity', waveOpacities[i]);
    path.setAttribute('d', generateWavePath(i, waveHeights[i]));

    waveSVG.appendChild(path);
    waveContainer.appendChild(waveSVG);

    // Animate each wave with different timing for more natural effect
    animateWave(path, i);
  }
}

// Function to generate wave path data
function generateWavePath(index, amplitude) {
  const wavelength = 1440;
  const height = 320;
  const segments = 20;
  const points = [];

  // Create control points for the wave
  for (let i = 0; i <= segments; i++) {
    const x = (i / segments) * wavelength;
    // Add some randomness to the wave shape
    const y = height - amplitude +
      Math.sin((i / segments) * Math.PI * 4 + index * 2) * (amplitude / 2) +
      Math.random() * (amplitude / 10);

    points.push([x, y]);
  }

  // Convert points to SVG path data
  let pathData = `M${points[0][0]},${points[0][1]}`;

  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    // Create smooth curves between points
    const controlX1 = prev[0] + (curr[0] - prev[0]) / 3;
    const controlY1 = prev[1];
    const controlX2 = curr[0] - (curr[0] - prev[0]) / 3;
    const controlY2 = curr[1];

    pathData += ` C${controlX1},${controlY1} ${controlX2},${controlY2} ${curr[0]},${curr[1]}`;
  }

  // Close the path
  pathData += ` L1440,320 L0,320 Z`;

  return pathData;
}

// Function to animate waves
function animateWave(waveElement, index) {
  const duration = 8 + index * 2; // Different durations for each layer
  const amplitude = 10 + index * 5; // Different movement amounts

  // Create the animation timeline
  const tl = gsap.timeline({ repeat: -1 });

  // Animate the wave path
  tl.to(waveElement, {
    duration: duration,
    attr: {
      d: generateWavePath(index, amplitude)
    },
    attr: {
      d: generateWavePath(index + 1, 80 - index * 20) // Slightly modified path
    },
    ease: "none"
  });

  // Add some vertical movement for more realism
  if (index === 0) { // Only animate the top wave vertically
    gsap.to(waveElement, {
      y: -5,
      duration: 4,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });
  }
}

// Function to animate fish
function animateFish(fishContainerId, seaContainerId) {
  const fishContainer = document.getElementById(fishContainerId);
  const seaContainer = document.getElementById(seaContainerId);

  if (!fishContainer || !seaContainer) return; // Safety check

  const seaContainerRect = seaContainer.getBoundingClientRect();
  const fishElements = [
    { color: '#FF9AA2', width: 40, height: 20 },
    { color: '#FFDAC1', width: 35, height: 15 },
    { color: '#B5EAD7', width: 28, height: 15 },
    { color: '#00BFFF', width: 80, height: 80 }
  ];

  fishElements.forEach((fishData, index) => {
    const fish = createFish(fishData.color, fishData.width, fishData.height);
    fishContainer.appendChild(fish);

    // Randomly choose swim direction
    const swimRight = Math.random() > 0.5;

    const startY = 20 + Math.random() * (seaContainerRect.height - 40);
    const scale = 0.5 + Math.random() * 0.5;
    const duration = 15 + Math.random() * 10;
    const delay = Math.random() * 5;

    // Set initial X position and target X based on direction
    const startX = swimRight ? -fishData.width : seaContainerRect.width + fishData.width;
    const endX = swimRight ? seaContainerRect.width + fishData.width : -fishData.width;

    // Set initial state
    gsap.set(fish, {
      x: startX,
      y: startY,
      scale: scale,
      rotationY: swimRight ? 180 : 0,
      rotation: index % 2 === 0 ? 3 : -3,
      transformOrigin: "50% 50%",
      opacity: 0.8,
    });

    // Create swimming animation
    gsap.to(fish, {
      duration: duration,
      x: endX,
      ease: 'none',
      repeat: -1,
      delay: delay,
    });

    // Create up/down swimming motion
    gsap.to(fish, {
      duration: 2 + Math.random() * 2,
      y: '+=15',
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });
  });
}

// Function to create a fish SVG element
function createFish(color, width, height) {
  const svgNS = "http://www.w3.org/2000/svg";
  const fish = document.createElementNS(svgNS, "svg");
  fish.setAttribute('class', 'absolute');
  fish.setAttribute('width', width);
  fish.setAttribute('height', height);
  fish.setAttribute('viewBox', '0 0 150 80');
  fish.setAttribute('xmlns', svgNS);

  const g = document.createElementNS(svgNS, "g");

  const mainBody = document.createElementNS(svgNS, "path");
  mainBody.setAttribute('d', 'M120,40 C105,24 90,8 60,8 C30,8 15,16 7.5,32 C3,40 3,40 7.5,48 C15,64 30,72 60,72 C90,72 105,56 120,40 Z');
  mainBody.setAttribute('fill', color);
  mainBody.setAttribute('stroke', '#333');
  mainBody.setAttribute('stroke-width', '1');
  mainBody.setAttribute('stroke-linejoin', 'round');

  const tail = document.createElementNS(svgNS, "path");
  tail.setAttribute('d', 'M120,40 C135,24 142.5,16 150,8 C127.5,28 127.5,52 150,72 C142.5,64 135,56 120,40 Z');
  tail.setAttribute('fill', color);
  tail.setAttribute('stroke', '#333');
  tail.setAttribute('stroke-width', '1');
  tail.setAttribute('stroke-linecap', 'round');
  tail.setAttribute('stroke-linejoin', 'round');

  const eyeWhite = document.createElementNS(svgNS, "circle");
  eyeWhite.setAttribute('cx', '45');
  eyeWhite.setAttribute('cy', '32');
  eyeWhite.setAttribute('r', '6.4');
  eyeWhite.setAttribute('fill', 'white');
  eyeWhite.setAttribute('stroke', '#333');
  eyeWhite.setAttribute('stroke-width', '1');

  const eyePupil = document.createElementNS(svgNS, "circle");
  eyePupil.setAttribute('cx', '45');
  eyePupil.setAttribute('cy', '32');
  eyePupil.setAttribute('r', '3.2');
  eyePupil.setAttribute('fill', '#333');

  const gills = document.createElementNS(svgNS, "path");
  gills.setAttribute('d', 'M22.5,28 C30,32 30,48 22.5,52');
  gills.setAttribute('fill', 'none');
  gills.setAttribute('stroke', '#333');
  gills.setAttribute('stroke-width', '1');
  gills.setAttribute('stroke-linecap', 'round');

  const finTop = document.createElementNS(svgNS, "path");
  finTop.setAttribute('d', 'M75,8 C82.5,0 90,0 97.5,12');
  finTop.setAttribute('fill', 'none');
  finTop.setAttribute('stroke', '#333');
  finTop.setAttribute('stroke-width', '1');
  finTop.setAttribute('stroke-linecap', 'round');

  const finBottom = document.createElementNS(svgNS, "path");
  finBottom.setAttribute('d', 'M75,72 C82.5,80 90,80 97.5,68');
  finBottom.setAttribute('fill', 'none');
  finBottom.setAttribute('stroke', '#333');
  finBottom.setAttribute('stroke-width', '1');
  finBottom.setAttribute('stroke-linecap', 'round');

  g.appendChild(mainBody);
  g.appendChild(tail);
  g.appendChild(eyeWhite);
  g.appendChild(eyePupil);
  g.appendChild(gills);
  g.appendChild(finTop);
  g.appendChild(finBottom);
  fish.appendChild(g);

  return fish;
}

// Add bubbles for extra ocean effect
function createBubbles(containerId) {
  const waveContainer = document.getElementById(containerId);
  if (!waveContainer) return; // Safety check

  const numBubbles = 20;

  for (let i = 0; i < numBubbles; i++) {
    createBubble(waveContainer);
  }
}

function createBubble(container) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  // Random size between 5px and 20px
  const size = 5 + Math.random() * 15;

  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.bottom = '0';
  bubble.style.position = 'absolute';
  bubble.style.borderRadius = '50%';
  bubble.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
  bubble.style.opacity = '0';

  container.appendChild(bubble);

  // Animate the bubble
  gsap.to(bubble, {
    duration: 4 + Math.random() * 6,
    y: -container.offsetHeight * (0.5 + Math.random() * 0.5),
    x: (Math.random() - 0.5) * 100,
    opacity: 0.7,
    ease: 'power1.out',
    onComplete: () => {
      // Remove the bubble when animation completes
      container.removeChild(bubble);
      // Create a new bubble to replace it
      setTimeout(() => createBubble(container), Math.random() * 2000);
    }
  });
}

// Add sandy texture animation
function animateSandTexture() {
  const sandDots = document.querySelectorAll('.sand circle');

  sandDots.forEach(dot => {
    // Subtle fade in/out animation for the sand dots
    gsap.to(dot, {
      duration: 2 + Math.random() * 3,
      opacity: 0.1 + Math.random() * 0.2,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1
    });
  });
}

// Make seaweed plants sway
function animateSeaweed() {
  const seaweedPaths = document.querySelectorAll('.sand path[stroke="#27AE60"]');

  seaweedPaths.forEach(path => {
    // Gentle swaying animation for seaweed
    gsap.to(path, {
      duration: 3 + Math.random() * 2,
      scaleX: 0.95 + Math.random() * 0.1,
      rotation: (Math.random() - 0.5) * 10,
      transformOrigin: 'bottom center',
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1
    });
  });
}

/**
 * Function to create a bird SVG element
 */
function createBird(width, height) {
  const svgNS = "http://www.w3.org/2000/svg";
  const bird = document.createElementNS(svgNS, "svg");
  bird.setAttribute('class', 'absolute bird-svg');
  bird.setAttribute('width', width);
  bird.setAttribute('height', height);
  bird.setAttribute('viewBox', '0 -5.67 42.603 42.603');
  bird.setAttribute('xmlns', svgNS);

  // Group structure as per the provided SVG
  const g5185 = document.createElementNS(svgNS, "g");
  g5185.setAttribute('id', 'Group_5185');
  g5185.setAttribute('data-name', 'Group 5185');
  g5185.setAttribute('transform', 'translate(-959.231 -741.19)');

  // Group 5183 (main bird parts)
  const g5183 = document.createElementNS(svgNS, "g");
  g5183.setAttribute('id', 'Group_5183');
  g5183.setAttribute('data-name', 'Group 5183');

  // Wing 1 (Path 1898)
  const g5154 = document.createElementNS(svgNS, "g");
  g5154.setAttribute('id', 'Group_5154');
  g5154.setAttribute('data-name', 'Group 5154');
  const g5153 = document.createElementNS(svgNS, "g");
  g5153.setAttribute('id', 'Group_5153');
  g5153.setAttribute('data-name', 'Group 5153');
  const g5152 = document.createElementNS(svgNS, "g");
  g5152.setAttribute('id', 'Group_5152');
  g5152.setAttribute('data-name', 'Group 5152');
  const g5151 = document.createElementNS(svgNS, "g");
  g5151.setAttribute('id', 'Group_5151');
  g5151.setAttribute('data-name', 'Group 5151');
  const path1898 = document.createElementNS(svgNS, "path");
  path1898.setAttribute('id', 'Path_1898');
  path1898.setAttribute('data-name', 'Path 1898');
  path1898.setAttribute('d', 'M967.671,753.279a14.71,14.71,0,0,1,5.066-4.252,1.373,1.373,0,0,0,.437-.375,3.4,3.4,0,0,1,.98.375c3.11,1.759,2.745,2.32,5.043,3.41.521.247,1.178.521,2.044.842,1.376.51,3.223,1.182,5.272,1.885l-15.193.95v-2.835Z');
  path1898.setAttribute('fill', '#524da1');
  path1898.classList.add('wing'); // Add class for animation
  g5151.appendChild(path1898);
  g5152.appendChild(g5151);
  g5153.appendChild(g5152);
  g5154.appendChild(g5153);

  // Wing 2 (Path 1899)
  const g5158 = document.createElementNS(svgNS, "g");
  g5158.setAttribute('id', 'Group_5158');
  g5158.setAttribute('data-name', 'Group 5158');
  const g5157 = document.createElementNS(svgNS, "g");
  g5157.setAttribute('id', 'Group_5157');
  g5157.setAttribute('data-name', 'Group 5157');
  const g5156 = document.createElementNS(svgNS, "g");
  g5156.setAttribute('id', 'Group_5156');
  g5156.setAttribute('data-name', 'Group 5156');
  const g5155 = document.createElementNS(svgNS, "g");
  g5155.setAttribute('id', 'Group_5155');
  g5155.setAttribute('data-name', 'Group 5155');
  const path1899 = document.createElementNS(svgNS, "path");
  path1899.setAttribute('id', 'Path_1899');
  path1899.setAttribute('data-name', 'Path 1899');
  path1899.setAttribute('d', 'M1001.083,758.948s-9.236,5.183-18.425,2.835l-1.417-4.252v2.834a9.257,9.257,0,0,1-7.155-.962,8.011,8.011,0,0,1-2.766-3.289l15.193-.95C991.443,756.854,997.543,758.722,1001.083,758.948Z');
  path1899.setAttribute('fill', '#b3b3b3');
  path1899.classList.add('wing'); // Add class for animation
  g5155.appendChild(path1899);
  g5156.appendChild(g5155);
  g5157.appendChild(g5156);
  g5158.appendChild(g5157);

  // Other parts of the bird (remaining groups)
  const g5162 = document.createElementNS(svgNS, "g");
  g5162.setAttribute('id', 'Group_5162');
  g5162.setAttribute('data-name', 'Group 5162');
  const g5161 = document.createElementNS(svgNS, "g");
  g5161.setAttribute('id', 'Group_5161');
  g5161.setAttribute('data-name', 'Group 5161');
  const g5160 = document.createElementNS(svgNS, "g");
  g5160.setAttribute('id', 'Group_5160');
  g5160.setAttribute('data-name', 'Group 5160');
  const g5159 = document.createElementNS(svgNS, "g");
  g5159.setAttribute('id', 'Group_5159');
  g5159.setAttribute('data-name', 'Group 5159');
  const path1900 = document.createElementNS(svgNS, "path");
  path1900.setAttribute('id', 'Path_1900');
  path1900.setAttribute('data-name', 'Path 1900');
  path1900.setAttribute('d', 'M981.241,746.192l.595.2a3.653,3.653,0,0,0-.595,1.22,24.346,24.346,0,0,1-2.044,4.827c-1.8-.853-1.972-1.385-3.452-2.418C977.757,745.339,981.241,746.192,981.241,746.192Z');
  path1900.setAttribute('fill', '#80cdbb');
  g5159.appendChild(path1900);
  g5160.appendChild(g5159);
  g5161.appendChild(g5160);
  g5162.appendChild(g5161);

  const g5166 = document.createElementNS(svgNS, "g");
  g5166.setAttribute('id', 'Group_5166');
  g5166.setAttribute('data-name', 'Group 5166');
  const g5165 = document.createElementNS(svgNS, "g");
  g5165.setAttribute('id', 'Group_5165');
  g5165.setAttribute('data-name', 'Group 5165');
  const g5164 = document.createElementNS(svgNS, "g");
  g5164.setAttribute('id', 'Group_5164');
  g5164.setAttribute('data-name', 'Group 5164');
  const g5163 = document.createElementNS(svgNS, "g");
  g5163.setAttribute('id', 'Group_5163');
  g5163.setAttribute('data-name', 'Group 5163');
  const path1901 = document.createElementNS(svgNS, "path");
  path1901.setAttribute('id', 'Path_1901');
  path1901.setAttribute('data-name', 'Path 1901');
  path1901.setAttribute('d', 'M973.174,748.652c1.294-1.607,1.471-6.712,5.232-6.712,3.563-.007,4.419,1.668,4.438,1.7s4.775.258,8.849.968c-2.186-.358-7.816-.966-9.857,1.779l-.595-.2s-3.484-.853-5.5,3.827c-.41-.287-.916-.61-1.591-.992A3.4,3.4,0,0,0,973.174,748.652Z');
  path1901.setAttribute('fill', '#5cb755');
  g5163.appendChild(path1901);
  g5164.appendChild(g5163);
  g5165.appendChild(g5164);
  g5166.appendChild(g5165);

  const g5170 = document.createElementNS(svgNS, "g");
  g5170.setAttribute('id', 'Group_5170');
  g5170.setAttribute('data-name', 'Group 5170');
  const g5169 = document.createElementNS(svgNS, "g");
  g5169.setAttribute('id', 'Group_5169');
  g5169.setAttribute('data-name', 'Group 5169');
  const g5168 = document.createElementNS(svgNS, "g");
  g5168.setAttribute('id', 'Group_5168');
  g5168.setAttribute('data-name', 'Group 5168');
  const g5167 = document.createElementNS(svgNS, "g");
  g5167.setAttribute('id', 'Group_5167');
  g5167.setAttribute('data-name', 'Group 5167');
  const path1902 = document.createElementNS(svgNS, "path");
  path1902.setAttribute('id', 'Path_1902');
  path1902.setAttribute('data-name', 'Path 1902');
  path1902.setAttribute('d', 'M964.233,761.783a18.2,18.2,0,0,1,3.438-8.5h3.649v2.835a9.023,9.023,0,0,0,1.079,1.726C968.018,761.9,964.233,761.783,964.233,761.783Z');
  path1902.setAttribute('fill', '#5cb755');
  g5167.appendChild(path1902);
  g5168.appendChild(g5167);
  g5169.appendChild(g5168);
  g5170.appendChild(g5169);

  const g5174 = document.createElementNS(svgNS, "g");
  g5174.setAttribute('id', 'Group_5174');
  g5174.setAttribute('data-name', 'Group 5174');
  const g5173 = document.createElementNS(svgNS, "g");
  g5173.setAttribute('id', 'Group_5173');
  g5173.setAttribute('data-name', 'Group 5173');
  const g5172 = document.createElementNS(svgNS, "g");
  g5172.setAttribute('id', 'Group_5172');
  g5172.setAttribute('data-name', 'Group 5172');
  const g5171 = document.createElementNS(svgNS, "g");
  g5171.setAttribute('id', 'Group_5171');
  g5171.setAttribute('data-name', 'Group 5171');
  const path1903 = document.createElementNS(svgNS, "path");
  path1903.setAttribute('id', 'Path_1903');
  path1903.setAttribute('data-name', 'Path 1903');
  path1903.setAttribute('d', 'M964.233,761.783a8.692,8.692,0,0,0,2.892-.607l-1.475,3.441-2.834,7.087h-2.835Z');
  path1903.setAttribute('fill', '#5cb755');
  g5171.appendChild(path1903);
  g5172.appendChild(g5171);
  g5173.appendChild(g5172);
  g5174.appendChild(g5173);

  const g5178 = document.createElementNS(svgNS, "g");
  g5178.setAttribute('id', 'Group_5178');
  g5178.setAttribute('data-name', 'Group 5178');
  const g5177 = document.createElementNS(svgNS, "g");
  g5177.setAttribute('id', 'Group_5177');
  g5177.setAttribute('data-name', 'Group 5177');
  const g5176 = document.createElementNS(svgNS, "g");
  g5176.setAttribute('id', 'Group_5176');
  g5176.setAttribute('data-name', 'Group 5176');
  const g5175 = document.createElementNS(svgNS, "g");
  g5175.setAttribute('id', 'Group_5175');
  g5175.setAttribute('data-name', 'Group 5175');
  const path1904 = document.createElementNS(svgNS, "path");
  path1904.setAttribute('id', 'Path_1904');
  path1904.setAttribute('data-name', 'Path 1904');
  path1904.setAttribute('d', 'M971.319,763.95a2.17,2.17,0,0,0,2.168-2.167,2.141,2.141,0,0,0-.46-1.325.749.749,0,0,0-1.074-.115,20.2,20.2,0,0,1-2.2,1.613.748.748,0,0,0-.215,1.062A2.165,2.165,0,0,0,971.319,763.95Z');
  path1904.setAttribute('fill', '#7a7a7a');
  g5175.appendChild(path1904);
  g5176.appendChild(g5175);
  g5177.appendChild(g5176);
  g5178.appendChild(g5177);

  const g5182 = document.createElementNS(svgNS, "g");
  g5182.setAttribute('id', 'Group_5182');
  g5182.setAttribute('data-name', 'Group 5182');
  const g5181 = document.createElementNS(svgNS, "g");
  g5181.setAttribute('id', 'Group_5181');
  g5181.setAttribute('data-name', 'Group 5181');
  const g5180 = document.createElementNS(svgNS, "g");
  g5180.setAttribute('id', 'Group_5180');
  g5180.setAttribute('data-name', 'Group 5180');
  const g5179 = document.createElementNS(svgNS, "g");
  g5179.setAttribute('id', 'Group_5179');
  g5179.setAttribute('data-name', 'Group 5179');
  const path1905 = document.createElementNS(svgNS, "path");
  path1905.setAttribute('id', 'Path_1905');
  path1905.setAttribute('data-name', 'Path 1905');
  path1905.setAttribute('d', 'M967.125,761.176a15.7,15.7,0,0,0,5.274-3.336,7.441,7.441,0,0,0,1.687,1.563c-.523.528-1.076,1.033-1.651,1.515a20.881,20.881,0,0,1-2.279,1.672,16.982,16.982,0,0,1-4.506,2.027Z');
  path1905.setAttribute('fill', '#524da1');
  g5179.appendChild(path1905);
  g5180.appendChild(g5179);
  g5181.appendChild(g5180);
  g5182.appendChild(g5181);

  g5183.appendChild(g5154);
  g5183.appendChild(g5158);
  g5183.appendChild(g5162);
  g5183.appendChild(g5166);
  g5183.appendChild(g5170);
  g5183.appendChild(g5174);
  g5183.appendChild(g5178);
  g5183.appendChild(g5182);

  // Group 5184 (eyes and outline)
  const g5184 = document.createElementNS(svgNS, "g");
  g5184.setAttribute('id', 'Group_5184');
  g5184.setAttribute('data-name', 'Group 5184');
  const path1906 = document.createElementNS(svgNS, "path");
  path1906.setAttribute('id', 'Path_1906');
  path1906.setAttribute('data-name', 'Path 1906');
  path1906.setAttribute('d', 'M980.532,744.775a.709.709,0,1,0-.708-.709A.708.708,0,0,0,980.532,744.775Z');
  path1906.setAttribute('fill', '#1a1a1a');
  const path1907 = document.createElementNS(svgNS, "path");
  path1907.setAttribute('id', 'Path_1907');
  path1907.setAttribute('data-name', 'Path 1907');
  path1907.setAttribute('d', 'M1001.815,758.782a.75.75,0,0,0-.684-.582c-2.775-.178-7.747-1.472-14.375-3.745-1.681-.577-3.449-1.209-5.254-1.879-.481-.179-.9-.345-1.276-.5a23.921,23.921,0,0,0,1.738-4.264,2.878,2.878,0,0,1,.474-.971h0c1.832-2.463,7.443-1.763,9.128-1.488h0c.293.05.583.1.868.161a.728.728,0,0,0,.146.014.75.75,0,0,0,.162-1.482s-.351-.078-.928-.172h0c-3.234-.563-6.914-.826-8.3-.925l-.252-.018c-.505-.624-1.828-1.738-4.833-1.738h-.023c-3.144,0-4.178,2.9-4.934,5.013a7.929,7.929,0,0,1-.882,1.979.633.633,0,0,1-.193.177,15.479,15.479,0,0,0-5.321,4.465h0a18.892,18.892,0,0,0-3.575,8.767l-4.207,9.818a.749.749,0,0,0,.689,1.045h2.834a.749.749,0,0,0,.7-.472l2.7-6.759a17.764,17.764,0,0,0,3.834-1.7,2.148,2.148,0,0,0,3.437-1.737,2.107,2.107,0,0,0-.115-.689q.423-.372.821-.753a10.143,10.143,0,0,0,7.266.742.8.8,0,0,0,.153-.066l.335,1a.748.748,0,0,0,.526.489,21.205,21.205,0,0,0,5.261.64,30.962,30.962,0,0,0,13.717-3.546A.752.752,0,0,0,1001.815,758.782Zm-31.261-.374c-.37.282-.743.55-1.121.789l-.01.006c-.387.245-.778.462-1.172.662l-.187.092a12.38,12.38,0,0,1-1.2.514h0a9.811,9.811,0,0,1-1.748.469,17.828,17.828,0,0,1,2.928-6.911h2.521v2.084a.74.74,0,0,0,.072.312l0,.014a10.087,10.087,0,0,0,.705,1.223c.012.019.021.041.034.059-.152.131-.3.264-.455.387C970.8,758.208,970.677,758.314,970.554,758.408Zm8.325-6.978-.021-.011c-.132-.075-.251-.147-.363-.219l-.093-.061c-.089-.06-.174-.118-.254-.177l-.091-.067c-.073-.055-.143-.111-.212-.167-.123-.1-.244-.2-.37-.309-.226-.192-.475-.4-.785-.64.014-.027.027-.059.041-.086.028-.054.057-.1.086-.157.075-.137.152-.267.229-.391.033-.052.066-.1.1-.154.083-.126.168-.244.254-.355.024-.031.047-.064.071-.094q.164-.205.332-.38c.023-.024.047-.044.07-.067.089-.09.179-.174.269-.251.034-.03.068-.057.1-.085.084-.068.169-.132.253-.19l.084-.06a4.043,4.043,0,0,1,.66-.354l.061-.023c.088-.035.175-.066.26-.093l.058-.018c.1-.028.192-.053.283-.072h0c.1-.021.193-.036.283-.047h.006c.079-.01.153-.015.224-.019l.063,0c.044,0,.085,0,.124,0l.093,0h0a4.338,4.338,0,0,0-.182.529A22.635,22.635,0,0,1,978.879,751.43Zm-4-4.722c.84-2.353,1.584-4.018,3.522-4.018h.02c3,0,3.748,1.291,3.756,1.3.184.334.36.381.979.429a5.258,5.258,0,0,0-1.568,1.095l-.115-.038-.059-.017-.056-.011-.042-.007-.1-.016c-.028,0-.064-.007-.1-.01s-.082-.01-.133-.013-.089-.005-.135-.007-.107-.005-.168-.006h-.051c-.079,0-.164,0-.253.006l-.017,0c-.106.005-.22.016-.337.03l-.087.011c-.128.017-.261.039-.4.069l-.006,0c-.134.029-.273.067-.414.11l-.108.035c-.143.047-.287.1-.434.163l-.019.007c-.15.065-.3.143-.457.229-.04.022-.079.045-.119.069-.14.082-.281.172-.421.272-.019.014-.037.024-.056.038a5.962,5.962,0,0,0-.461.38c-.04.036-.079.073-.119.111q-.2.189-.4.409c-.025.028-.05.053-.075.082-.149.173-.294.364-.437.567-.037.052-.072.107-.109.161-.119.178-.236.367-.349.569-.028.049-.057.095-.084.145-.011.021-.023.038-.034.059l-.066-.039c-.256-.159-.532-.325-.852-.506-.079-.045-.16-.087-.241-.127C974.5,747.784,974.689,747.255,974.884,746.708Zm-1.806,2.987a1.957,1.957,0,0,0,.309-.2l.01,0a2.664,2.664,0,0,1,.388.182c.272.153.522.3.76.45l.09.056q.359.224.675.444l.015.01a14.849,14.849,0,0,1,1.174.92,9.4,9.4,0,0,0,2.377,1.554c.567.269,1.256.553,2.1.868q.91.337,1.808.663l-9.785.612-.934.058v-2.036a.75.75,0,0,0-.75-.75H969.29A13.881,13.881,0,0,1,973.078,749.7Zm-10.77,21.259h-1.19l3.62-8.446a8.976,8.976,0,0,0,1.072-.169l-.849,1.983Zm5.126-8.595.253-.591c.363-.143.747-.315,1.148-.515l.082-.041q.518-.261,1.067-.6c.064-.038.127-.079.19-.119q.451-.284.92-.62c.052-.038.1-.073.156-.111.328-.242.661-.508,1-.795.029-.024.058-.043.086-.068.086.091.18.17.27.255s.162.16.247.234c.029.026.056.056.086.081-.315.295-.644.586-.983.87h0a20.2,20.2,0,0,1-2.2,1.613A17.051,17.051,0,0,1,967,763.369Zm15.8-1.207-1.287-3.859a.75.75,0,0,0-1.461.238v2.239a8.29,8.29,0,0,1-5.989-.991,6.355,6.355,0,0,1-.728-.575l-.132-.122a7.2,7.2,0,0,1-.657-.71c-.149-.187-.286-.384-.418-.585l12.479-.78,1.365-.085a91.907,91.907,0,0,0,12.034,3.428C995.275,760.654,989.237,762.538,983.239,761.152Z');
  path1907.setAttribute('fill', '#1a1a1a');
  g5184.appendChild(path1906);
  g5184.appendChild(path1907);

  // Assemble the SVG
  g5185.appendChild(g5183);
  g5185.appendChild(g5184);
  bird.appendChild(g5185);

  return bird;
}

/**
 * Function to create an item SVG element (e.g., a small fish)
 */
function createItem() {
  const svgNS = "http://www.w3.org/2000/svg";
  const item = document.createElementNS(svgNS, "svg");
  item.setAttribute('class', 'absolute item-svg');
  item.setAttribute('width', '20');
  item.setAttribute('height', '10');
  item.setAttribute('viewBox', '0 0 40 20');
  item.setAttribute('xmlns', svgNS);

  // Item body (small fish shape)
  const body = document.createElementNS(svgNS, "path");
  body.setAttribute('d', 'M30,10 C25,5 15,5 10,10 C5,15 10,20 15,15 C20,10 25,15 30,10 Z');
  body.setAttribute('fill', '#FF8A65');
  body.setAttribute('stroke', '#FF5722');
  body.setAttribute('stroke-width', '1');

  // Item tail
  const tail = document.createElementNS(svgNS, "path");
  tail.setAttribute('d', 'M30,10 C35,5 40,7.5 40,10 C40,12.5 35,15 30,10 Z');
  tail.setAttribute('fill', '#FF8A65');
  tail.setAttribute('stroke', '#FF5722');
  tail.setAttribute('stroke-width', '1');

  item.appendChild(body);
  item.appendChild(tail);

  return item;
}

/**
 * Function to animate multiple birds and their item drops
 */
function animateBird(birdContainerId, itemContainerId, seaContainerId) {
  const birdContainer = document.getElementById(birdContainerId);
  const itemContainer = document.getElementById(itemContainerId);
  const seaContainer = document.getElementById(seaContainerId);

  if (!birdContainer || !itemContainer || !seaContainer) return; // Safety check

  const seaContainerRect = seaContainer.getBoundingClientRect();
  const viewportWidth = window.innerWidth;

  const numBirds = 4; // Number of birds
  const birdData = [];

  // Generate bird animation data
  for (let i = 0; i < numBirds; i++) {
    const startX = -100;
    const startY = 30 + i * 30; // Different heights for each bird (30, 60, 90, 120)
    const endX = viewportWidth + 100;
    const flightDuration = 8 + i * 2; // Different speeds (8s, 10s, 12s, 14s)
    const dropX = viewportWidth * (0.3 + i * 0.15); // Different drop points (30%, 45%, 60%, 75%)
    const delay = i * 3; // Staggered start times (0s, 3s, 6s, 9s)

    birdData.push({
      startX,
      startY,
      endX,
      flightDuration,
      dropX,
      delay,
    });
  }

  // Create and animate each bird
  birdData.forEach((data, index) => {
    const bird = createBird(100, 100  );
    birdContainer.appendChild(bird);

    // Set initial bird state
    gsap.set(bird, {
      x: data.startX,
      y: data.startY,
      scale: 0.8 - index * 0.1, // Slightly smaller birds as they are higher up
      transformOrigin: "50% 50%",
    });

    // Animate bird flying across the screen
    const tl = gsap.timeline({ repeat: -1, delay: data.delay });

    tl.to(bird, {
      duration: data.flightDuration,
      x: data.endX,
      ease: "none",
      onUpdate: function () {
        // Check if the bird has reached the drop point
        const currentX = gsap.getProperty(bird, "x");
        if (currentX >= data.dropX && !bird.hasDropped) {
          bird.hasDropped = true; // Prevent multiple drops
          dropItem(itemContainer, seaContainer, currentX, data.startY);
        }
      },
      onRepeat: function () {
        bird.hasDropped = false; // Reset drop state on repeat
      },
    });

    // Wing flapping animation
    const wings = bird.querySelectorAll('.wing');
    gsap.to(wings, {
      duration: 0.5 + index * 0.1, // Slightly different flap speeds
      rotation: 20,
      transformOrigin: "center",
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Gentle up/down motion while flying
    gsap.to(bird, {
      duration: 2 + index * 0.5, // Slightly different up/down motion
      y: "+=20",
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  });
}

/**
 * Function to animate the item drop
 */
function dropItem(itemContainer, seaContainer, dropX, startY) {
  const item = createItem();
  itemContainer.appendChild(item);

  const seaContainerRect = seaContainer.getBoundingClientRect();
  const seaTopY = seaContainerRect.top + window.scrollY; // Absolute position of sea top
  const dropEndY = seaTopY - startY + 20; // Drop into the sea

  // Set initial item position (same as bird's position when dropping)
  gsap.set(item, {
    x: dropX,
    y: startY + 20, // Slightly below the bird
    opacity: 1,
  });

  // Animate item falling
  gsap.to(item, {
    duration: 2,
    y: dropEndY,
    x: dropX + (Math.random() - 0.5) * 50, // Slight horizontal drift
    rotation: 360,
    ease: "power1.in",
    onComplete: () => {
      // Create a small splash effect
      createSplash(itemContainer, dropX, seaTopY);
      itemContainer.removeChild(item);
    },
  });
}

/**
 * Function to create a splash effect
 */
function createSplash(container, x, y) {
  const splash = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  splash.setAttribute('class', 'absolute splash-svg');
  splash.setAttribute('width', '30');
  splash.setAttribute('height', '30');
  splash.setAttribute('viewBox', '0 0 30 30');
  splash.setAttribute('style', `left: ${x}px; top: ${y}px;`);

  // Splash circles
  for (let i = 0; i < 3; i++) {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute('cx', '15');
    circle.setAttribute('cy', '15');
    circle.setAttribute('r', '5');
    circle.setAttribute('fill', 'none');
    circle.setAttribute('stroke', '#BBDEFB');
    circle.setAttribute('stroke-width', '1');
    splash.appendChild(circle);

    gsap.to(circle, {
      duration: 1,
      attr: { r: 10 + i * 2 },
      opacity: 0,
      ease: "power1.out",
      delay: i * 0.2,
    });
  }

  container.appendChild(splash);

  // Remove splash after animation
  gsap.to(splash, {
    duration: 1.5,
    onComplete: () => container.removeChild(splash),
  });
}


