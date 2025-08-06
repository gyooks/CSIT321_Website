import React, { useEffect, useState } from 'react';

function Navbar() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['WhyBuy', 'About', 'Features', 'Download'];

      for (let i = 0; i < sections.length; i++) {
        const sec = document.getElementById(sections[i]);
        if (sec) {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = (id) =>
    `hover:text-pink-400 transition-colors ${
      activeSection === id ? 'text-pink-400 font-bold' : 'text-white/80'
    }`;

  return (
    <section>
      {/* Glass Nav Bar */}
      <header className="fixed top-0 left-0 w-full px-10 py-6 flex justify-between items-center backdrop-blur-md bg-white/5 border-b border-white/10 z-50">
        <div className="text-2xl font-bold tracking-wide">
          <a href="/CSIT321_Website/">🖐️ GWBH</a>
        </div>
        <nav className="hidden md:flex space-x-8 text-white/80">
          <a href="/CSIT321_Website/#About" className={navLinkClass('About')}>
            About
          </a>
          <a href="/CSIT321_Website/#Features" className={navLinkClass('Features')}>
            Features
          </a>
          <a href="/CSIT321_Website/#WhyBuy" className={navLinkClass('WhyBuy')}>
            Why Buy
          </a>
          <a href="/CSIT321_Website/#Reviews" className={navLinkClass('Reviews')}>
            Reviews
          </a>
          <a href="/CSIT321_Website/#Download" className={navLinkClass('Download')}>
            Download
          </a>
        </nav>
        <a
          href="/CSIT321_Website/#talk"
          className="bg-white text-purple-700 px-4 py-2 rounded-full font-semibold hover:bg-pink-100 transition"
        >
          Let’s Talk
        </a>
      </header>
    </section>
  );
}

export default Navbar;
