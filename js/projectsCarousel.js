export function initProjectsCarousel() {
  const swiper = new Swiper('.projects-carousel', {
    loop: true,
    slidesPerView: 1.15,   // mobile: 1 card + peek a ambos lados
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
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
        slidesPerView: 1.5,  // tablet: más peek
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 2.2,  // desktop: 2 cards + peek
        spaceBetween: 60,
      },
    }
  });
}