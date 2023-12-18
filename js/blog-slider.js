const blogSection = document.querySelector(".blog-section");
const blogList = document.querySelector(".blog-section .list");
const blogSlides = document.querySelectorAll(".blog-section .item");
const blogDotsContainer = document.querySelector(
  ".blog-section .slider-dots"
);

let blogCurrentIndex = 0;
let blogTouchStartX = 0;
let blogTouchEndX = 0;

let blogClicksCount = 2;
let blogGap = 10;

const blogSlideWidth = blogSlides[0].offsetWidth;

blogSlides.forEach((slide, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  blogSetActiveDot(blogCurrentIndex);
  dot.addEventListener("click", () => {
    blogCurrentIndex = index;
    blogSetActiveDot(blogCurrentIndex);
    blogShowSlide(blogCurrentIndex);
  });
  blogDotsContainer.appendChild(dot);
});

function blogSetActiveDot(index) {
  const dots = document.querySelectorAll(".blog-section .dot");
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function blogShowSlide(index) {
  blogList.style.transition = "transform 0.4s ease-in-out";
  blogList.style.transform = `translateX(-${
    index * blogSlideWidth + blogGap * index
  }px)`;
}

function blogPrevSlide() {
  if (blogCurrentIndex > 0) {
    blogCurrentIndex--;
    blogSetActiveDot(blogCurrentIndex);
    blogShowSlide(blogCurrentIndex);
  }
}

function blogNextSlide() {
  if (blogCurrentIndex < blogClicksCount) {
    blogCurrentIndex++;
    blogSetActiveDot(blogCurrentIndex);
    blogShowSlide(blogCurrentIndex);
  }
}

blogList.addEventListener("transitionend", () => {
  blogSlides.forEach((slide) => {
    slide.style.transition = "";
  });
});

blogList.addEventListener("touchstart", (e) => {
  blogTouchStartX = e.touches[0].clientX;
});

blogList.addEventListener("touchend", (e) => {
  blogTouchEndX = e.changedTouches[0].clientX;
  if (blogTouchEndX < blogTouchStartX) {
    blogNextSlide();
  } else if (blogTouchEndX > blogTouchStartX) {
    blogPrevSlide();
  }
});
