const opportunitiesSection = document.querySelector(".career-opportunities");
const opportunitiesList = document.querySelector(".career-opportunities .list");
const opportunitiesSlides = document.querySelectorAll(".career-opportunities .item");
const opportunitiesDotsContainer = document.querySelector(
  ".career-opportunities .slider-dots"
);

let opportunitiesCurrentIndex = 0;
let opportunitiesTouchStartX = 0;
let opportunitiesTouchEndX = 0;

let opportunitiesClicksCount = 2;
let opportunitiesGap = 10;

const opportunitiesSlideWidth = opportunitiesSlides[0].offsetWidth;

opportunitiesSlides.forEach((slide, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  opportunitiesSetActiveDot(opportunitiesCurrentIndex);
  dot.addEventListener("click", () => {
    opportunitiesCurrentIndex = index;
    opportunitiesSetActiveDot(opportunitiesCurrentIndex);
    opportunitiesShowSlide(opportunitiesCurrentIndex);
  });
  opportunitiesDotsContainer.appendChild(dot);
});

function opportunitiesSetActiveDot(index) {
  const dots = document.querySelectorAll(".career-opportunities .dot");
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function opportunitiesShowSlide(index) {
  opportunitiesList.style.transition = "transform 0.4s ease-in-out";
  opportunitiesList.style.transform = `translateX(-${
    index * opportunitiesSlideWidth + opportunitiesGap * index
  }px)`;
}

function opportunitiesPrevSlide() {
  if (opportunitiesCurrentIndex > 0) {
    opportunitiesCurrentIndex--;
    opportunitiesSetActiveDot(opportunitiesCurrentIndex);
    opportunitiesShowSlide(opportunitiesCurrentIndex);
  }
}

function opportunitiesNextSlide() {
  if (opportunitiesCurrentIndex < opportunitiesClicksCount) {
    opportunitiesCurrentIndex++;
    opportunitiesSetActiveDot(opportunitiesCurrentIndex);
    opportunitiesShowSlide(opportunitiesCurrentIndex);
  }
}

opportunitiesList.addEventListener("transitionend", () => {
  opportunitiesSlides.forEach((slide) => {
    slide.style.transition = "";
  });
});

opportunitiesList.addEventListener("touchstart", (e) => {
  opportunitiesTouchStartX = e.touches[0].clientX;
});

opportunitiesList.addEventListener("touchend", (e) => {
  opportunitiesTouchEndX = e.changedTouches[0].clientX;
  if (opportunitiesTouchEndX < opportunitiesTouchStartX) {
    opportunitiesNextSlide();
  } else if (opportunitiesTouchEndX > opportunitiesTouchStartX) {
    opportunitiesPrevSlide();
  }
});
