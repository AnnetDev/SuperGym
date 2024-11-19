import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';

export function initializeSwiper(containerSelector, customOptions = {}) {
  const defaultOptions = {
    modules: [Navigation, Pagination], // подключаем модули
    direction: 'horizontal',
    navigation: {
      nextEl: '.swiper-button-next', // подключаем кнопки навигации
      prevEl: '.swiper-button-prev',
    },
  };

  // Объединяем общие настройки с уникальными
  const swiperOptions = Object.assign({}, defaultOptions, customOptions);

  // Инициализируем Swiper
  new Swiper(containerSelector, swiperOptions);
}
