// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';


import { loadVideo } from './video.js';
import { changeTab } from './tabs-price/';

document.querySelectorAll('.price__tab-link').forEach(tab => {
  tab.addEventListener('click', changeTab);
});

loadVideo();

changeTab();
