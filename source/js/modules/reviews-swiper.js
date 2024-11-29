import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';

export function initializeReviewsSwiper() {
  new Swiper('.reviews__swiper', {
    modules: [Navigation, Pagination],
    loop: false,
    grabCursor: true,
    normalizeSliderIndex: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.reviews__button.swiper-button-next',
      prevEl: '.reviews__button.swiper-button-prev',
    },
  });
}
