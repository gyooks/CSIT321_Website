import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function AppContent() {
  return (
    <Router basename="/CSIT321_Website">
      <div className="relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function App() {
  return <AppContent />;
}

export default App;
