
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: "Brandon",
    quote: "This is insane — I played without a controller and it worked like magic.",
    stars: 4,
  },
  {
    name: "Yugin",
    quote: "Super responsive and immersive. Can't wait for more game support.",
    stars: 3,
  },
  {
    name: "Ryan",
    quote: "Interesting experience!",
    stars: 4,
  },
];

export default function Reviews() {
  return (
    <section
      id="Reviews"
      className="min-h-[50vh] bg-gradient-to-tr from-black via-purple-900 to-gray-900 text-white px-6 py-10 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">🌟 What Players Say</h2>
        <div className="grid gap-4 md:grid-cols-3 px-2">
          {testimonials.map((review, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-4 shadow-xl hover:scale-105 transition-all"
            >
              <FaQuoteLeft className="text-pink-400 text-xl mb-2" />
              <p className="text-white/90 mb-2 italic text-sm">"{review.quote}"</p>
              <div className="flex justify-center gap-1 mb-1">
                {Array.from({ length: review.stars }, (_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>
              <p className="text-white/70 font-semibold text-sm mt-1">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
