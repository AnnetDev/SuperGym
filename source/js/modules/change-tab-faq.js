import { changeTab } from '../utils/change-tab';

export function changeTabFaq(event) {
  event.preventDefault();
  event.target.blur();
  changeTab(event, {
    tabSelector: '.faq__tab-button',
    contentSelector: '.faq__tab',
    activeTabClass: 'faq__tab-button--active',
    activeContentClass: 'faq__tab--active',
    inactiveContentClass: 'faq__tab--inactive',
  });
}
