const servicesSection = document.querySelector(".services");
const servicesList = document.querySelector(".services-list");
const servicesSlides = document.querySelectorAll(".services-item");
const servicesDotsContainer = document.querySelector(".services .slider-dots");

let servicesCurrentIndex = 0;
let servicesTouchStartX = 0;
let servicesTouchEndX = 0;

let servicesClicksCount = servicesSlides.length - 1;
let servicesGap = 10;

const servicesSlideWidth = servicesSlides[0].offsetWidth;

servicesSlides.forEach((slide, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  servicesSetActiveDot(servicesCurrentIndex);
  dot.addEventListener("click", () => {
    servicesCurrentIndex = index;
    servicesSetActiveDot(servicesCurrentIndex);
    servicesShowSlide(servicesCurrentIndex);
  });
  servicesDotsContainer.appendChild(dot);
});

function servicesSetActiveDot(index) {
  const dots = document.querySelectorAll(".services .dot");
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function servicesShowSlide(index) {
  servicesList.style.transition = "transform 0.4s ease-in-out";
  servicesList.style.transform = `translateX(-${
    index * servicesSlideWidth + servicesGap * index
  }px)`;
}

function servicesPrevSlide() {
  if (servicesCurrentIndex > 0) {
    servicesCurrentIndex--;
    servicesSetActiveDot(servicesCurrentIndex);
    servicesShowSlide(servicesCurrentIndex);
  }
}

function servicesNextSlide() {
  if (servicesCurrentIndex < servicesClicksCount) {
    servicesCurrentIndex++;
    servicesSetActiveDot(servicesCurrentIndex);
    servicesShowSlide(servicesCurrentIndex);
  }
}

servicesList.addEventListener("transitionend", () => {
  servicesSlides.forEach((slide) => {
    slide.style.transition = "";
  });
});

servicesList.addEventListener("touchstart", (e) => {
  servicesTouchStartX = e.touches[0].clientX;
});

servicesList.addEventListener("touchend", (e) => {
  servicesTouchEndX = e.changedTouches[0].clientX;
  if (servicesTouchEndX < servicesTouchStartX) {
    servicesNextSlide();
  } else if (servicesTouchEndX > servicesTouchStartX) {
    servicesPrevSlide();
  }
});
