const audienceSection = document.querySelector(".audience");
const audienceList = document.querySelector(".audience-list");
const audienceSlides = document.querySelectorAll(
  ".audience-list .audience-item"
);
const audienceDotsContainer = document.querySelector(".audience .slider-dots");

let audienceCurrentIndex = 0;
let audienceTouchStartX = 0;
let audienceTouchEndX = 0;

let audienceClicksCount = audienceSlides.length - 2;
let audienceGap = 14;
const audienceSlideWidth = audienceSlides[0].offsetWidth;

audienceSlides.forEach((slide, index) => {
  if (index >= audienceSlides.length - 1) {
    return;
  }
  const dot = document.createElement("div");
  dot.classList.add("dot");
  audienceSetActiveDot(audienceCurrentIndex);
  dot.addEventListener("click", () => {
    audienceCurrentIndex = index;
    audienceSetActiveDot(audienceCurrentIndex);
    audienceShowSlide(audienceCurrentIndex);
  });
  audienceDotsContainer.appendChild(dot);
});

function audienceSetActiveDot(index) {
  const dots = document.querySelectorAll(".audience .dot");
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function audienceShowSlide(index) {
  audienceList.style.transition = "transform 0.4s ease-in-out";
  audienceList.style.transform = `translateX(-${
    index * audienceSlideWidth + audienceGap * index
  }px)`;
}

function audiencePrevSlide() {
  if (audienceCurrentIndex > 0) {
    audienceCurrentIndex--;
    audienceSetActiveDot(audienceCurrentIndex);
    audienceShowSlide(audienceCurrentIndex);
  }
}

function audienceNextSlide() {
  if (audienceCurrentIndex < audienceClicksCount) {
    audienceCurrentIndex++;
    audienceSetActiveDot(audienceCurrentIndex);
    audienceShowSlide(audienceCurrentIndex);
  }
}

audienceList.addEventListener("transitionend", () => {
  audienceSlides.forEach((slide) => {
    slide.style.transition = "";
  });
});

audienceList.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

audienceList.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].clientX;
  if (touchEndX < touchStartX) {
    audienceNextSlide();
  } else if (touchEndX > touchStartX) {
    audiencePrevSlide();
  }
});
