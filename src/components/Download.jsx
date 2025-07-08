import React from "react";

function Download(){
    return(
         <section id = 'Download' className="h-screen px-8 py-16 flex items-center justify-center">
            <video className="rounded shadow-lg w-full md:w-1/2" autoPlay muted loop>
                <source src="your-video.mp4" type="video/mp4" />
            </video>
            <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Download</h2>
                <p className="text-lg">
                Insert a clear and helpful description about your product or service.
                </p>
            </div>
        </section>
    );
};

export default Download;