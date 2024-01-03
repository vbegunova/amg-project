const stagesSection = document.querySelector(".service_page-stages");
const stagesList = document.querySelector(".service_page-stages .list");
const stagesSlides = document.querySelectorAll(".service_page-stages .item");
const stagesDotsContainer = document.querySelector(
  ".service_page-stages .slider-dots"
);

let stagesCurrentIndex = 0;
let stagesTouchStartX = 0;
let stagesTouchEndX = 0;

let stagesClicksCount = stagesSlides.length - 1;
let stagesGap = 10;

const stagesSlideWidth = stagesSlides[0].offsetWidth;

stagesSlides.forEach((slide, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  stagesSetActiveDot(stagesCurrentIndex);
  dot.addEventListener("click", () => {
    stagesCurrentIndex = index;
    stagesSetActiveDot(stagesCurrentIndex);
    stagesShowSlide(stagesCurrentIndex);
  });
  stagesDotsContainer.appendChild(dot);
});

function stagesSetActiveDot(index) {
  const dots = document.querySelectorAll(".service_page-stages .dot");
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function stagesShowSlide(index) {
  stagesList.style.transition = "transform 0.4s ease-in-out";
  stagesList.style.transform = `translateX(-${
    index * stagesSlideWidth + stagesGap * index
  }px)`;
}

function stagesPrevSlide() {
  if (stagesCurrentIndex > 0) {
    stagesCurrentIndex--;
    stagesSetActiveDot(stagesCurrentIndex);
    stagesShowSlide(stagesCurrentIndex);
  }
}

function stagesNextSlide() {
  if (stagesCurrentIndex < stagesClicksCount) {
    stagesCurrentIndex++;
    stagesSetActiveDot(stagesCurrentIndex);
    stagesShowSlide(stagesCurrentIndex);
  }
}

stagesList.addEventListener("transitionend", () => {
  stagesSlides.forEach((slide) => {
    slide.style.transition = "";
  });
});

stagesList.addEventListener("touchstart", (e) => {
  stagesTouchStartX = e.touches[0].clientX;
});

stagesList.addEventListener("touchend", (e) => {
  stagesTouchEndX = e.changedTouches[0].clientX;
  if (stagesTouchEndX < stagesTouchStartX) {
    stagesNextSlide();
  } else if (stagesTouchEndX > stagesTouchStartX) {
    stagesPrevSlide();
  }
});
