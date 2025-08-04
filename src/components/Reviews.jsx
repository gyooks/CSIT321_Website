import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: "Alex T.",
    quote: "This is insane — I played without a controller for the first time and it worked like magic.",
    stars: 5,
  },
  {
    name: "Jamie R.",
    quote: "Super responsive and immersive. Can't wait for more games to support this.",
    stars: 4,
  },
  {
    name: "Jordan K.",
    quote: "Finally, something truly futuristic. The gesture tracking feels smooth and intuitive.",
    stars: 5,
  },
];

export default function Reviews() {
  return (
    <section
      id="Reviews"
      className="h-screen bg-gradient-to-tr from-black via-purple-900 to-gray-900 text-white px-6 py-16 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">🌟 What Players Say</h2>
        <div className="grid gap-8 md:grid-cols-3 px-4">
          {testimonials.map((review, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:scale-105 transition-all"
            >
              <FaQuoteLeft className="text-pink-400 text-2xl mb-3" />
              <p className="text-white/90 mb-4 italic">"{review.quote}"</p>
              <div className="flex justify-center gap-1 mb-2">
                {Array.from({ length: review.stars }, (_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-white/70 font-semibold mt-2">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
