const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const mobileList = $('#menu__list');
const pcList = $('#pc__list');
const menuBtn = $('.top-bar__more');
const mobileMenu = $('#menu__mobile');
const mobileMenuCloseBtn = $('.menu__close-btn');
const menuOverlay = $('.menu__overlay');
const menuAct = $('.menu-act');
const topbarAct = $('.top-act');

mobileList.innerHTML = pcList.innerHTML;

menuBtn.addEventListener('click', function() {
    mobileMenu.classList.add('active');
});

mobileMenuCloseBtn.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
});

menuAct.innerHTML = topbarAct.innerHTML;

