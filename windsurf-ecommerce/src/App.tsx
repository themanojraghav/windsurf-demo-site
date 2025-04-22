import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import CategoriesPage from './components/pages/CategoriesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/products" element={<CategoriesPage />} /> {/* Temporarily using CategoriesPage */}
        <Route path="/about" element={<HomePage />} /> {/* Temporarily using HomePage */}
        <Route path="/contact" element={<HomePage />} /> {/* Temporarily using HomePage */}
        <Route path="*" element={<HomePage />} /> {/* Fallback route */}
      </Routes>
    </Router>
  );
}

export default App;
