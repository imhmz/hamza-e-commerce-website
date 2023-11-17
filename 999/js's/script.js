/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');
/*===== Menu Show =====*/
/* Validate if constant exists */
if(navToggle) {
  navToggle.addEventListener('click' , () => {
    navMenu.classList.add('show-menu');
  });
}

/*===== Menu Show =====*/
/* Validate if constant exists */
if(navClose) {
  navClose.addEventListener('click' , () => {
    navMenu.classList.remove('show-menu');
  });
}


/*===== Hide Show =====*/
/* Validate if constant exists */

/*=============== IMAGE GALLERY ===============*/


function imgGallery() {
// Line 236
const mainImg = document.querySelector('.details-img');
const smallImg = document.querySelectorAll('.details-small-img');


  smallImg.forEach((img) => {
    img.addEventListener('click', function () {
      mainImg.src = this.src;
    });
  });
}

imgGallery();

document.addEventListener('DOMContentLoaded', function () {
  var swiperCategories = new Swiper(".categories-container", {
      spaceBetween: 24,
      loop: true,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      breakpoints: {
          350: { slidesPerView: 2, spaceBetween: 24 },
          768: { slidesPerView: 3, spaceBetween: 24 },
          992: { slidesPerView: 4, spaceBetween: 24 },
          1200: { slidesPerView: 5, spaceBetween: 24 },
          1400: { slidesPerView: 4, spaceBetween: 24 },
      },
  });

  var swiperProducts = new Swiper(".new-container", {
      spaceBetween: 24,
      loop: true,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      breakpoints: {
          768: { slidesPerView: 2, spaceBetween: 24 },
          992: { slidesPerView: 3, spaceBetween: 24 },
          1400: { slidesPerView: 4, spaceBetween: 24 },
      },
  });
});

/*=============== PRODUCTS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    // Remove 'active-tab' class from all tab contents
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active-tab');
    });

    // Add 'active-tab' class to the clicked tab content
    target.classList.add('active-tab');

    // Remove 'active-tab' class from all tabs
    tabs.forEach((tab) => {
      tab.classList.remove('active-tab');
    });

    // Add 'active-tab' class to the clicked tab
    tab.classList.add('active-tab');
  });
});

tabContents.forEach((tabContent) => {
  tabContent.addEventListener('click', () => {
    // Add your event handling logic for tab content here
  });
});
