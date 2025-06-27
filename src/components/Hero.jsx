function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Gaming With Bare Hands
      </h1>
      <p className="text-lg md:text-2xl text-gray-300 mb-6">
        An adventure beyond imagination. Available now on all platforms.
      </p>
      <a
        href="#"
        className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-full text-white font-semibold transition"
      >
        Play Now
      </a>
    </section>
  )
}

export default Hero
