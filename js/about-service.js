const aboutServiceSection = document.querySelector(".service_page-about-service");
const aboutServiceList = document.querySelector(".service_page-about-service .list");
const aboutServiceSlides = document.querySelectorAll(".service_page-about-service .item");
const aboutServiceDotsContainer = document.querySelector(
  ".service_page-about-service .slider-dots"
);

let aboutServiceCurrentIndex = 0;
let aboutServiceTouchStartX = 0;
let aboutServiceTouchEndX = 0;

let aboutServiceClicksCount = 3;
let aboutServiceGap = 10;

const aboutServiceSlideWidth = aboutServiceSlides[0].offsetWidth;

aboutServiceSlides.forEach((slide, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  aboutServiceSetActiveDot(aboutServiceCurrentIndex);
  dot.addEventListener("click", () => {
    aboutServiceCurrentIndex = index;
    aboutServiceSetActiveDot(aboutServiceCurrentIndex);
    aboutServiceShowSlide(aboutServiceCurrentIndex);
  });
  aboutServiceDotsContainer.appendChild(dot);
});

function aboutServiceSetActiveDot(index) {
  const dots = document.querySelectorAll(".service_page-about-service .dot");
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function aboutServiceShowSlide(index) {
  aboutServiceList.style.transition = "transform 0.4s ease-in-out";
  aboutServiceList.style.transform = `translateX(-${
    index * aboutServiceSlideWidth + aboutServiceGap * index
  }px)`;
}

function aboutServicePrevSlide() {
  if (aboutServiceCurrentIndex > 0) {
    aboutServiceCurrentIndex--;
    aboutServiceSetActiveDot(aboutServiceCurrentIndex);
    aboutServiceShowSlide(aboutServiceCurrentIndex);
  }
}

function aboutServiceNextSlide() {
  if (aboutServiceCurrentIndex < aboutServiceClicksCount) {
    aboutServiceCurrentIndex++;
    aboutServiceSetActiveDot(aboutServiceCurrentIndex);
    aboutServiceShowSlide(aboutServiceCurrentIndex);
  }
}

aboutServiceList.addEventListener("transitionend", () => {
  aboutServiceSlides.forEach((slide) => {
    slide.style.transition = "";
  });
});

aboutServiceList.addEventListener("touchstart", (e) => {
  aboutServiceTouchStartX = e.touches[0].clientX;
});

aboutServiceList.addEventListener("touchend", (e) => {
  aboutServiceTouchEndX = e.changedTouches[0].clientX;
  if (aboutServiceTouchEndX < aboutServiceTouchStartX) {
    aboutServiceNextSlide();
  } else if (aboutServiceTouchEndX > aboutServiceTouchStartX) {
    aboutServicePrevSlide();
  }
});
