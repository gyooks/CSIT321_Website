'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Features() {
  const features = [
    {
      image: '/img1.jpg',
      title: 'Hand Tracking',
      desc: 'Control games using your hands.',
    },
    {
      image: '/img2.jpg',
      title: 'No Controllers',
      desc: 'No gloves or remotes needed.',
    },
    {
      image: '/img3.jpg',
      title: 'Immersive Gameplay',
      desc: 'Next-level interaction.',
    },
    {
      image: '/img4.jpg',
      title: 'High Accuracy',
      desc: 'Optimized for low-latency motion.',
    },
    {
      image: '/img5.jpg',
      title: 'Gesture Recognition',
      desc: 'Recognize multiple hand gestures seamlessly.',
    },
    {
      image: '/img6.jpg',
      title: 'Plug and Play',
      desc: 'Simple setup, no calibration required.',
    },
  ];

  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: 'center' });

  useEffect(() => {
    const autoplay = () => {
      if (!embla) return;
      const interval = setInterval(() => embla.scrollNext(), 3000);
      return () => clearInterval(interval);
    };
    const stop = autoplay();
    return stop;
  }, [embla]);

  return (
    <section
      id="Features"
      className="h-screen bg-gradient-to-br from-[#1a032d] to-[#20062e] px-6 pt-32 pb-20 text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-bold mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Features
        </motion.h2>

        <Swiper
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000 }}
          pagination={{
            el: '.custom-swiper-pagination',
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          {features.map((feature, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-md rounded-3xl shadow-xl border border-white/10 max-w-xs mx-auto"
              >
                <div className="w-40 h-40 rounded-full border-4 border-pink-500 overflow-hidden shadow-lg">
                  <motion.img
                    src={feature.image}
                    alt={feature.title}
                    className="object-cover w-full h-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mt-5">{feature.title}</h3>
                <p className="text-sm text-white/70 mt-2">{feature.desc}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Dots */}
        <div className="custom-swiper-pagination mt-10 flex justify-center gap-2"></div>
      </div>
    </section>
  );
}

export default Features;
