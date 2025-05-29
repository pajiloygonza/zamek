
document.querySelectorAll('.social-toggle').forEach(function(toggle) {
    toggle.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();

        this.classList.toggle('open');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const headerBurger = document.querySelector('.header-burger');
    const menuMobileOverlay = document.querySelector('.menu-mobile__overlay');
    const menuMobileClose = document.querySelector('.menu-mobile__close');
    const menuMobileLinks = document.querySelectorAll('.menu-mobile__link');
    const burgerSection = document.querySelector('.burger-section');
    const menuMobile = document.querySelector('.menu-mobile');
    const body = document.body;
    const modal = document.getElementById('myModal');

    function toggleMenu() {
        if (headerBurger) headerBurger.classList.toggle('active');
        if (burgerSection) burgerSection.classList.toggle('active');
        if (menuMobile) menuMobile.classList.toggle('active');
        if (body) body.classList.toggle('no-scroll');
        if (modal) modal.classList.remove('active');
    }

    if (headerBurger) headerBurger.addEventListener('click', toggleMenu);
    if (menuMobileOverlay) menuMobileOverlay.addEventListener('click', toggleMenu);
    if (menuMobileClose) menuMobileClose.addEventListener('click', toggleMenu);
    
    menuMobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    if (typeof WOW === 'function') {
        new WOW().init();
    }

    let sectionOffsets = {
        '#section0': 0,
        '#section1': -90,
        '#section2': 100,
        '#section1-m': 100,
    };

    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            let destination = target.offsetTop;
            let offsetTop = sectionOffsets[this.getAttribute('href')] || 20;


            let start = window.pageYOffset;
            let distance = destination - offsetTop - start;
            let duration = 1000;
            let startTime = null;

            function smoothScroll(currentTime) {
                if (startTime === null) startTime = currentTime;
                let timeElapsed = currentTime - startTime;
                let run = ease(timeElapsed, start, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(smoothScroll);
            }

            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(smoothScroll);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const swiperParams = {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        slidesPerView: 2,
        spaceBetween: 40,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        speed: 500,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            489: {
                slidesPerView: 2,
            }
        },
    };

    const swiperContainer = document.querySelector('.mobile-cards-container');
    if (swiperContainer) {
        new Swiper(swiperContainer, swiperParams);
    }

    const swiperContainer2 = document.querySelector('.mobile-reviews-section-cards-container');
    if (swiperContainer2) {
        new Swiper(swiperContainer2, swiperParams);
    }
});