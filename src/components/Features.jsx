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
    title: 'Hand Tracking',
    desc: 'Control games using your hands.',
  },
  {
    image: '/img5.jpg',
    title: 'No Controllers',
    desc: 'No gloves or remotes needed.',
  },
  {
    image: '/img6.jpg',
    title: 'Immersive Gameplay',
    desc: 'Next-level interaction.',
  },
];
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: 'center', autoplay: true });

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
    <section id="Features" className="w-full">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Features</h2>

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
                className="flex flex-col items-center text-center p-4 bg-white/5 backdrop-blur-sm rounded-3xl shadow-lg border border-white/10 max-w-xs mx-auto"
              >
                <div className="w-40 h-40 rounded-full border-4 border-purple-500 overflow-hidden shadow-lg">
                  <motion.img
                    src={feature.image}
                    alt={feature.title}
                    className="object-cover w-full h-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mt-4">{feature.title}</h3>
                <p className="text-sm text-gray-300 mt-2">{feature.desc}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* pagination dots below */}
        <div className="custom-swiper-pagination mt-8 flex justify-center" />
      </div>
    </section>
  );
}

export default Features;