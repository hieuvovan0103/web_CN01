import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import HomePage from './HomePage.jsx';
import ContactPage from './ContactPage.jsx';
import BlogList from './BlogList.jsx'
import Blog from './Blog.jsx'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/bl" element={<Blog />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;