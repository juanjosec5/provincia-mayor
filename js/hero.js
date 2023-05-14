import pageData from '../data/data.js';

const data = pageData.body.hero;

const heroImgWrapper = document.querySelector('.hero__image');
const heroIntroWrapper = document.querySelector('.hero__intro');

const heroTitle = heroIntroWrapper.querySelector('h1');
const heroCopy = heroIntroWrapper.querySelector('p');
const heroCta = heroIntroWrapper.querySelector('a');

window.addEventListener('load', () => {
  loadHeroAnimations();
  loadContent();
});

function loadHeroAnimations() {
  heroImgWrapper.classList.add('hero__image--loaded');
  heroIntroWrapper.classList.add('hero__intro--loaded'); 
}

function loadContent() {
  heroTitle.innerText = data.title;
  heroCopy.innerText = data.copy;
  heroCta.innerText = data.cta;
}