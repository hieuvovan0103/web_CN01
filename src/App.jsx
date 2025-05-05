// src/App.js
import React from 'react';
import {BrowserRouter as Router, Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Layout from './components/Layout';
import AdminLayout from './components/AdminLayout';

import HomePage from './pages/HomePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import Blog from './pages/Blog.jsx';
import BlogList from './pages/BlogList.jsx';
import ProductPage from './pages/ProductPage.jsx';
import Login from './pages/LoginPage.jsx';
import QA from './pages/QA';
import About from "./pages/About.jsx";
import Navbar from './components/NavLink.jsx';
import Footer from './components/Footer.jsx';
import Register from './pages/RegisterPage.jsx';
import NotFound from './pages/NotFound.jsx';
import ProductDetail from './components/ProductDetail';
// import Dashboard from "./pages/Dashboard.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";

function AppContent() {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith("/admin");
  const hideLayout = ["/login", "/register", "/admin"].some(path => location.pathname.startsWith(path));
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(() => {
      return localStorage.getItem('isLoggedIn') === 'true';
  });

    React.useEffect(() => {
        localStorage.setItem('isLoggedIn', isLoggedIn ? 'true' : 'false');
    }, [isLoggedIn]);

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("isLoggedIn");
        navigate('/login');
    };

  if (isAdminPath) {
    return (
        <AdminLayout handleLogout={handleLogout}>
        <Routes>
            <Route path="/admin" element={<AdminDashboard />} />
            {/* Có thể thêm các route con tại đây, ví dụ: */}
            {/* <Route path="/admin/users" element={<UserManagement />} /> */}
          </Routes>
        </AdminLayout>
    );
  }

  return (
      <>
        {!hideLayout && <Navbar isLoggedIn={isLoggedIn} />}
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/QA" element={<QA />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
          </Routes>
        </Layout>
        {!hideLayout && <Footer isLoggedIn={isLoggedIn} />}
      </>
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
