export function setupFaqToggle(selector) {
  document.querySelectorAll(selector).forEach((header) => {
    header.addEventListener('click', (event) => {
      const button = header.querySelector('.faq__button');
      const isButtonClick = event.target === button || button.contains(event.target);

      toggleAccordion(header, isButtonClick);
    });

    header.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleAccordion(header, true);
      }
    });
  });
}

function toggleAccordion(header, isButtonClick) {
  const button = header.querySelector('.faq__button');
  const content = header.nextElementSibling;
  const isExpanded = button.getAttribute('aria-expanded') === 'true';

  button.setAttribute('aria-expanded', !isExpanded);

  if (content) {
    if (!isExpanded) {
      content.style.maxHeight = `${content.scrollHeight}px`;
    } else {
      content.style.maxHeight = 0;
    }
  }

  if (!isButtonClick) {
    header.setAttribute('aria-expanded', !isExpanded);
  }
}
