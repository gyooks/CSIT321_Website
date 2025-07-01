import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import GWBH from './components/GWBH';
import Home from './components/Home';
import Navbar from './components/Navbar';

function AppContent() {
  const location = useLocation();
  const hideNavbarRoutes = ['/']; // 👈 use "/" not "GWBH /"

  return (
    <div className="relative">
      {/* Only show navbar if not on root */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<GWBH />} />
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
