import 'bootstrap/dist/js/bootstrap.bundle.min'
import AOS from 'aos';
import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';

const initStickyHeader = e => {
    const header = document.querySelector('.header');
    const scrollY = window.scrollY;

    header.classList.toggle('sticky', scrollY > 0);
    document.body.classList.toggle('scrolled', scrollY > 0);
}

const hidePreloader = () => {
    const preloaderWrapper = document.querySelector('.preloader-wrapper');

    preloaderWrapper.classList.add('hide');
}

const initSlider = () => {
    const swiper = new Swiper('.swiper', {
        modules: [Navigation, Scrollbar],
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
}

const scrollToSection = () => {
    const navLinks = document.querySelectorAll('.navbar-nav__link');
    const heroLinks = document.querySelectorAll('.hero__button');
    const servicesLink = document.querySelector('.services__button');

    [...navLinks, ...heroLinks, servicesLink].forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const currentLink = e.target;
            const id = currentLink.getAttribute('href').slice(1);

            const targetSection = document.querySelector(`#${id}`);

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

const initToTopButton = () => {
    const backToTopButton = document.querySelector('.back-to-top');

    const scrollContainer = () => {
        return document.documentElement || document.body;
    }

    const goToTop = () => {
        document.body.scrollIntoView({
            behavior: "smooth"
        });
    };

    document.addEventListener('scroll', () => {
        if (scrollContainer().scrollTop > 100) {
            backToTopButton.classList.remove('hidden');
        } else {
            backToTopButton.classList.add('hidden');
        }
    });

    backToTopButton.addEventListener('click', goToTop);
}

const scrollHandler = () => {
    initStickyHeader();
}

const domContentLoadedHandler = () => {
    scrollToSection();
    initSlider();
    initToTopButton();
    window.addEventListener('scroll', scrollHandler);
}

const loadHandler = () => {
    AOS.init({
        duration: 500,
        easing: "ease-in-out",
        once: true,
        mirror: false,
        disable: window.innerWidth < 768
    });

    hidePreloader();
}

window.addEventListener('DOMContentLoaded', domContentLoadedHandler);
window.addEventListener('load', loadHandler);