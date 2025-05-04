import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./NavLink.jsx";

const Layout = ({ children }) => {
  return (
    <>
        <main>{children}</main>
    </>
  );
};

export default Layout;
