import { changeTab } from '../utils/change-tab';

export function changeTabPrice(event) {
  event.preventDefault();
  event.target.blur();

  changeTab(event, {
    tabSelector: '.price__tab-link',
    contentSelector: '.price__tab-content',
    activeTabClass: 'price__tab-link--active',
    activeContentClass: 'price__tab-content--active',
    inactiveContentClass: 'price__tab-content--inactive',
  });
}
