import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';

export function initializeSwiper(containerSelector, customOptions = {}) {
  const defaultOptions = {
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      disabledClass: '.swiper-button-disabled',
    },
    grabCursor: true,
    normalizeSliderIndex: true,
  };

  // Объединяем общие настройки с уникальными
  const swiperOptions = Object.assign({}, defaultOptions, customOptions);

  const swiper = new Swiper(containerSelector, swiperOptions);

  if (containerSelector.includes('.juri__swiper') && swiper.params.loop) { // не работает
    swiper.on('slideChange', () => {
      const prevButton = document.querySelector(swiper.params.navigation.prevEl);
      const nextButton = document.querySelector(swiper.params.navigation.nextEl);

      if (prevButton) {
        prevButton.classList.remove('swiper-button-disabled');
        prevButton.removeAttribute('disabled');
      }
      if (nextButton) {
        nextButton.classList.remove('swiper-button-disabled');
        nextButton.removeAttribute('disabled');
      }
    });
  }


  return swiper;
}
