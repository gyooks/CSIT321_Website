import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const sectionIds = ['top', 'WhyBuy', 'About', 'Features', 'Download'];

function ScrollSpy() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const newHash = `#${entry.target.id}`;
            if (window.location.hash !== newHash) {
              history.replaceState(null, '', newHash);
            }
          }
        }
      },
      {
        rootMargin: '0px 0px -60% 0px', // triggers when top 40% is visible
        threshold: 0.3,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}

export default ScrollSpy;