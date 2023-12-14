const currentOpeningSection = document.querySelector(".career-current-opening");
const currentOpeningList = document.querySelector(".career-current-opening .list");
const currentOpeningSlides = document.querySelectorAll(".career-current-opening .item");
const currentOpeningDotsContainer = document.querySelector(
  ".career-current-opening .slider-dots"
);

let currentOpeningCurrentIndex = 0;
let currentOpeningTouchStartX = 0;
let currentOpeningTouchEndX = 0;

let currentOpeningClicksCount = 2;
let currentOpeningGap = 10;

const currentOpeningSlideWidth = currentOpeningSlides[0].offsetWidth;

currentOpeningSlides.forEach((slide, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  currentOpeningSetActiveDot(currentOpeningCurrentIndex);
  dot.addEventListener("click", () => {
    currentOpeningCurrentIndex = index;
    currentOpeningSetActiveDot(currentOpeningCurrentIndex);
    currentOpeningShowSlide(currentOpeningCurrentIndex);
  });
  currentOpeningDotsContainer.appendChild(dot);
});

function currentOpeningSetActiveDot(index) {
  const dots = document.querySelectorAll(".career-current-opening .dot");
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function currentOpeningShowSlide(index) {
  currentOpeningList.style.transition = "transform 0.4s ease-in-out";
  currentOpeningList.style.transform = `translateX(-${
    index * currentOpeningSlideWidth + currentOpeningGap * index
  }px)`;
}

function currentOpeningPrevSlide() {
  if (currentOpeningCurrentIndex > 0) {
    currentOpeningCurrentIndex--;
    currentOpeningSetActiveDot(currentOpeningCurrentIndex);
    currentOpeningShowSlide(currentOpeningCurrentIndex);
  }
}

function currentOpeningNextSlide() {
  if (currentOpeningCurrentIndex < currentOpeningClicksCount) {
    currentOpeningCurrentIndex++;
    currentOpeningSetActiveDot(currentOpeningCurrentIndex);
    currentOpeningShowSlide(currentOpeningCurrentIndex);
  }
}

currentOpeningList.addEventListener("transitionend", () => {
  currentOpeningSlides.forEach((slide) => {
    slide.style.transition = "";
  });
});

currentOpeningList.addEventListener("touchstart", (e) => {
  currentOpeningTouchStartX = e.touches[0].clientX;
});

currentOpeningList.addEventListener("touchend", (e) => {
  currentOpeningTouchEndX = e.changedTouches[0].clientX;
  if (currentOpeningTouchEndX < currentOpeningTouchStartX) {
    currentOpeningNextSlide();
  } else if (currentOpeningTouchEndX > currentOpeningTouchStartX) {
    currentOpeningPrevSlide();
  }
});
