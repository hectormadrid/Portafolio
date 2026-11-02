// Menú del celular: abre y cierra la lista de enlaces.
// La animación de apertura está en style.css (#mobile-menu).
export function initMenuBurger() {
  const button = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!button || !menu) return;

  const iconOpen = button.querySelector('[data-icon="open"]');
  const iconClose = button.querySelector('[data-icon="close"]');

  function setOpen(isOpen) {
    menu.classList.toggle('hidden', !isOpen);
    button.setAttribute('aria-expanded', String(isOpen));
    button.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    iconOpen?.classList.toggle('hidden', isOpen);
    iconClose?.classList.toggle('hidden', !isOpen);
  }

  // Abrir o cerrar con el botón
  button.addEventListener('click', () => {
    setOpen(menu.classList.contains('hidden'));
  });

  // Cerrar al elegir un enlace
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setOpen(false));
  });

  // Cerrar con la tecla Escape y devolver el foco al botón
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !menu.classList.contains('hidden')) {
      setOpen(false);
      button.focus();
    }
  });

  // Cerrar si la pantalla pasa a tamaño escritorio
  window.matchMedia('(min-width: 768px)').addEventListener('change', (event) => {
    if (event.matches) setOpen(false);
  });
}
