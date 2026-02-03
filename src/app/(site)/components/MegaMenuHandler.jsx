'use client';

import { useEffect } from 'react';

export default function MegaMenuHandler() {
  useEffect(() => {
    const megaDropdowns = document.querySelectorAll('.mega-menu-dropdown');

    function closeAllMegaMenus() {
      document
        .querySelectorAll('.mega-menu-dropdown .nav-link')
        .forEach(link => {
          link.classList.remove('show');
          link.setAttribute('aria-expanded', 'false');
        });

      document
        .querySelectorAll('.mega-menu-dropdown .dropdown-menu')
        .forEach(menu => {
          menu.classList.remove('show');
          menu.style.opacity = '';
          menu.style.transform = '';
          menu.removeAttribute('data-bs-popper');
        });
    }

    megaDropdowns.forEach(dropdown => {
      const toggle = dropdown.querySelector('.nav-link');
      const menu = dropdown.querySelector('.dropdown-menu');

      if (!toggle || !menu) return;

      // CLICK (Mobile + Desktop)
      toggle.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();

        const isOpen = toggle.classList.contains('show');
        closeAllMegaMenus();

        if (!isOpen) {
          toggle.classList.add('show');
          toggle.setAttribute('aria-expanded', 'true');

          menu.classList.add('show');
          menu.style.opacity = '1';
          menu.style.transform = 'translateY(0)';
          menu.setAttribute('data-bs-popper', 'static');
        }
      });

      // HOVER (Desktop only)
      dropdown.addEventListener('mouseenter', () => {
        if (window.innerWidth >= 992) {
          closeAllMegaMenus();
          toggle.classList.add('show');
          toggle.setAttribute('aria-expanded', 'true');

          menu.classList.add('show');
          menu.style.opacity = '1';
          menu.style.transform = 'translateY(0)';
          menu.setAttribute('data-bs-popper', 'static');
        }
      });

      dropdown.addEventListener('mouseleave', () => {
        if (window.innerWidth >= 992) {
          closeAllMegaMenus();
        }
      });
    });

    // Outside click close
    document.addEventListener('click', closeAllMegaMenus);

    return () => {
      document.removeEventListener('click', closeAllMegaMenus);
    };
  }, []);

  return null;
}
