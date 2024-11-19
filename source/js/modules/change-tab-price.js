import { changeTab } from '../utils/change-tab';

export function changeTabPrice(event) {
  event.preventDefault(); // Убираем стандартное поведение
  event.target.blur(); // Сбрасываем фокус с кнопки

  changeTab(event, {
    tabSelector: '.price__tab-link',
    contentSelector: '.price__tab-content',
    activeTabClass: 'price__tab-link--active',
    activeContentClass: 'price__tab-content--active',
    inactiveContentClass: 'price__tab-content--inactive',
  });
}