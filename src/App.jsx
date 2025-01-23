import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NewsList from './components/NewsList';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technology" element={<NewsList category="technology" />} />
          <Route path="/sports" element={<NewsList category="sports" />} />
          <Route path="/business" element={<NewsList category="business" />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
