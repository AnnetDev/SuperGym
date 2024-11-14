// https://swiperjs.com/get-started#installation
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/scss";

import { loadVideo } from "./video.js";
import { changeTab } from "./tabs-price";
import { switchTab } from "./tabs-accordion"

const juriSwiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination], // подключаем модули
  loop: true,
  direction: "horizontal",

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

  navigation: {
    nextEl: ".swiper-button-next",  // подключаем кнопки навигации
    prevEl: ".swiper-button-prev",
  },
});

document.querySelectorAll(".price__tab-link").forEach(tab => {
  tab.addEventListener("click", changeTab);
});

loadVideo();
changeTab();
switchTab();
