const prestigiousSection = document.querySelector(".about_us-why-prestigious");
const prestigiousList = document.querySelector(".about_us-why-prestigious .list");
const prestigiousSlides = document.querySelectorAll(".about_us-why-prestigious .list .item");
const prestigiousDotsContainer = document.querySelector(
  ".about_us-why-prestigious .slider-dots"
);

let prestigiousCurrentIndex = 0;
let prestigiousTouchStartX = 0;
let prestigiousTouchEndX = 0;

let prestigiousClicksCount = prestigiousSlides.length - 1;
let prestigiousGap = 10;

const prestigiousSlideWidth = prestigiousSlides[0].offsetWidth;

prestigiousSlides.forEach((slide, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  prestigiousSetActiveDot(prestigiousCurrentIndex);
  dot.addEventListener("click", () => {
    prestigiousCurrentIndex = index;
    prestigiousSetActiveDot(prestigiousCurrentIndex);
    prestigiousShowSlide(prestigiousCurrentIndex);
  });
  prestigiousDotsContainer.appendChild(dot);
});

function prestigiousSetActiveDot(index) {
  const dots = document.querySelectorAll(".about_us-why-prestigious .dot");
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function prestigiousShowSlide(index) {
  prestigiousList.style.transition = "transform 0.4s ease-in-out";
  prestigiousList.style.transform = `translateX(-${
    index * prestigiousSlideWidth + prestigiousGap * index
  }px)`;
}

function prestigiousPrevSlide() {
  if (prestigiousCurrentIndex > 0) {
    prestigiousCurrentIndex--;
    prestigiousSetActiveDot(prestigiousCurrentIndex);
    prestigiousShowSlide(prestigiousCurrentIndex);
  }
}

function prestigiousNextSlide() {
  if (prestigiousCurrentIndex < prestigiousClicksCount) {
    prestigiousCurrentIndex++;
    prestigiousSetActiveDot(prestigiousCurrentIndex);
    prestigiousShowSlide(prestigiousCurrentIndex);
  }
}

prestigiousList.addEventListener("transitionend", () => {
  prestigiousSlides.forEach((slide) => {
    slide.style.transition = "";
  });
});

prestigiousList.addEventListener("touchstart", (e) => {
  prestigiousTouchStartX = e.touches[0].clientX;
});

prestigiousList.addEventListener("touchend", (e) => {
  prestigiousTouchEndX = e.changedTouches[0].clientX;
  if (prestigiousTouchEndX < prestigiousTouchStartX) {
    prestigiousNextSlide();
  } else if (prestigiousTouchEndX > prestigiousTouchStartX) {
    prestigiousPrevSlide();
  }
});
