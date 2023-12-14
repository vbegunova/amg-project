const reviewsContainer = document.querySelector(".reviews-container");
const reviews = reviewsContainer.querySelectorAll(".review-box");

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
  ".desktop.reviews-button-ctrl .button-ctrl:last-of-type"
);
const prevButton = document.querySelector(
  ".desktop.reviews-button-ctrl .button-ctrl:first-of-type"
);
const mobileNextButton = document.querySelector(
  ".mobile.reviews-button-ctrl .button-ctrl:last-of-type"
);
const mobilePrevButton = document.querySelector(
  ".mobile.reviews-button-ctrl .button-ctrl:first-of-type"
);

nextButton.addEventListener("click", nextReview);
prevButton.addEventListener("click", prevReview);
mobileNextButton.addEventListener("click", nextReview);
mobilePrevButton.addEventListener("click", prevReview);
