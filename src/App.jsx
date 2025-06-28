import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GWBH from './components/GWBH'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GWBH />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
