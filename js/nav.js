import pageData from '../data/data.js';

const data = pageData.body.nav;
const toggleNav = document.querySelector('.toggleNav');
const burgerSpans = toggleNav.querySelectorAll('span')
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');
const navList = document.querySelector('.nav__list');

data.links.forEach((link) => {
  const listItem = document.createElement('li');
  const linkContent = `<a href="${link.href}" class="nav__link">${link.text}</a>`;

  listItem.innerHTML = linkContent;

  navList.appendChild(listItem);
});




// Set the initial tabindex state for the links
navLinks.forEach((el) => el.setAttribute('tabindex', '-1'));

// Add event listeners to handle interactions with the navigation
window.addEventListener("resize", handleResize);
toggleNav.addEventListener('click', toggleAriaExpanded);
window.addEventListener('load', () => {
  loadClasses();
  loadTransitions();
});


/**
 * Remove the preload class from the document body after loading.
 */
function loadTransitions() {
  document.body.classList.remove('preload');
}

function loadClasses() {
  if (window.innerWidth > 600) {
    window.document.body.classList.add('desktop-nav');
  } else {
    window.document.body.removeAttribute('class');
  }
}

/**
 * Toggle the aria-expanded attribute on the navigation container and toggle the menu open or closed.
 */
function toggleAriaExpanded() {
  const expanded = nav.getAttribute('aria-expanded') === 'true';
  
  burgerSpans.forEach((el) => el.classList.toggle('open'))

  nav.setAttribute('aria-expanded', !expanded);
  toggleTabIndex(expanded);
  toggleMenu();
}

/**
 * Toggle the tabindex state for the navigation links based on the expanded state of the navigation.
 * @param {Boolean} showingMenu - The expanded state of the navigation.
 */
function toggleTabIndex(showingMenu) {
  const tabIndex = !showingMenu ? '0' : '-1';

  navLinks.forEach((el) => el.setAttribute('tabindex', tabIndex));
}

/**
 * Toggle the open/closed classes on the navigation container.
 */
function toggleMenu() {
  nav.classList.toggle('nav--open');
  nav.classList.toggle('nav--closed');
}

/**
 * Handle the resizing of the window and toggle the navigation state based on the width of the viewport.
 */
function handleResize() {
  if (window.innerWidth > 600) {
    nav.classList.remove('nav--closed');
    nav.classList.remove('nav--open');
    window.document.body.classList.add('desktop-nav');
    burgerSpans.forEach((el) => el.classList.remove('open'))
  } else {
    nav.classList.add('nav--closed');
    window.document.body.removeAttribute('class')
  }
}
