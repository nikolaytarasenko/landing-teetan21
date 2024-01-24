// import $ from 'jquery';
// import AOS from 'aos';
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

// const initAnimatedNumbers = () => {
//     const statisticsSection = document.querySelector('.statistics__list');
//
//     const statisticsObserver = new IntersectionObserver(
//         (entries, observer) => {
//             const [entry] = entries;
//
//             if (!entry.isIntersecting) return;
//
//             // animate number counter
//             const counterNum = document.querySelectorAll('.statistics__item-number');
//
//             const speed = 30;
//
//             counterNum.forEach((curElem) => {
//                 const updateNumber = () => {
//                     const targetNumber = parseInt(curElem.dataset.number);
//                     console.log('1 - target:', targetNumber);
//                     const initialNum = parseInt(curElem.textContent);
//                     console.log(typeof initialNum);
//
//                     const incrementNumber = Math.trunc(targetNumber / speed);
//                     console.log('2 - incrementNumber:', incrementNumber);
//
//                     if (initialNum < targetNumber) {
//                         console.log('yes')
//                         curElem.textContent = `${initialNum + incrementNumber}+`;
//                         setTimeout(updateNumber, 10);
//                     }
//                 };
//
//                 updateNumber();
//             });
//
//             observer.unobserve(statisticsSection);
//         },
//         {
//             root: null,
//             threshold: 0,
//         }
//     );
//
//     statisticsObserver.observe(statisticsSection);
// }

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

const resizeHandler = () => {

}

const domContentLoadedHandler = () => {
    // initAnimatedNumbers()
    initSlider();
    window.addEventListener('scroll', initStickyHeader);
}

const loadHandler = () => {
    // AOS.init({
    //     duration: 500,
    //     easing: "ease-in-out",
    //     once: true,
    //     mirror: false,
    //     disable: window.innerWidth < 768
    // });

    hidePreloader();
}

window.addEventListener('resize', resizeHandler);
window.addEventListener('DOMContentLoaded', domContentLoadedHandler);
window.addEventListener('load', loadHandler);