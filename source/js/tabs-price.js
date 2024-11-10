// export function changeTab() {
//   let tabs = document.querySelectorAll('.price__tab-link');
//   let contents = document.querySelectorAll('.price__tab-content');

//   tabs.forEach(function (tab) {
//     tab.addEventListener('click', function () {
//       let currentTab = tab;
//       let tabId = currentTab.getAttribute('data-tab');
//       let content = document.querySelector(tabId);

//       if (!currentTab.classList.contains('price__tab-link--active')) {
//         tabs.forEach(function(item) {
//           item.classList.remove('price__tab-link--active');
//         });
//         contents.forEach(function(item){
//           item.classList.remove('price__tab-content--active')
//         });

//         currentTab.classList.add('price__tab-link--active');
//         content.classList.add('price__tab-content--active');
//       };
//     });

//   });
//   document.querySelector('.price__tab-link').click();
// }


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


  // tabs.forEach(tab => tab.addEventListener('click', function () {
  //
  //
  //   currentTab.classList.add('price__tab-link--active');
  //   currentContentId.classList.add('price__tab-content--active');
  // }));


// tabs.forEach(tab => tab.addEventListener('click', changeTab));

