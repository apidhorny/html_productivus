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
    console.log('a');
};

window.addEventListener('resize', resetNav);

// TODO: make consts
// TODO: навeсти порядок в коді js
