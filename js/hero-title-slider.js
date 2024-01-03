const titleBox = document.querySelector('.hero .title-box');
const titles = document.querySelectorAll('.hero .title-box .item');
let currentTitle = 0;

const titleSlideWidth = titles[0].offsetWidth;

function changeTitle(index) {
  titleBox.style.transition = "transform 0.4s ease-in-out";
  titleBox.style.transform = `translateX(-${
    index * titleSlideWidth
  }px)`;
}

if (window.innerWidth < 1440) {
  setInterval(() => {
    console.log('fewfew');
    currentTitle++;
    if (currentTitle >= titles.length) {
      currentTitle = 0;
    }
    changeTitle(currentTitle);
  }, 5000)
}

function nextTitle() {
  currentTitle++;
  if (currentTitle >= titles.length) {
    currentTitle = 0;
  }
  changeTitle(currentTitle);
}

function prevTitle() {
  currentTitle--;
  if (currentTitle < 0) {
    currentTitle = titles.length - 1;
  }
  changeTitle(currentTitle);
}

const nextButtonHero = document.querySelector(
  ".hero-slider-button:last-of-type"
);
const prevButtonHero = document.querySelector(
  ".hero-slider-button:first-of-type"
);

nextButtonHero.addEventListener("click", nextTitle);
prevButtonHero.addEventListener("click", prevTitle);
