export function initProjectsCarousel() {
  const swiper = new Swiper('.projects-carousel', {
    loop: true,
    slidesPerView: 1.1,
    spaceBetween: 30,
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
        slidesPerView: 1.1,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2.1,
        spaceBetween: 50,
      },
    }
  });
}
