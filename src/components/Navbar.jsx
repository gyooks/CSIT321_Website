import React from 'react';

function Navbar(){
    return(
        <section>
            {/*Glass Nav Bar*/}
            <header className="fixed top-0 left-0 w-full px-10 py-6 flex justify-between items-center backdrop-blur-md bg-white/5 border-b border-white/10 z-50">
                <div className="text-2xl font-bold tracking-wide"><a href='/'>🖐️ GWBH</a></div>
                        <nav className="hidden md:flex space-x-8 text-white/80">
                            <a href="/Home#About" className="hover:text-pink-400">About</a>
                            <a href="#features" className="hover:text-pink-400">Features</a>
                            <a href="#download" className="hover:text-pink-400">Download</a>
                        </nav>
                    <a href="#talk" className="bg-white text-purple-700 px-4 py-2 rounded-full font-semibold hover:bg-pink-100 transition">Let’s Talk</a>
            </header>
        </section>
    );
}

export default Navbar;