const heroImgWrapper = document.querySelector('.hero__image');
const heroIntroWrapper = document.querySelector('.hero__intro');

window.addEventListener('load', () => {
  loadHeroAnimations();
});

function loadHeroAnimations() {
  heroImgWrapper.classList.add('hero__image--loaded');
  heroIntroWrapper.classList.add('hero__intro--loaded'); 
}