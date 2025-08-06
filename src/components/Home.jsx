import React from 'react';
import { motion } from 'framer-motion';
import About from './About';
import Features from './Features';
import Download from './Download';
import WhyBuy from './WhyBuy';
import ScrollSpy from './Scroll';
import Reviews from './Reviews';

export default function Home() {
  return (
    <div className="scroll-smooth bg-gradient-to-tr from-purple-900 via-black to-purple-900 min-h-screen text-white">
      
      {/* 🌟 Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-tr from-gray-900 via-black to-gray-800 text-white overflow-hidden flex items-center justify-center px-6">
        {/* Glow Ball Background Effects */}
        <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-purple-600 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-[-80px] right-[-80px] w-72 h-72 bg-pink-500 rounded-full blur-[100px] opacity-30 animate-ping"></div>

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-white via-purple-300 to-pink-400 text-transparent bg-clip-text animate-fade-in">
            Play Without Controllers. <br /> Just Your Hands.
          </h1>

          <p className="mt-6 text-lg text-white/80 animate-fade-in delay-200">
            Step into the future of gaming. No gloves. No remotes. Just natural hand gestures, powered by Machine Learning.
          </p>

          <div className="mt-10 animate-fade-in delay-500">
            <a href="#WhyBuy" className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 rounded-full shadow-lg text-lg font-semibold hover:scale-105 transition">
              🕹️ Play Now
            </a>
          </div>
        </div>

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
