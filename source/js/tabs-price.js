export function changeTab(event) {
  const tabs = document.querySelectorAll('.price__tab-link');
  const contents = document.querySelectorAll('.price__tab-content');
  const currentTab = event.target;
  const currentContentId = currentTab.getAttribute('data-tab');

  tabs.forEach(tab => tab.classList.remove('price__tab-link--active'));

  contents.forEach(content => {
    content.classList.remove('price__tab-content--active');
    content.classList.add('price__tab-content--inactive');
  });

  currentTab.classList.add('price__tab-link--active');

const activeContent = document.querySelector(`.price__tab-content[data-tab="${currentContentId}"]`);
  if (activeContent) {
    activeContent.classList.remove('price__tab-content--inactive');
    activeContent.classList.add('price__tab-content--active');
  }
}
