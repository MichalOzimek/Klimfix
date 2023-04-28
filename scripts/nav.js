const menuBtn2 = document.querySelector('.menu-btn');
let menuOpen2 = false;
const body = document.querySelector('body')
menuBtn2.addEventListener('click', () => {
    if (!menuOpen2) {
        nav.classList.add('navOpen');
        body.classList.add('scrollBlock');
        menuOpen2 = true;
    } else {
        nav.classList.remove('navOpen');
        body.classList.remove('scrollBlock');
        menuOpen2 = false;
    }
});

let menuBtn3 = document.querySelectorAll('.menu-btn-li');
let menuOpen3 = false;
for (let i = 0; i < menuBtn3.length; i++) {
    menuBtn3[i].addEventListener('click', () => {
        if (!menuOpen3) {
            nav.classList.remove('navOpen');
            body.classList.remove('scrollBlock');
            menuBtn.classList.remove('open');
            menuOpen3 = false;
        }
    });
}

const navigationTrasa = document.querySelector('.navigation__trasa');
let trasaBtn = document.querySelector('.trasa');
trasaBtn.addEventListener('click', () => {
    if (!menuOpen2) {
        navigationTrasa.classList.add('navOpen');
        body.classList.add('scrollBlock');
        menuBtn.classList.add('open');
        menuOpen2 = false;
    }
});