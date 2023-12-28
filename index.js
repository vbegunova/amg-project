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

function toggleModal() {
    modal.classList.toggle("is-hidden");
    document.body.style.overflow = modal.classList.contains("is-hidden")
    ? "auto"
    : "hidden";
}

openBtn.forEach((button) => button.addEventListener("click", toggleModal));
closeBtn.addEventListener("click", toggleModal);

jQuery(document).ready(function () {
     
  // $(".phone").mask("+380 (99) 999-99-99"); 
 

 jQuery('.form-button').click( function() {
   var form = jQuery(this).closest('form');
   

    //  form.css('opacity','.5');
     var actUrl = form.attr('action');
    console.log(form.serialize());
     jQuery.ajax({
       url: actUrl,
       type: 'post',
       dataType: 'html',
       data: form.serialize(),
       success: function(data) {
         form.html(data);
        //  form.css('opacity','1');
                 //form.find('.status').html('форма отправлена успешно');
                 //$('#myModal').modal('show') // для бутстрапа
       },
       error:	 function() {
            // form.find('.status').html('серверная ошибка');
       }
     });
 });


});

// $(document).ready(function(){
//   $('.form-button').click(function(e){
//     e.preventDefault(); // Предотвращаем стандартное поведение отправки формы

//     var formData = $(this).serialize(); // Получаем данные формы

//     $.ajax({
//       type: 'POST',
//       url: 'sender.php', // Путь к обработчику формы на сервере
//       data: formData,
//       success: function(response){
//         // Действия при успешной отправке формы
//         console.log('Форма успешно отправлена');
//       },
//       error: function(error){
//         // Действия при ошибке отправки формы
//         console.error('Ошибка отправки формы', error);
//       }
//     });
//   });
// });