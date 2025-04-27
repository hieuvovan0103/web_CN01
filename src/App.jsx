// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import BlogList from './BlogList';
import Blog from './Blog';
import ProductPage from './components/ProductPage'; // Thêm import này
import QA from './pages/QA';
import About from "./pages/About.jsx";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/bl" element={<Blog />} />
          <Route path="/products" element={<ProductPage />} /> {/* Thêm route mới */}
          <Route path="/QA" element={<QA />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
