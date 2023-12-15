const serviceLink = document.querySelector('.services-menu');
const arrowIcon = document.querySelector('.services-arrow-down');
const servicesMenu = document.querySelector('.header-services-list');

function toggleMenu() {
    servicesMenu.classList.toggle('is-open');
    if (servicesMenu.classList.contains('is-open')) {
        arrowIcon.style.transform = 'rotate(180deg)';
    } else {
        arrowIcon.style.transform = 'rotate(0deg)';
    }
};

serviceLink.addEventListener('click', toggleMenu);

const mobileServiceItem= document.querySelector('.mobile-menu-item.service');
const mobileServiceLink = document.querySelector('.mobile-menu-link.service');
const mobileServiceList = document.querySelector('.mobile-services-list');
const mobileArrowIcon = document.querySelector('.mobile-menu-item .services-arrow-down');
const mobileServicesMenu = document.querySelector('.mobile-services-list');

function toggleMobileServices() {
    mobileServiceItem.classList.toggle('is-open');
    mobileServiceList.classList.toggle('is-open');
    if (mobileServiceList.classList.contains('is-open')) {
        mobileArrowIcon.style.transform = 'rotate(180deg)';
    } else {
        mobileArrowIcon.style.transform = 'rotate(0deg)';
    }
};

mobileServiceLink.addEventListener('click', toggleMobileServices);