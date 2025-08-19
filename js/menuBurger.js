export function initMenuBurger() {
    const toggleBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    // Asegurar que el menú tenga las clases de transición
    mobileMenu.classList.add('transition-all', 'duration-300', 'ease-in-out', 'overflow-hidden');
    
    toggleBtn.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        
        if (isHidden) {
            // Abrir menú con animación
            mobileMenu.classList.remove('hidden');
            mobileMenu.style.height = '0';
            
            // Pequeño delay para iniciar la animación
            setTimeout(() => {
                mobileMenu.style.height = mobileMenu.scrollHeight + 'px';
            }, 10);
            
            toggleBtn.setAttribute('aria-expanded', 'true');
            mobileMenu.setAttribute('aria-hidden', 'false');
        } else {
            // Cerrar menú con animación
            mobileMenu.style.height = mobileMenu.scrollHeight + 'px';
            
            setTimeout(() => {
                mobileMenu.style.height = '0';
            }, 10);
            
            // Esperar a que termine la animación para ocultar completamente
            mobileMenu.addEventListener('transitionend', function handler() {
                if (mobileMenu.style.height === '0px') {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.style.height = '';
                    mobileMenu.removeEventListener('transitionend', handler);
                }
            });
            
            toggleBtn.setAttribute('aria-expanded', 'false');
            mobileMenu.setAttribute('aria-hidden', 'true');
        }
    });

    // Cerrar menú al hacer click en enlaces
    mobileMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.style.height = '0';
                toggleBtn.setAttribute('aria-expanded', 'false');
                mobileMenu.setAttribute('aria-hidden', 'true');
                
                mobileMenu.addEventListener('transitionend', function handler() {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.style.height = '';
                    mobileMenu.removeEventListener('transitionend', handler);
                });
            }
        });
    });

    // Cerrar menú al redimensionar la ventana (si se cambia a desktop)
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            mobileMenu.style.height = '';
            toggleBtn.setAttribute('aria-expanded', 'false');
            mobileMenu.setAttribute('aria-hidden', 'true');
        }
    });
}