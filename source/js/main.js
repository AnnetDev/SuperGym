// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/scss";

import { initializeSwiper } from "./utils/init-swiper";
import { loadVideo } from "./modules/video";
import { changeTabPrice } from './modules/change-tab-price';
import { changeTabFaq } from './modules/change-tab-faq';

document.querySelectorAll('.price__tab-link').forEach(tab => {
  tab.addEventListener('click', changeTabPrice);
});

document.querySelectorAll('.faq__tab-button').forEach(tab => {
  tab.addEventListener('click', changeTabFaq);
});

document.querySelectorAll('.faq__button').forEach(button => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !expanded);
  });
});

loadVideo();

initializeSwiper('.juri__swiper', {
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
    }
  },
});

initializeSwiper('.reviews__swiper', {
  loop: false,
  slidesPerView: 1,
});
