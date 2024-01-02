const elementContainerNav = document.querySelector('.container-inner-content');
const buttonShowNav = document.querySelector('.menu-button');

buttonShowNav.addEventListener('click', () => {
    elementContainerNav.classList.toggle('show-menu');
})

function hiddenSectionNav() {
    elementContainerNav.classList.remove('show-menu');
}

const initialSectionLink = document.querySelector('#initialSectionLink');
initialSectionLink.addEventListener('click', () => hiddenSectionNav());

const menSectionLink = document.querySelector('#menSectionLink');
menSectionLink.addEventListener('click', () => hiddenSectionNav());

const feSectionLink = document.querySelector('#feSectionLink');
feSectionLink.addEventListener('click', () => hiddenSectionNav());

const aboutSectionLink = document.querySelector('#aboutSectionLink');
aboutSectionLink.addEventListener('click', () => hiddenSectionNav());

const tecSectionLink = document.querySelector('#tecSectionLink');
tecSectionLink.addEventListener('click', () => hiddenSectionNav());