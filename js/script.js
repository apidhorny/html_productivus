const HEADER = document.querySelector('.section-header');
const ACCORDION = document.querySelector('.faq-accordion');
const BTN_BURGER = document.querySelector('.btn-burger');

ACCORDION.addEventListener('click', (event) => {
    if (event.target.closest('.faq-accordion__item')) {
        event.target.closest('.faq-accordion__item').classList.toggle('faq-accordion__item--active');
    }
});

BTN_BURGER.addEventListener('click', () => {
    HEADER.classList.toggle('section-header--active-nav');
});

const resetNavigation = () => {
    HEADER.classList.remove('section-header--active-nav');
};

window.addEventListener('resize', resetNavigation);

// SLIDER SWIPER
new Swiper('.section-hero-image', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
new Swiper('.slider-blog-container', {
    loop: true,

    pagination: {
        el: '.dots',
    },

    navigation: {
        nextEl: '.btn-blog--next',
        prevEl: '.btn-blog--prev',
    },
});
