import About from './About';
import Features from './Features';
import Download from './Download';
import WhyBuy from './WhyBuy';
import ScrollSpy from './Scroll';
import Reviews from './Reviews';

export default function Home() {
  return (
    <div id="Home" className="scroll-smooth bg-gradient-to-tr from-purple-900 via-black to-purple-900 min-h-screen text-white">
      
      {/* 🌟 Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-tr from-gray-900 via-black to-gray-800 text-white overflow-hidden flex items-center justify-center px-6">

        {/* Floating Hand Image / Video */}
        <div className="absolute top-20 right-10 hidden lg:block">
          <img
            src="/assets/gesture-placeholder.gif"
            alt="Hand Gesture Demo"
            className="w-96 rounded-2xl shadow-2xl hover:scale-105 transition duration-300"
          />
        </div>
      </div>

      {/* 📦 Remaining Sections */}
      <ScrollSpy />
      <About />
      <Features />
      <WhyBuy />
      <Reviews />
      <Download />
    </div>
  );
}
