// Animaciones al hacer scroll y sombra del encabezado.
export function initAnimations() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets = document.querySelectorAll('.reveal, .timeline, .git-graph');

  // Sin soporte o con "reducir movimiento": mostrar todo de inmediato
  if (reduceMotion || !('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // anima solo una vez
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    targets.forEach(el => observer.observe(el));
  }

  // Botón flotante de WhatsApp
  const waButton = document.getElementById('wa-float');
  const contact = document.getElementById('contacto');
  if (waButton) {
    // Cuando termina su animación de entrada, queda listo para mostrarse/ocultarse rápido
    waButton.addEventListener('animationend', (event) => {
      if (event.animationName === 'wa-in') waButton.classList.add('is-shown');
    });
    if (reduceMotion) waButton.classList.add('is-shown');

    // Se oculta cuando Contacto ya ocupa la mitad inferior de la pantalla
    if (contact && 'IntersectionObserver' in window) {
      new IntersectionObserver(([entry]) => {
        waButton.classList.toggle('is-hidden', entry.isIntersecting);
      }, { rootMargin: '0px 0px -50% 0px' }).observe(contact);
    }
  }

  // Sombra en el encabezado cuando la página ya bajó
  const header = document.getElementById('site-header');
  if (!header) return;
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
