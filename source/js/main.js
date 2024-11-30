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

// document.querySelectorAll('.faq__button').forEach((button) => {
//   button.addEventListener('click', () => {
//     const expanded = button.getAttribute('aria-expanded') === 'true';
//     button.setAttribute('aria-expanded', !expanded);
//   });
// });

document.querySelectorAll('.faq__header').forEach((header) => {
  header.addEventListener('click', () => {
    const isExpanded = header.getAttribute('aria-expanded') === 'true';

    // Переключить текущее состояние
    header.setAttribute('aria-expanded', !isExpanded);
    const content = header.nextElementSibling;
    if (content) {
      content.style.display = isExpanded ? 'none' : 'block';
    }

    // Синхронизация состояния кнопки внутри заголовка
    const button = header.querySelector('.faq__button');
    if (button) {
      button.setAttribute('aria-expanded', !isExpanded);
    }
  });
});


// document.querySelectorAll('.faq__header').forEach((header) => {
//   header.addEventListener('click', () => {
//     const expanded = header.getAttribute('aria-expanded') === 'true';
//     header.setAttribute('aria-expanded', !expanded);

//     // Поиск следующего элемента (параграфа)
//     const content = header.nextElementSibling;
//     if (content) {
//       content.style.display = expanded ? 'none' : 'block'; // Скрываем/показываем параграф
//     }
//   });
// });


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
