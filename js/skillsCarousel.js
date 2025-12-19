
export function initSkillsCarousel() {
    const skillsCarousel = new Swiper('.skills-carousel', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        watchSlidesVisibility: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 3,
            },
        },
        observer: true,
        observeParents: true,
    });
}
