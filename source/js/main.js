import { initializeJuriSwiper } from './modules/juri-swiper';
import { initializeReviewsSwiper } from './modules/reviews-swiper';
import { loadVideo } from './modules/video';
import { changeTabPrice } from './modules/change-tab-price';
import { changeTabFaq } from './modules/change-tab-faq';
import { formValidator } from './modules/form-validate';
import { setupFaqToggle } from './modules/faq-accordion.js';

document.querySelectorAll('.price__tab-link').forEach((tab) => {
  tab.addEventListener('click', changeTabPrice);
});

document.querySelectorAll('.faq__tab-button').forEach((tab) => {
  tab.addEventListener('click', changeTabFaq);
});

setupFaqToggle('.faq__header');

document.addEventListener('DOMContentLoaded', () => {
  try {
    formValidator();
  } catch (error) {
    const errorElement = document.createElement('div');
    errorElement.textContent = `Error: ${error.message}`;
    errorElement.style.color = '#ff121f';
    document.body.appendChild(errorElement);
  }
});

loadVideo();

initializeJuriSwiper();
initializeReviewsSwiper();
