// Hero title slider

const reviewsContainer = document.querySelector(".reviews-container");
const reviews = reviewsContainer.querySelectorAll(".review-box");
const questionsContainer = document.querySelector(".qustions-list");
const toggleButtonsQuestions =
  questionsContainer.querySelectorAll(".toogle-button");

const advantagesContainer = document.querySelector(".advantages-lists");
const toggleButtonsAdvantages =
  advantagesContainer.querySelectorAll(".toogle-button");

const titles = [
  "Improve security<br />standards with our<br />proven solutions",
  "AMG's promise:<br />precision security,<br />no hidden costs! ",
  "Take advantage of<br />premium security services<br />tailored to your needs",
];

let currentTitle = 0;
const titleElement = document.querySelector(".hero-title");

function changeTitle() {
  if (currentTitle === 2) {
    titleElement.style.width = "100%";
  } else {
    titleElement.style.width = "621px";
  }
  titleElement.innerHTML = titles[currentTitle];
}

changeTitle();

function nextTitle() {
  currentTitle++;
  if (currentTitle >= titles.length) {
    currentTitle = 0;
  }
  changeTitle();
}

function prevTitle() {
  currentTitle--;
  if (currentTitle < 0) {
    currentTitle = titles.length - 1;
  }
  changeTitle();
}

const nextButtonHero = document.querySelector(
  ".hero-slider-button:last-of-type"
);
const prevButtonHero = document.querySelector(
  ".hero-slider-button:first-of-type"
);

nextButtonHero.addEventListener("click", nextTitle);
prevButtonHero.addEventListener("click", prevTitle);

// Reviews slider

let currentReview = 0;

function showReview(reviewIndex) {
  reviews.forEach((review, index) => {
    if (index === reviewIndex) {
      review.style.display = "block";
    } else {
      review.style.display = "none";
    }
  });
}

showReview(currentReview);

function nextReview() {
  currentReview++;
  if (currentReview >= reviews.length) {
    currentReview = 0;
  }
  showReview(currentReview);
}

function prevReview() {
  currentReview--;
  if (currentReview < 0) {
    currentReview = reviews.length - 1;
  }
  showReview(currentReview);
}

const nextButton = document.querySelector(
  ".reviews-slider .button-ctrl:last-of-type"
);
const prevButton = document.querySelector(
  ".reviews-slider .button-ctrl:first-of-type"
);

nextButton.addEventListener("click", nextReview);
prevButton.addEventListener("click", prevReview);

toggleButtonsQuestions.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.textContent === "+") {
      button.textContent = "-";
    } else {
      button.textContent = "+";
    }
    const questionItem = button.closest(".questions-item");
    questionItem.classList.toggle("active");
  });
});

toggleButtonsAdvantages.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.textContent === "+") {
      button.textContent = "-";
    } else {
      button.textContent = "+";
    }
    const advantageItem = button.closest(".adv-item");
    advantageItem.classList.toggle("active");
  });
});

// Advantages slider

const advantagesSection = document.querySelector(".advantages");
const advantagesList = document.querySelector(".mobile.adv-list");
const advantagesSlides = document.querySelectorAll(
  ".mobile.adv-list .adv-item"
);
const dotsContainer = document.querySelector(".advantages .slider-dots");

let advCurrentIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

let clicksCount = 9;
let advGap = 10;

const slideWidth = advantagesSlides[0].offsetWidth;

advantagesSlides.forEach((slide, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  setActiveDot(advCurrentIndex);
  dot.addEventListener("click", () => {
    advCurrentIndex = index;
    setActiveDot(advCurrentIndex);
    showSlide(advCurrentIndex);
  });
  dotsContainer.appendChild(dot);
});

function setActiveDot(index) {
  const dots = document.querySelectorAll(".advantages .dot");
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function showSlide(index) {
  advantagesList.style.transition = "transform 0.4s ease-in-out";
  advantagesList.style.transform = `translateX(-${
    index * slideWidth + advGap * index
  }px)`;
}

function advPrevSlide() {
  if (advCurrentIndex > 0) {
    advCurrentIndex--;
    setActiveDot(advCurrentIndex);
    showSlide(advCurrentIndex);
  }
}

function advNextSlide() {
  if (advCurrentIndex < clicksCount) {
    advCurrentIndex++;
    setActiveDot(advCurrentIndex);
    showSlide(advCurrentIndex);
  }
}

advantagesList.addEventListener("transitionend", () => {
  advantagesSlides.forEach((slide) => {
    slide.style.transition = "";
  });
});

advantagesList.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

advantagesList.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].clientX;
  if (touchEndX < touchStartX) {
    advNextSlide();
  } else if (touchEndX > touchStartX) {
    advPrevSlide();
  }
});

// Audience slider

const audienceSection = document.querySelector(".audience");
const audienceList = document.querySelector(".audience-list");
const audienceSlides = document.querySelectorAll(
  ".audience-list .audience-item"
);
const audienceDotsContainer = document.querySelector(".audience .slider-dots");

let audienceCurrentIndex = 0;
let audienceTouchStartX = 0;
let audienceTouchEndX = 0;

let audienceClicksCount = 4;
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
