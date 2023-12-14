const responsibilitySection = document.querySelector(".responsibility");
const responsibilityList = document.querySelector(".responsibility-list");
const responsibilitySlides = document.querySelectorAll(".responsibility-item");
const responsibilityDotsContainer = document.querySelector(".responsibility .slider-dots");

let responsibilityCurrentIndex = 0;
let responsibilityTouchStartX = 0;
let responsibilityTouchEndX = 0;

let responsibilityClicksCount = 11;
let responsibilityGap = 10;

const responsibilitySlideWidth = responsibilitySlides[0].offsetWidth;

responsibilitySlides.forEach((slide, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  responsibilitySetActiveDot(responsibilityCurrentIndex);
  dot.addEventListener("click", () => {
    responsibilityCurrentIndex = index;
    responsibilitySetActiveDot(responsibilityCurrentIndex);
    responsibilityShowSlide(responsibilityCurrentIndex);
  });
  responsibilityDotsContainer.appendChild(dot);
});

function responsibilitySetActiveDot(index) {
  const dots = document.querySelectorAll(".responsibility .dot");
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function responsibilityShowSlide(index) {
  responsibilityList.style.transition = "transform 0.4s ease-in-out";
  responsibilityList.style.transform = `translateX(-${
    index * responsibilitySlideWidth + responsibilityGap * index
  }px)`;
}

function responsibilityPrevSlide() {
  if (responsibilityCurrentIndex > 0) {
    responsibilityCurrentIndex--;
    responsibilitySetActiveDot(responsibilityCurrentIndex);
    responsibilityShowSlide(responsibilityCurrentIndex);
  }
}

function responsibilityNextSlide() {
  if (responsibilityCurrentIndex < responsibilityClicksCount) {
    responsibilityCurrentIndex++;
    responsibilitySetActiveDot(responsibilityCurrentIndex);
    responsibilityShowSlide(responsibilityCurrentIndex);
  }
}

responsibilityList.addEventListener("transitionend", () => {
  responsibilitySlides.forEach((slide) => {
    slide.style.transition = "";
  });
});

responsibilityList.addEventListener("touchstart", (e) => {
  responsibilityTouchStartX = e.touches[0].clientX;
});

responsibilityList.addEventListener("touchend", (e) => {
  responsibilityTouchEndX = e.changedTouches[0].clientX;
  if (responsibilityTouchEndX < responsibilityTouchStartX) {
    responsibilityNextSlide();
  } else if (responsibilityTouchEndX > responsibilityTouchStartX) {
    responsibilityPrevSlide();
  }
});
