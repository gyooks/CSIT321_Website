import Hero from './components/Hero';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
