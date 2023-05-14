import pageData from '../data/data.js';

const data = pageData.body.services;

const features = document.querySelector('.features');
const featuresContainer = features.querySelector('.wrapper');

data.cards.forEach((el) => {
  const card = document.createElement('article');
  card.classList.add('feature-card');
  const cardText = `<header class="feature-card__title"><img src="${el.icon}" alt=""><h3>${el.title}</h3></header><div class="feature-card__text">${el.copy}</div>`;

  card.innerHTML = cardText;
  featuresContainer.appendChild(card);
});


