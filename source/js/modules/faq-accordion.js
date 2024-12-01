export function setupFaqToggle(selector) {
  document.querySelectorAll(selector).forEach((header) => {
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
}
