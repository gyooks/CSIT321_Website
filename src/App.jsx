import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Features from './components/Features';
import Download from './components/Download';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative">
      <Home />
      <Navbar />
      <About />
      <Features />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
