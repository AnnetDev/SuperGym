export function changeTab(event, options) {
  const {
    tabSelector,
    contentSelector,
    activeTabClass,
    activeContentClass,
    inactiveContentClass
  } = options;

  const tabs = document.querySelectorAll(tabSelector);
  const contents = document.querySelectorAll(contentSelector);
  const currentTab = event.target;
  const currentContentId = currentTab.getAttribute('data-tab');

  tabs.forEach((tab) => tab.classList.remove(activeTabClass));

  contents.forEach((content) => {
    content.classList.remove(activeContentClass);
    if (inactiveContentClass) {
      content.classList.add(inactiveContentClass);
    }
  });

  currentTab.classList.add(activeTabClass);

  const activeContent = document.querySelector(`${contentSelector}[data-tab="${currentContentId}"]`);
  if (activeContent) {
    activeContent.classList.remove(inactiveContentClass);
    activeContent.classList.add(activeContentClass);
  }
}
