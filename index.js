const serviceLink = document.querySelector(".services-menu");
const arrowIcon = document.querySelector(".services-arrow-down");
const servicesMenu = document.querySelector(".header-services-list");

function toggleMenu() {
  servicesMenu.classList.toggle("is-open");
  if (servicesMenu.classList.contains("is-open")) {
    arrowIcon.style.transform = "rotate(180deg)";
  } else {
    arrowIcon.style.transform = "rotate(0deg)";
  }
}

serviceLink.addEventListener("click", toggleMenu);

const mobileServiceItem = document.querySelector(".mobile-menu-item.service");
const mobileServiceLink = document.querySelector(".mobile-menu-link.service");
const mobileServiceList = document.querySelector(".mobile-services-list");
const mobileArrowIcon = document.querySelector(
  ".mobile-menu-item .services-arrow-down"
);
const mobileServicesMenu = document.querySelector(".mobile-services-list");

function toggleMobileServices() {
  mobileServiceItem.classList.toggle("is-open");
  mobileServiceList.classList.toggle("is-open");
  if (mobileServiceList.classList.contains("is-open")) {
    mobileArrowIcon.style.transform = "rotate(180deg)";
  } else {
    mobileArrowIcon.style.transform = "rotate(0deg)";
  }
}

mobileServiceLink.addEventListener("click", toggleMobileServices);

const openBtn = document.querySelectorAll(".more-info");
const closeBtn = document.querySelector(".close-modal-btn");
const modal = document.querySelector(".backdrop");

const heroOpenBtn = document.querySelectorAll(".hero .button");
const heroCloseBtn = document.querySelector(".hero-modal .close-modal-btn");
const heroModal = document.querySelector(".hero-modal.backdrop");

function toggleModal(modal) {
  modal.classList.toggle("is-hidden");
  document.body.style.overflow = modal.classList.contains("is-hidden")
    ? "auto"
    : "hidden";
}

openBtn.forEach((button) => button.addEventListener("click", () => {
  toggleModal(modal);
}));
closeBtn.addEventListener("click", () => {
  toggleModal(modal);
});

heroOpenBtn.forEach((button) => button.addEventListener("click", () => {
  toggleModal(heroModal);
}));
heroCloseBtn.addEventListener("click", () => {
  toggleModal(heroModal);
});

jQuery(document).ready(function () {
  jQuery(".form-button").click(function () {
    var form = jQuery(this).closest("form");
    var actUrl = form.attr("action");

    jQuery.ajax({
      url: actUrl,
      type: "post",
      dataType: "html",
      data: form.serialize(),
      success: function (data) {},
      error: function () {},
    });
  });
});

// document.querySelector('.form-button').addEventListener('click', function() {
//   var form = document.querySelector('form');
//   var formData = new FormData(form);

//   // // Добавьте дополнительные данные, если нужно
//   // formData.append('additionalParam', 'someValue');

//   var xhr = new XMLHttpRequest();
//   xhr.open('POST', 'sender.php', true);
//   xhr.onload = function() {
//     if (xhr.status === 200) {
//       console.log('Success');
//       console.log(xhr.responseText);
//     } else {
//       console.error('Error');
//     }
//   };
//   xhr.onerror = function() {
//     console.error('Network error');
//   };

//   // Отправка данных FormData через AJAX
//   xhr.send(formData);
// });