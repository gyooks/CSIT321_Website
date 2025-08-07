import { motion } from 'framer-motion';
import { FaHandPaper, FaCamera, FaCogs, FaBolt, FaThumbsUp, FaLock } from 'react-icons/fa';

function WhyBuy() {
  const benefits = [
    {
      icon: <FaHandPaper className="text-5xl text-pink-500 mx-auto" />,
      title: 'Play Naturally',
      desc: 'Control games with just your hands—no controllers needed. Experience gaming as it was meant to be: intuitive and immersive.'
    },
    {
      icon: <FaCamera className="text-5xl text-pink-500 mx-auto" />,
      title: 'No Extra Gear',
      desc: 'Works with any standard webcam. Start playing without buying additional hardware.'
    },
    {
      icon: <FaCogs className="text-5xl text-pink-500 mx-auto" />,
      title: 'Tailor Your Experience',
      desc: 'Create custom gesture presets for each game. Make the controls work for you, not the other way around.'
    },
    {
      icon: <FaBolt className="text-5xl text-pink-500 mx-auto" />,
      title: 'Seamless Performance',
      desc: 'Low latency ensures your gestures translate instantly into game actions, keeping you in the flow of play.'
    },
    {
      icon: <FaThumbsUp className="text-5xl text-pink-500 mx-auto" />,
      title: 'Easy to Master',
      desc: 'Our user-friendly interface and comprehensive tutorials make it simple for anyone to start using gesture controls.'
    },
    {
      icon: <FaLock className="text-5xl text-pink-500 mx-auto" />,
      title: 'Your Privacy, Your Control',
      desc: 'Pause or stop gesture recognition anytime. You\'re in complete control of your gaming environment.'
    }
  ];

  return (
    <section id="WhyBuy" className="py-20 px-6 bg-gradient-to-br from-[#1a032d] to-[#20062e]">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-purple-300 to-pink-500 text-transparent bg-clip-text"
        >
          Why Choose Gaming With Bare Hands?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white/80 mb-12 max-w-3xl mx-auto text-lg"
        >
          Experience gaming like never before with our revolutionary gesture-based control system. Designed for gamers who crave immersion and innovation, our technology lets you control games using just your hands, delivering unmatched interactivity.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white/5 backdrop-blur-md rounded-3xl shadow-xl border border-white/10"
            >
              {benefit.icon}
              <h3 className="text-2xl font-semibold text-white mt-4 mb-2">{benefit.title}</h3>
              <p className="text-white/80">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <a
            href="#Download"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Get Started Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyBuy;