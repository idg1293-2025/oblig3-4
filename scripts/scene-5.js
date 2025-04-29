// === Combined Boy & Girl Bottle Scenes ===
// Merged into one DOMContentLoaded event

window.addEventListener('DOMContentLoaded', () => {
  const hillBottles = document.querySelectorAll('.hill__bottle');
  const fishes = document.querySelectorAll('.fish');
  const fishFaces = document.querySelectorAll('.fish__face');
  const sunFace = document.querySelector('.sun__face');

  const bottle = document.querySelector('.bottle');
  const rings = document.querySelector('.ringsinwater');
  const boy = document.querySelector('.boy');

  const girl = document.querySelector('.girl');
  const motionlines = document.querySelector('.motionlines');
  const handBottle = document.querySelector('.handbottle');

  let currentBottleIndex = 0;

  function updateFishesBoy() {
    fishes.forEach(fish => fish.style.opacity = 0);
    if (currentBottleIndex <= 3) {
      fishes[0].style.opacity = 1;
      fishes[1].style.opacity = 1;
      fishes[2].style.opacity = 1;
      fishes[3].style.opacity = 1;
    } else if (currentBottleIndex <= 6) {
      fishes[0].style.opacity = 1;
      fishes[1].style.opacity = 1;
      fishes[2].style.opacity = 1;
    } else if (currentBottleIndex <= 9) {
      fishes[0].style.opacity = 1;
      fishes[1].style.opacity = 1;
    } else {
      fishes[0].style.opacity = 1;
    }
  }

  function updateFishesGirl() {
    fishes.forEach(fish => fish.style.opacity = 0);
    if (currentBottleIndex < 3) {
      fishes[0].style.opacity = 1;
    } else if (currentBottleIndex < 6) {
      fishes[0].style.opacity = 1;
      fishes[1].style.opacity = 1;
    } else if (currentBottleIndex < 9) {
      fishes[0].style.opacity = 1;
      fishes[1].style.opacity = 1;
      fishes[2].style.opacity = 1;
    } else {
      fishes[0].style.opacity = 1;
      fishes[1].style.opacity = 1;
      fishes[2].style.opacity = 1;
      fishes[3].style.opacity = 1;
    }
  }

  function throwNextBottle() {
    if (currentBottleIndex >= hillBottles.length) return;

    bottle.style.animation = 'throwBottle 6s ease-in-out forwards';
    bottle.style.opacity = 1;
    bottle.style.display = 'block';

    if (boy) boy.style.animation = 'boyJump 0.8s ease-out forwards';

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
        fishFaces.forEach(f => f.src = 'assets/svg/strokeface_01.svg');
      }
      if (currentBottleIndex === 6) {
        if (sunFace) sunFace.src = 'assets/svg/sadface_01.svg';
        fishFaces.forEach(f => f.src = 'assets/svg/sadface_01.svg');
      }

      updateFishesBoy();

      setTimeout(() => {
        rings.classList.remove('visible');
        if (currentBottleIndex < hillBottles.length) {
          throwNextBottle();
        }
      }, 1000);
    }, { once: true });
  }

  function pantNextBottle() {
    if (currentBottleIndex >= hillBottles.length) return;

    if (motionlines) motionlines.style.opacity = 1;
    if (handBottle) {
      handBottle.style.opacity = 1;
      handBottle.style.animation = 'throwHandBottle 1.5s ease forwards';
    }
    if (girl) girl.style.animation = 'girlPant 0.8s ease-out forwards';

    girl.addEventListener('animationend', () => {
      girl.style.animation = '';
      if (motionlines) motionlines.style.opacity = 0;

      setTimeout(() => {
        if (handBottle) {
          handBottle.style.opacity = 0;
          handBottle.style.animation = '';
        }

        if (hillBottles[currentBottleIndex]) {
          hillBottles[currentBottleIndex].style.opacity = 0;
          hillBottles[currentBottleIndex].style.display = 'none';
        }

        currentBottleIndex++;

        if (currentBottleIndex === 3) {
          if (sunFace) sunFace.src = 'assets/svg/strokeface_01.svg';
          fishFaces.forEach(f => f.src = 'assets/svg/strokeface_01.svg');
        }
        if (currentBottleIndex === 5) {
          if (sunFace) sunFace.src = 'assets/svg/happyface_01.svg';
          fishFaces.forEach(f => f.src = 'assets/svg/happyface_01.svg');
        }

        updateFishesGirl();

        setTimeout(() => {
          pantNextBottle();
        }, 800);
      }, 1000);
    }, { once: true });
  }

  // Initialize states
  if (bottle && boy) {
    if (sunFace) sunFace.src = 'assets/svg/happyface_01.svg';
    fishFaces.forEach(f => f.src = 'assets/svg/happyface_01.svg');
    fishes.forEach(fish => fish.style.opacity = 0);
    fishes[0].style.opacity = 1;
    fishes[1].style.opacity = 1;
    fishes[2].style.opacity = 1;
    fishes[3].style.opacity = 1;
    throwNextBottle();
  } else if (handBottle && girl) {
    if (sunFace) sunFace.src = 'assets/svg/sadface_01.svg';
    fishFaces.forEach(f => f.src = 'assets/svg/sadface_01.svg');
    fishes.forEach(fish => fish.style.opacity = 0);
    fishes[0].style.opacity = 1;
    pantNextBottle();
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const hillBottles = document.querySelectorAll('.hill__bottle');
  const girl = document.querySelector('.girl');
  const motionlines = document.querySelector('.motionlines');
  const fishFaces = document.querySelectorAll('.fish__face');
  const sunFace = document.querySelector('.sun__face');
  const handBottle = document.querySelector('.handbottle');
  const fishes = document.querySelectorAll('.fish');

  let currentBottleIndex = 0;

  function updateFishes() {
    fishes.forEach(fish => fish.style.opacity = 0);

    if (currentBottleIndex >= 0 && currentBottleIndex < 3) {
      fishes[0].style.opacity = 1;
    } 
    if (currentBottleIndex >= 3 && currentBottleIndex < 6) {
      fishes[0].style.opacity = 1;
      fishes[1].style.opacity = 1;
    }
    if (currentBottleIndex >= 6 && currentBottleIndex < 9) {
      fishes[0].style.opacity = 1;
      fishes[1].style.opacity = 1;
      fishes[2].style.opacity = 1;
    }
    if (currentBottleIndex >= 9) {
      fishes[0].style.opacity = 1;
      fishes[1].style.opacity = 1;
      fishes[2].style.opacity = 1;
      fishes[3].style.opacity = 1;
    }
  }

  function pantNextBottle() {
    if (currentBottleIndex >= hillBottles.length) {
      return;
    }

    if (motionlines) {
      motionlines.style.opacity = 1;
    }

    if (handBottle) {
      handBottle.style.opacity = 1;
      handBottle.style.animation = 'throwHandBottle 1.5s ease forwards';
    }

    if (girl) {
      girl.style.animation = 'girlPant 0.8s ease-out forwards';
    }

    girl.addEventListener('animationend', () => {
      girl.style.animation = '';

      if (motionlines) {
        motionlines.style.opacity = 0;
      }

      setTimeout(() => {
        if (handBottle) {
          handBottle.style.opacity = 0;
          handBottle.style.animation = '';
        }

        if (hillBottles[currentBottleIndex]) {
          hillBottles[currentBottleIndex].style.opacity = 0;
          hillBottles[currentBottleIndex].style.display = 'none';
        }

        currentBottleIndex++;

        if (currentBottleIndex === 3) {
          if (sunFace) sunFace.src = 'assets/svg/strokeface_01.svg';
          fishFaces.forEach(fishFace => fishFace.src = 'assets/svg/strokeface_01.svg');
        }

        if (currentBottleIndex === 5) {
          if (sunFace) sunFace.src = 'assets/svg/happyface_01.svg';
          fishFaces.forEach(fishFace => fishFace.src = 'assets/svg/happyface_01.svg');
        }

        updateFishes();

        setTimeout(() => {
          pantNextBottle();
        }, 800);
      }, 1000);
    }, { once: true });
  }

  if (sunFace) sunFace.src = 'assets/svg/sadface_01.svg';
  fishFaces.forEach(fishFace => fishFace.src = 'assets/svg/sadface_01.svg');

  fishes.forEach(fish => fish.style.opacity = 0);
  fishes[0].style.opacity = 1;

  pantNextBottle();
});

