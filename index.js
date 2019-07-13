// mobileMenu();

let hamburger = document.querySelector('#hamburger');
let mobileMenu = document.querySelector('ul');
let menuLinks = document.querySelectorAll('.menuLink');

console.log(menuLinks)

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    hamburger.classList.toggle('fixed');
    mobileMenu.classList.toggle('mobile-menu');
})


for (let i = 0; i < menuLinks.length; ++i) {
    menuLinks[i].addEventListener('click', () => {
        hamburger.classList.remove('open');
        hamburger.classList.remove('fixed');
        mobileMenu.classList.remove('mobile-menu');
});
  };

  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
