import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';

export function initializeJuriSwiper() {
  new Swiper('.juri__swiper', {
    modules: [Navigation, Pagination],
    loop: true,
    grabCursor: true,
    normalizeSliderIndex: true,
    navigation: {
      nextEl: '.juri__button-next',
      prevEl: '.juri__button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
}
