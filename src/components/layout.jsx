import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./NavLink.jsx";

const Layout = ({ children }) => {
  return (
    <>
        <NavBar />
        <main>{children}</main>
        <Footer />
    </>
  );
};

export default Layout;
