import React from 'react';
import {motion} from "framer-motion"

function Home() {
  return (
    <section className="relative min-h-screen bg-gradient-to-tr from-purple-900 via-black to-gray-900 text-white overflow-hidden px-6 py-24">
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-80 h-80 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-ping top-[-50px] left-[-50px]" />
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full filter blur-2xl opacity-20 animate-pulse bottom-[-80px] right-[-60px]" />
      </div>

      {/*Glass Nav Bar*/}
      <header className="absolute top-0 left-0 w-full px-10 py-6 flex justify-between items-center backdrop-blur-md bg-white/5 border-b border-white/10 z-50">
        <div className="text-2xl font-bold tracking-wide"><a href='/'>🖐️ GWBH</a></div>
        <nav className="hidden md:flex space-x-8 text-white/80">
          <a href="#about" className="hover:text-pink-400">About</a>
          <a href="#features" className="hover:text-pink-400">Features</a>
          <a href="#download" className="hover:text-pink-400">Download</a>
        </nav>
        <a href="#talk" className="bg-white text-purple-700 px-4 py-2 rounded-full font-semibold hover:bg-pink-100 transition">Let’s Talk</a>
      </header>

      {/*Main Content*/}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between pt-16">
        
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
            href="#play"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 text-lg rounded-full shadow-lg hover:scale-105 transition"
          >
            🚀 Try the Demo
          </a>
        </motion.div>

        {/*Demo Video*/}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:w-1/2"
        >
          <video
            src="/assets/gesture-demo.mp4" // Swap with your own file
            autoPlay
            loop
            muted
            playsInline
            className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}


export default Home;
