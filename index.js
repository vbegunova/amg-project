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
