import React from 'react';
import { motion } from 'framer-motion';

function Download() {
  return (
    <section
      id="Download"
      className="min-h-screen bg-gradient-to-br from-[#1a032d] to-[#20062e] px-6 pt-32 pb-20 text-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* 📝 Text Content */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl font-bold mb-6">Download</h2>
          <p className="text-white/80 text-lg mb-6 max-w-xl">
            Get started with <span className="text-pink-400 font-semibold">GWBH</span> — the gesture-based gaming experience.
            Download our app and enjoy real-time hand tracking, no gloves or remotes needed.
          </p>

          <a
            href="/assets/gwbh_demo.zip" // Or use a download handler
            download
            className="inline-block bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition shadow-md"
          >
            ⬇️ Download Now
          </a>
        </motion.div>

        {/* 🎥 Video Section */}
        <motion.div
          className="lg:w-1/2 rounded-xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto rounded-xl"
            onError={(e) => {
              e.target.style.display = 'none';
              const fallback = document.createElement('img');
              fallback.src = '/assets/loop_fallback.gif';
              fallback.className = 'w-full h-auto rounded-xl';
              e.target.parentNode.appendChild(fallback);
            }}
          >
            <source src="/assets/your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

      </div>
    </section>
  );
}

export default Download;
