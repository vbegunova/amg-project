const whyTrustSection = document.querySelector(".about_us-why-trust-us");
const whyTrustList = document.querySelector(".about_us-why-trust-us .info-boxes");
const whyTrustSlides = document.querySelectorAll(".about_us-why-trust-us .info-box");
const whyTrustDotsContainer = document.querySelector(
  ".about_us-why-trust-us .slider-dots"
);

let whyTrustCurrentIndex = 0;
let whyTrustTouchStartX = 0;
let whyTrustTouchEndX = 0;

let whyTrustClicksCount = 2;
let whyTrustGap = 10;

const whyTrustSlideWidth = whyTrustSlides[0].offsetWidth;

whyTrustSlides.forEach((slide, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  whyTrustSetActiveDot(whyTrustCurrentIndex);
  dot.addEventListener("click", () => {
    whyTrustCurrentIndex = index;
    whyTrustSetActiveDot(whyTrustCurrentIndex);
    whyTrustShowSlide(whyTrustCurrentIndex);
  });
  whyTrustDotsContainer.appendChild(dot);
});

function whyTrustSetActiveDot(index) {
  const dots = document.querySelectorAll(".about_us-why-trust-us .dot");
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function whyTrustShowSlide(index) {
  whyTrustList.style.transition = "transform 0.4s ease-in-out";
  whyTrustList.style.transform = `translateX(-${
    index * whyTrustSlideWidth + whyTrustGap * index
  }px)`;
}

function whyTrustPrevSlide() {
  if (whyTrustCurrentIndex > 0) {
    whyTrustCurrentIndex--;
    whyTrustSetActiveDot(whyTrustCurrentIndex);
    whyTrustShowSlide(whyTrustCurrentIndex);
  }
}

function whyTrustNextSlide() {
  if (whyTrustCurrentIndex < whyTrustClicksCount) {
    whyTrustCurrentIndex++;
    whyTrustSetActiveDot(whyTrustCurrentIndex);
    whyTrustShowSlide(whyTrustCurrentIndex);
  }
}

whyTrustList.addEventListener("transitionend", () => {
  whyTrustSlides.forEach((slide) => {
    slide.style.transition = "";
  });
});

whyTrustList.addEventListener("touchstart", (e) => {
  whyTrustTouchStartX = e.touches[0].clientX;
});

whyTrustList.addEventListener("touchend", (e) => {
  whyTrustTouchEndX = e.changedTouches[0].clientX;
  if (whyTrustTouchEndX < whyTrustTouchStartX) {
    whyTrustNextSlide();
  } else if (whyTrustTouchEndX > whyTrustTouchStartX) {
    whyTrustPrevSlide();
  }
});
