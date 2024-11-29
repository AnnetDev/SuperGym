import { initializeJuriSwiper } from './modules/juri-swiper';
import { initializeReviewsSwiper } from './modules/reviews-swiper';
import { loadVideo } from './modules/video';
import { changeTabPrice } from './modules/change-tab-price';
import { changeTabFaq } from './modules/change-tab-faq';
import { formValidator } from './modules/form-validate';

document.querySelectorAll('.price__tab-link').forEach((tab) => {
  tab.addEventListener('click', changeTabPrice);
});

document.querySelectorAll('.faq__tab-button').forEach((tab) => {
  tab.addEventListener('click', changeTabFaq);
});

document.querySelectorAll('.faq__button').forEach((button) => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !expanded);

    // Найти соседний <p>, используя closest и nextElementSibling
    const parent = button.closest('li');
    const content = parent.querySelector('p');

    // if (!expanded) {
    //   // content.style.maxHeight = `${content.scrollHeight}px`; // Разворачиваем
    // } else {
    //   content.style.maxHeight = null; // Сворачиваем
    // }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  try {
    formValidator();
  } catch (error) {
    console.error(error.message);
  }
});


loadVideo();

initializeJuriSwiper();
initializeReviewsSwiper();
