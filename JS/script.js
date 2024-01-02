const elementContainerNav = document.querySelector('.container-inner-content');
const buttonShowNav = document.querySelector('.menu-button');
const listelementsContainer = document.querySelector('.list-elements');

let state = 'menu-off';


listelementsContainer.addEventListener('click', (e) => {
    const element = e.target;

    if (element.classList.contains('list-links')) {
        hiddenSectionNav();
    }

})

buttonShowNav.addEventListener('click', () => {

    if (state === 'menu-off') {
        buttonShowNav.innerText = 'close';
        state = 'menu-on'
    } else {
        buttonShowNav.innerText = 'menu';
        state = 'menu-off'
    }

    elementContainerNav.classList.toggle('show-menu');
})


function hiddenSectionNav() {
    elementContainerNav.classList.remove('show-menu');
    buttonShowNav.innerText = 'menu';
    state = 'menu-off';
}
