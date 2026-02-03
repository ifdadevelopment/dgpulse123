'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      once: true,                // animation runs only once
      duration: 1000,
      easing: 'ease-out-cubic',
      offset: 120,
      disableMutationObserver: true,
    });

    window.addEventListener('load', () => {
      AOS.refreshHard();
    });
  }, []);

  return null;
}
