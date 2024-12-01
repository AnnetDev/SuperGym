export function loadVideo() {
  document.querySelector('.video__button').addEventListener('click', () => {
    const videoContainer = document.querySelector('.video__container');

    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1';
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;

    videoContainer.innerHTML = '';
    videoContainer.appendChild(iframe);
  });
}
