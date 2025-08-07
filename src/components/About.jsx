function About() {
  return (
    <section
      id="About"
    >
      <div className="h-screen px-8 py-16 flex items-center justify-center">
        
        {/* 🎥 Video Section */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <video
            src="/public/assets/loop_video.mp4" // Replace with your actual video file
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
          />
        </div>

        {/* 📝 Text Description */}
        <div>
          <h2 className="text-4xl font-bold mb-4">About</h2>
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