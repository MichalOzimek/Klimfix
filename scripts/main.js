// CHOWANIE SIĘ NAV PODCZAS SCROLLOWANIA, dodaje klasę '.hidden' do  'nav'

var prev = 0;
var $window = $(window);
var nav2 = $('.navigation');
$window.on('scroll', function () {
    var scrollTop = $window.scrollTop();
    nav2.toggleClass('hidden', scrollTop > prev);
    prev = scrollTop;
})


const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
const body = document.querySelector('body');


menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        nav.classList.add('navOpen');
        body.classList.add('scrollBlock');
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        nav.classList.remove('navOpen');
        navigationTrasa.classList.remove('navOpen');
        navigationTelefon.classList.remove('navOpen');
        body.classList.remove('scrollBlock');
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

let menuLi = document.querySelectorAll('.menu-btn-li');
for (let i = 0; i < menuLi.length; i++) {
    menuLi[i].addEventListener('click', () => {
        if (menuOpen == true) {
            nav.classList.remove('navOpen');
            body.classList.remove('scrollBlock');
            menuBtn.classList.remove('open');
            menuOpen = false;
        }
    });
};



// BUTTONY WYZNACZ TRASĘ / ZADZWOŃ TERAZ

// wyznacz trasę home
let navigationTrasa = document.querySelector('.navigation__trasa');
let navigationTelefon = document.querySelector('.navigation__telefon');
let navHid = document.querySelector('.navHid');

let trasaHome = document.querySelector('.trasaHome');
trasaHome.addEventListener('click', () => {
    if (!menuOpen) {
        navigationTrasa.classList.add('navOpen');
        body.classList.add('scrollBlock');
        menuBtn.classList.add('open');
        navHid.classList.remove('hidden');
        menuOpen = true;
    }
});

let trasaHome2 = document.querySelector('.trasaHome2');
trasaHome2.addEventListener('click', () => {
    if (!menuOpen) {
        navigationTrasa.classList.add('navOpen');
        body.classList.add('scrollBlock');
        menuBtn.classList.add('open');
        navHid.classList.remove('hidden');
        menuOpen = true;
    }
});

// zadzwoń teraz home

let telefonHome = document.querySelector('.telefonHome');

telefonHome.addEventListener('click', () => {
    if (!menuOpen) {
        navigationTelefon.classList.add('navOpen');
        body.classList.add('scrollBlock');
        menuBtn.classList.add('open');
        navHid.classList.remove('hidden');
        menuOpen = true;
    }
});

// wyznacz trasę nav
let trasaNav = document.querySelector('.trasaNav');
trasaNav.addEventListener('click', () => {
    if (menuOpen == true) {
        navigationTrasa.classList.add('navOpen');
        menuOpen = true;
    }
});

// zadzwoń teraz nav

let telefonNav = document.querySelector('.telefonNav');
let telefonNav2 = document.querySelector('.telefonNav2');
telefonNav.addEventListener('click', () => {
    if (menuOpen == true) {
        navigationTelefon.classList.add('navOpen');
        menuOpen = true;
    }
});


telefonNav2.addEventListener('click', () => {
    if (!menuOpen) {
        navigationTelefon.classList.add('navOpen');
        body.classList.add('scrollBlock');
        menuBtn.classList.add('open');
        navHid.classList.remove('hidden');
        menuOpen = true;
    }
});