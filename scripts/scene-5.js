document.addEventListener('DOMContentLoaded', () => {
  const hillBottles = document.querySelectorAll('.hill__bottle');
  const bottle = document.querySelector('.bottle');
  const rings = document.querySelector('.ringsinwater');
  const boy = document.querySelector('.boy');
  const fishFaces = document.querySelectorAll('.fish__face');
  const sunFace = document.querySelector('.sun__face');
  const fishes = document.querySelectorAll('.fish');

  let currentBottleIndex = 0;

  function updateFishes() {
    fishes.forEach(fish => fish.style.opacity = 0);

    if (currentBottleIndex <= 3) {
      fishes[0].style.opacity = 1;
      fishes[1].style.opacity = 1;
      fishes[2].style.opacity = 1;
      fishes[3].style.opacity = 1;
    }
    if (currentBottleIndex > 3 && currentBottleIndex <= 6) {
      fishes[0].style.opacity = 1;
      fishes[1].style.opacity = 1;
      fishes[2].style.opacity = 1;
    }
    if (currentBottleIndex > 6 && currentBottleIndex <= 9) {
      fishes[0].style.opacity = 1;
      fishes[1].style.opacity = 1;
    }
    if (currentBottleIndex > 9) {
      fishes[0].style.opacity = 1;
    }
  }

  function throwNextBottle() {
    if (currentBottleIndex >= hillBottles.length) {
      return;
    }

    bottle.style.animation = 'throwBottle 6s ease-in-out forwards';
    bottle.style.opacity = 1;
    bottle.style.display = 'block';

    if (boy) {
      boy.style.animation = 'boyJump 0.8s ease-out forwards';
    }

    bottle.addEventListener('animationend', () => {
      bottle.style.display = 'none';
      rings.classList.add('visible');

      if (hillBottles[currentBottleIndex]) {
        hillBottles[currentBottleIndex].style.opacity = 1;
        hillBottles[currentBottleIndex].style.display = 'block';
      }

      currentBottleIndex++;

      if (currentBottleIndex === 3) {
        if (sunFace) sunFace.src = 'assets/svg/strokeface_01.svg';
        fishFaces.forEach(fishFace => fishFace.src = 'assets/svg/strokeface_01.svg');
      }

      if (currentBottleIndex === 6) {
        if (sunFace) sunFace.src = 'assets/svg/sadface_01.svg';
        fishFaces.forEach(fishFace => fishFace.src = 'assets/svg/sadface_01.svg');
      }

      updateFishes();

      setTimeout(() => {
        rings.classList.remove('visible');
        if (currentBottleIndex < hillBottles.length) {
          throwNextBottle();
        }
      }, 1000);
    }, { once: true });
  }

  if (sunFace) sunFace.src = 'assets/svg/happyface_01.svg';
  fishFaces.forEach(fishFace => fishFace.src = 'assets/svg/happyface_01.svg');

  fishes.forEach(fish => fish.style.opacity = 0);
  fishes[0].style.opacity = 1;
  fishes[1].style.opacity = 1;
  fishes[2].style.opacity = 1;
  fishes[3].style.opacity = 1;

  throwNextBottle();
});
