const selectionProcessSection = document.querySelector(".guards_skills-selection-process");
const selectionProcessList = document.querySelector(".guards_skills-selection-process .info-boxes");
const selectionProcessSlides = document.querySelectorAll(".guards_skills-selection-process .info-box");
const selectionProcessDotsContainer = document.querySelector(
  ".guards_skills-selection-process .slider-dots"
);

let selectionProcessCurrentIndex = 0;
let selectionProcessTouchStartX = 0;
let selectionProcessTouchEndX = 0;

let selectionProcessClicksCount = 2;
let selectionProcessGap = 10;

const selectionProcessSlideWidth = selectionProcessSlides[0].offsetWidth;

selectionProcessSlides.forEach((slide, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  selectionProcessSetActiveDot(selectionProcessCurrentIndex);
  dot.addEventListener("click", () => {
    selectionProcessCurrentIndex = index;
    selectionProcessSetActiveDot(selectionProcessCurrentIndex);
    selectionProcessShowSlide(selectionProcessCurrentIndex);
  });
  selectionProcessDotsContainer.appendChild(dot);
});

function selectionProcessSetActiveDot(index) {
  const dots = document.querySelectorAll(".guards_skills-selection-process .dot");
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function selectionProcessShowSlide(index) {
  selectionProcessList.style.transition = "transform 0.4s ease-in-out";
  selectionProcessList.style.transform = `translateX(-${
    index * selectionProcessSlideWidth + selectionProcessGap * index
  }px)`;
}

function selectionProcessPrevSlide() {
  if (selectionProcessCurrentIndex > 0) {
    selectionProcessCurrentIndex--;
    selectionProcessSetActiveDot(selectionProcessCurrentIndex);
    selectionProcessShowSlide(selectionProcessCurrentIndex);
  }
}

function selectionProcessNextSlide() {
  if (selectionProcessCurrentIndex < selectionProcessClicksCount) {
    selectionProcessCurrentIndex++;
    selectionProcessSetActiveDot(selectionProcessCurrentIndex);
    selectionProcessShowSlide(selectionProcessCurrentIndex);
  }
}

selectionProcessList.addEventListener("transitionend", () => {
  selectionProcessSlides.forEach((slide) => {
    slide.style.transition = "";
  });
});

selectionProcessList.addEventListener("touchstart", (e) => {
  selectionProcessTouchStartX = e.touches[0].clientX;
});

selectionProcessList.addEventListener("touchend", (e) => {
  selectionProcessTouchEndX = e.changedTouches[0].clientX;
  if (selectionProcessTouchEndX < selectionProcessTouchStartX) {
    selectionProcessNextSlide();
  } else if (selectionProcessTouchEndX > selectionProcessTouchStartX) {
    selectionProcessPrevSlide();
  }
});
