const principlesSection = document.querySelector(".principles");
const principlesList = document.querySelector(".principles-list");
const principlesSlides = document.querySelectorAll(".principles-item");
const principlesDotsContainer = document.querySelector(
  ".principles .slider-dots"
);

let principlesCurrentIndex = 0;
let principlesTouchStartX = 0;
let principlesTouchEndX = 0;

let principlesClicksCount = principlesSlides.length - 1;
let principlesGap = 10;

const principlesSlideWidth = principlesSlides[0].offsetWidth;

principlesSlides.forEach((slide, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  principlesSetActiveDot(principlesCurrentIndex);
  dot.addEventListener("click", () => {
    principlesCurrentIndex = index;
    principlesSetActiveDot(principlesCurrentIndex);
    principlesShowSlide(principlesCurrentIndex);
  });
  principlesDotsContainer.appendChild(dot);
});

function principlesSetActiveDot(index) {
  const dots = document.querySelectorAll(".principles .dot");
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function principlesShowSlide(index) {
  principlesList.style.transition = "transform 0.4s ease-in-out";
  principlesList.style.transform = `translateX(-${
    index * principlesSlideWidth + principlesGap * index
  }px)`;
}

function principlesPrevSlide() {
  if (principlesCurrentIndex > 0) {
    principlesCurrentIndex--;
    principlesSetActiveDot(principlesCurrentIndex);
    principlesShowSlide(principlesCurrentIndex);
  }
}

function principlesNextSlide() {
  if (principlesCurrentIndex < principlesClicksCount) {
    principlesCurrentIndex++;
    principlesSetActiveDot(principlesCurrentIndex);
    principlesShowSlide(principlesCurrentIndex);
  }
}

principlesList.addEventListener("transitionend", () => {
  principlesSlides.forEach((slide) => {
    slide.style.transition = "";
  });
});

principlesList.addEventListener("touchstart", (e) => {
  principlesTouchStartX = e.touches[0].clientX;
});

principlesList.addEventListener("touchend", (e) => {
  principlesTouchEndX = e.changedTouches[0].clientX;
  if (principlesTouchEndX < principlesTouchStartX) {
    principlesNextSlide();
  } else if (principlesTouchEndX > principlesTouchStartX) {
    principlesPrevSlide();
  }
});
