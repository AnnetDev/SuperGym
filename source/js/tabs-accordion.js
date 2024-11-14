export function switchTab(event) {
  const tabs = document.querySelectorAll('.faq__tab-button');
  const contents = document.querySelectorAll('.faq__tab');
  const currentTab = event.target;
  const currentContentId = currentTab.getAttribute('data-tab');

  tabs.forEach(tab => tab.classList.remove('faq__tab-button--active'));

  contents.forEach(content => {
    content.classList.remove('faq__tab--active');
    content.classList.add('faq__tab--inactive');
  });

  currentTab.classList.add('faq__tab--active');

const activeContent = document.querySelector(`.faq__tab[data-tab="${currentContentId}"]`);
  if (activeContent) {
    activeContent.classList.remove('faq__tab--inactive');
    activeContent.classList.add('faq__tab--active');
  }
}
