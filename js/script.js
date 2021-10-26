const HEADER = document.querySelector('.section-header');
const a = 3;

document.querySelector('.faq-accordion').addEventListener('click', (event) => {
    if (event.target.closest('.faq-accordion__item')) {
        event.target.closest('.faq-accordion__item').classList.toggle('faq-accordion__item--active');
    }
});

document.querySelector('.btn-burger').addEventListener('click', (event) => {
    HEADER.classList.toggle('section-header--active-nav');
});

const resetNav = () => {
    HEADER.classList.remove('section-header--active-nav');
};

window.addEventListener('resize', resetNav);

new Swiper('.section-hero-image', {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});
new Swiper('.slider-blog-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.dots',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.btn-blog--next',
        prevEl: '.btn-blog--prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});

// TODO: make consts
// TODO: навeсти порядок в коді js
