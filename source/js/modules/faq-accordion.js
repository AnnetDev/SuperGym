// export function setupFaqToggle(selector) {
//   document.querySelectorAll(selector).forEach((header) => {
//     header.addEventListener('click', () => {
//       const isExpanded = header.getAttribute('aria-expanded') === 'true';

//       header.setAttribute('aria-expanded', !isExpanded);
//       const content = header.nextElementSibling;
//       if (content) {
//         content.style.display = isExpanded ? 'none' : 'block';
//       }

//       const button = header.querySelector('.faq__button');
//       if (button) {
//         button.setAttribute('aria-expanded', !isExpanded);
//       }
//     });
//   });
// }
export function setupFaqToggle(selector) {
  document.querySelectorAll(selector).forEach((header) => {
    // Обработка клика по всему faq__header
    header.addEventListener('click', (event) => {
      const button = header.querySelector('.faq__button');
      const isButtonClick = event.target === button || button.contains(event.target);

      // Если клик произошёл на faq__header (включая кнопку)
      toggleAccordion(header, isButtonClick);
    });

    // Поддержка клавиш Enter и Space для faq__header
    header.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleAccordion(header, true); // Симулируем клик по кнопке
      }
    });
  });
}

// Функция для переключения состояния аккордеона
function toggleAccordion(header, isButtonClick) {
  const button = header.querySelector('.faq__button');
  const content = header.nextElementSibling; // Находим <p>, который идёт сразу после header
  const isExpanded = button.getAttribute('aria-expanded') === 'true';

  // Переключаем aria-expanded у кнопки
  button.setAttribute('aria-expanded', !isExpanded);

  // Управляем стилями для раскрытия/скрытия контента
  if (content) {
    if (!isExpanded) {
      content.style.maxHeight = `${content.scrollHeight}px`;
    } else {
      content.style.maxHeight = 0;
    }
  }

  // Устанавливаем атрибут aria-expanded для всего faq__header, если это не клик по кнопке
  if (!isButtonClick) {
    header.setAttribute('aria-expanded', !isExpanded);
  }
}
