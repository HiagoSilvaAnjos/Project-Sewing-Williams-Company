const elementContainerNav = document.querySelector('.container-inner-content');
const buttonShowNav = document.querySelector('.menu-button');

buttonShowNav.addEventListener('click', () => {
    elementContainerNav.classList.toggle('show-menu');
})