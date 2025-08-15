import { useEffect } from 'react';
import { motion } from 'framer-motion';
import About from './About';
import Features from './Features';
import Download from './Download';
import WhyBuy from './WhyBuy';
import ScrollSpy from './Scroll';
import Reviews from './Reviews';
import DevLog from './DevLog';

export default function Home() {
  useEffect(() => {
  if (window.location.hash) {
    const element = document.querySelector(window.location.hash);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }
}, []);

  return (
    <div className="scroll-smooth bg-gradient-to-tr from-purple-900 via-black to-purple-900 min-h-screen text-white">
      {/* 🌟 Hero Section */}
      <section
        id="top"
        className="h-screen py-20 px-6 relative overflow-hidden"
      >
        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-80 h-80 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-ping top-[-50px] left-[-50px]" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between pt-16 h-full">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:w-1/2 space-y-6"
          >
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-white via-purple-300 to-pink-500 text-transparent bg-clip-text leading-tight">
              Play Without Controllers. <br /> Just Your Hands.
            </h1>
            <p className="text-lg text-white/90 max-w-lg">
              Control games using real-time hand gestures. No gloves. No remotes. Just pure immersive motion.
            </p>
            <a
              href="#WhyBuy"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 text-lg rounded-full shadow-lg hover:scale-105 transition"
            >
              🚀 Try the Demo
            </a>
      
          </motion.div>
           {/* Video */}
          {/* YouTube Embed */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="lg:w-1/2 flex justify-center"
>
  <div className="rounded-xl shadow-2xl w-full max-w-md aspect-video overflow-hidden">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/llBsCIWUZvc?si=e6GG4qCJOayDAfZ_"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>
</motion.div>

        </div>
      </section>

      {/* 🧩 Other Fullscreen Sections */}
      <ScrollSpy />
      <WhyBuy />
      <About />
      <Features />
      <Reviews/>
      <Download />
      <DevLog />
    </div>
  );
}