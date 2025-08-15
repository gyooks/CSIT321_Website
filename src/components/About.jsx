function About() {
  return (
    <section id="About" className="min-h-screen px-8 py-16 flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-6xl">
        
        {/*Video Section */}
        <div className="rounded-xl overflow-hidden shadow-lg aspect-video w-full lg:w-1/2">
          <iframe
            src="https://www.youtube.com/embed/J-81qFnmKD8?si=CSSocjI8epK2-0VY  "
            title="YouTube video player"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>

        {/*Text Description */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-4 text-white">About</h2>
          <p className="text-white/80 text-lg leading-relaxed">
            Experience the next level of interaction with GWBH – a gesture-based game control system. 
            No gloves, no remotes – just your hands and a screen. Designed for immersive, controller-free gameplay.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
