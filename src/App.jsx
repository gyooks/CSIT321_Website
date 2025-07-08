import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import Home from './components/Home';
import Navbar from './components/Navbar';

function AppContent() {
  const location = useLocation();
  const hideNavbarRoutes = ['/']; 

  return (
    <div className="relative">
      {/* Only show navbar if not on root */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
