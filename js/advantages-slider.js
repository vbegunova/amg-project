const advantagesSection = document.querySelector(".advantages");
const advantagesList = document.querySelector(".mobile.adv-list");
const advantagesSlides = document.querySelectorAll(
  ".mobile.adv-list .adv-item"
);
const dotsContainer = document.querySelector(".advantages .slider-dots");

let advCurrentIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

let clicksCount = 9;
let advGap = 10;

const slideWidth = advantagesSlides[0].offsetWidth;

advantagesSlides.forEach((slide, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  setActiveDot(advCurrentIndex);
  dot.addEventListener("click", () => {
    advCurrentIndex = index;
    setActiveDot(advCurrentIndex);
    showSlide(advCurrentIndex);
  });
  dotsContainer.appendChild(dot);
});

function setActiveDot(index) {
  const dots = document.querySelectorAll(".advantages .dot");
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function showSlide(index) {
  advantagesList.style.transition = "transform 0.4s ease-in-out";
  advantagesList.style.transform = `translateX(-${
    index * slideWidth + advGap * index
  }px)`;
}

function advPrevSlide() {
  if (advCurrentIndex > 0) {
    advCurrentIndex--;
    setActiveDot(advCurrentIndex);
    showSlide(advCurrentIndex);
  }
}

function advNextSlide() {
  if (advCurrentIndex < clicksCount) {
    advCurrentIndex++;
    setActiveDot(advCurrentIndex);
    showSlide(advCurrentIndex);
  }
}

advantagesList.addEventListener("transitionend", () => {
  advantagesSlides.forEach((slide) => {
    slide.style.transition = "";
  });
});

advantagesList.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

advantagesList.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].clientX;
  if (touchEndX < touchStartX) {
    advNextSlide();
  } else if (touchEndX > touchStartX) {
    advPrevSlide();
  }
});
