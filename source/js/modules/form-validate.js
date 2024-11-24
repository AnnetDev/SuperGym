export function formValidator() {
  const form = document.querySelector('form');
  if (!form) {
    throw new Error('Форма не найдена на странице.');
  }
  const nameInput = document.querySelector('input[name="input-name"]');
  const phoneInput = document.querySelector('input[name="input-phone"]');

  form.addEventListener('submit', (event) => {
    let isValid = true;

    document.querySelectorAll('.form__error-message').forEach(msg => msg.remove());
    nameInput.classList.remove('form__input--error');
    phoneInput.classList.remove('form__input--error');

    if (!/^[a-zA-Zа-яА-ЯёЁ\s]+$/.test(nameInput.value)) {
      showError(nameInput, 'Имя может содержать только буквы');
      isValid = false;
    }

    if (!/^\d+$/.test(phoneInput.value)) {
      showError(phoneInput, 'Телефон может содержать только цифры');
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault();
    }

  }
  );

  function showError(input, message) {
    const label = input.parentElement;
    const error = document.createElement('div');
    error.classList.add('form__error-message');
    error.textContent = message;

    const existingError = label.querySelector('.form__error-message');
    if (existingError) {
      existingError.remove();
    }

    label.appendChild(error);

    input.classList.add('form__input--error');
  }

}
