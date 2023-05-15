import pageData from '../data/data.js';

const data = pageData.body.features;

const features = document.querySelector('.features');
const featuresTitle = document.querySelector('h2');
const featuresContainer = features.querySelector('.wrapper');

featuresTitle.innerText = data.title;
data.cards.forEach((el) => {
  const card = document.createElement('article');
  card.classList.add('feature-card');
  const cardText = `<header class="feature-card__title"><i class="fa-solid fa-xl ${el.icon}"></i><h3>${el.title}</h3></header><div class="feature-card__text">${el.copy}</div>`;

  card.innerHTML = cardText;
  featuresContainer.appendChild(card);
});


