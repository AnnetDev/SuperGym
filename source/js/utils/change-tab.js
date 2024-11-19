export function changeTab(event, options) {
  const {
    tabSelector, // Селектор кнопок табов
    contentSelector, // Селектор контента табов
    activeTabClass, // Класс для активного таба
    activeContentClass, // Класс для активного контента
    inactiveContentClass // Класс для неактивного контента
  } = options;

  const tabs = document.querySelectorAll(tabSelector);
  const contents = document.querySelectorAll(contentSelector);
  const currentTab = event.target;
  const currentContentId = currentTab.getAttribute('data-tab');

  // Удаляем активные классы у всех табов
  tabs.forEach((tab) => tab.classList.remove(activeTabClass));

  // Скрываем весь контент
  contents.forEach((content) => {
    content.classList.remove(activeContentClass);
    if (inactiveContentClass) {
      content.classList.add(inactiveContentClass);
    }
  });

  // Добавляем активные классы
  currentTab.classList.add(activeTabClass);

  const activeContent = document.querySelector(`${contentSelector}[data-tab="${currentContentId}"]`);
  if (activeContent) {
    activeContent.classList.remove(inactiveContentClass);
    activeContent.classList.add(activeContentClass);
  }
}
